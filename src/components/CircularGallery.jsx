import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';
import './CircularGallery.css';

function lerp(a, b, t) {
  return a + (b - a) * t;
}

class MediaItem {
  constructor({ gl, image, index, total, scene, viewport, borderRadius, onSelect }) {
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.total = total;
    this.scene = scene;
    this.viewport = viewport;
    this.borderRadius = borderRadius;
    this.onSelect = onSelect;

    this.createMesh();
    this.positionByIndex();
  }

  createMesh() {
    const texture = new Texture(this.gl);
    const img = new Image();
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
    };

    const geometry = new Plane(this.gl, { heightSegments: 20, widthSegments: 20 });

    this.program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;

        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D tMap;
        uniform float radius;

        float rounded(vec2 p, float r){
          vec2 q = abs(p - 0.5);
          return step(max(q.x, q.y), 0.5 - r);
        }

        void main() {
          vec4 img = texture2D(tMap, vUv);
          float mask = rounded(vUv, radius);
          if(mask < 0.1) discard;
          gl_FragColor = img;
        }
      `,
      uniforms: {
        tMap: { value: texture },
        radius: { value: this.borderRadius }
      },
      transparent: true
    });

    this.mesh = new Mesh(this.gl, { geometry, program: this.program });
    this.mesh.setParent(this.scene);
  }

  positionByIndex() {
    const angle = (Math.PI * 2 * this.index) / this.total;
    const radius = this.viewport.width * 0.45;

    this.mesh.position.x = Math.sin(angle) * radius;
    this.mesh.position.z = Math.cos(angle) * radius;
    this.mesh.position.y = 0;

    this.mesh.rotation.y = -angle;
  }

  updateRotation(scroll) {
    const angle = ((this.index + scroll) * (Math.PI * 2)) / this.total;
    const radius = this.viewport.width * 0.45;

    this.mesh.position.x = Math.sin(angle) * radius;
    this.mesh.position.z = Math.cos(angle) * radius;
    this.mesh.rotation.y = -angle + Math.PI;
  }

  checkClick(ray) {
    const dist = Math.hypot(ray.x - this.mesh.position.x, ray.z - this.mesh.position.z);
    if (dist < this.viewport.width * 0.1) {
      this.onSelect(this.index);
    }
  }
}

export default function CircularGallery({ items = [], borderRadius = 0.1, onSelect }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!items.length) return;

    const container = containerRef.current;

    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const camera = new Camera(gl);
    camera.position.z = 25;

    const scene = new Transform();

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      const aspect = container.clientWidth / container.clientHeight;
      camera.perspective({ aspect });

      const fov = (camera.fov * Math.PI) / 180;
      const height = 2 * Math.tan(fov / 2) * camera.position.z;
      const width = height * aspect;

      viewport.width = width;
      viewport.height = height;
    };

    const viewport = { width: 1, height: 1 };
    resize();
    window.addEventListener('resize', resize);

    // Create media items
    const media = items.map((item, index) => {
      return new MediaItem({
        gl,
        image: item.image,
        index,
        total: items.length,
        scene,
        viewport,
        borderRadius,
        onSelect
      });
    });

    let scroll = 0;
    let scrollTarget = 0;

    const update = () => {
      scroll = lerp(scroll, scrollTarget, 0.1);

      media.forEach((m) => m.updateRotation(scroll));

      renderer.render({ scene, camera });
      requestAnimationFrame(update);
    };
    update();

    const onWheel = (e) => {
      scrollTarget += e.deltaY * 0.0015;
    };
    window.addEventListener('wheel', onWheel);

    const onClick = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * viewport.width;
      const z = 0;

      media.forEach((m) => m.checkClick({ x, z }));
    };
    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('click', onClick);
      container.innerHTML = '';
    };
  }, [items, borderRadius, onSelect]);

  return <div className="circular-gallery" ref={containerRef} />;
}
