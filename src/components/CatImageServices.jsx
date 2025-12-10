

import React from 'react';
import dog from '../assets/dog.png';
import paw from '../assets/paw.png';
import doctor from '../assets/doctor.png';
import vaccum from '../assets/vaccum.png';
import spoon from '../assets/spoon.png';
import catbasket from '../assets/catbasket.png';

// Service Card Component
const ServiceCard = ({ icon, title, description }) => (
  <div
    style={{
      border: '2px solid rgba(237,109,78,1)',
      borderRadius: '15px',
      padding: '20px',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      // background: '#FFFFFF',
    }}
  >
    <div
      style={{
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        background: '#FF725E',
        margin: '0 auto 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={icon} alt={title} style={{ width: '40px', height: '40px' }} />
    </div>
    <h3
      style={{
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#000080',
        fontFamily: 'Noto Sans',
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontSize: '14px',
        lineHeight: '1.6',
        margin: '0',
        fontFamily: 'Noto Sans',
      }}
    >
      {description}
    </p>
  </div>
);

// Main Services Component
const Services = () => {
  const services = [
    {
      icon: vaccum,
      title: 'At-Home Grooming Services',
      description:
        'PetSaviour offers comprehensive grooming services that cater to each pet’s unique needs, right from the comfort of home. Services include nail trimming, bathing, coat brushing, styling, and more, tailored to help pets look and feel their best without the anxiety of travel.',
    },
    {
      icon: spoon,
      title: 'At-Home Lab Tests',
      description:
        'With our at-home lab testing services, there’s no need to visit a clinic; our technicians bring all the equipment to you. Whether it’s a routine check or a specific health test, our team ensures that your pet stays calm and relaxed while receiving professional, accurate diagnostic services.',
    },
    {
      icon: doctor,
      title: 'At-Home Doctor Consultations',
      description:
        'From preventive health advice to treatment for minor ailments, our vet consultations provide professional care and peace of mind in your pet’s most comfortable environment – home. This service is ideal for routine exams, behavior consultations, vaccinations, and more.',
    },
    {
      icon: paw,
      title: 'E-Commerce for Pet',
      description:
        'Our online store is stocked with premium, hand-picked pet products. From nutritious food options to toys and grooming supplies, PetSaviour has everything you need to keep your pet happy, healthy, and engaged. Our products are chosen for quality, safety, and comfort.',
    },
    {
      icon: dog,
      title: 'At-Home Dog Training',
      description:
        'Our trainers bring structured yet compassionate training sessions directly to your home, tailoring programs to address your dog’s specific behavior and obedience needs. Whether you’re looking to teach basic commands, we create a personalized training plan for lasting results.',
    },
  ];

  return (
    <div
      style={{
         // background: 'linear-gradient(135deg, #FFFAF0, #FDD6D3)',
        padding: '50px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <br></br>
      <br></br>
      <br></br>
      <h1
        style={{
          textAlign: 'center',
          fontFamily: 'Noto Sans',
          fontWeight: 700,
          fontSize: '48px',
          color: 'black',
          marginBottom: '125px',
          lineHeight: '65.38px',
        }}
      >
        Our Services
      </h1>

      {/* Services Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {services.slice(0, 3).map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
          maxWidth: '800px',
          margin: '40px auto 0',
        }}
      >
        {services.slice(3).map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Cat Basket Image */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: '50px',
          maxWidth: '1200px',
          margin: '40px auto 0',
        }}
      >
        <img
          src={catbasket}
          alt="Cat Basket"
          style={{
            width: '275px',
            height: '210px',
            position: 'absolute',
            top: '338%',
            left: '-50px', // Adjust horizontal position beside the 4th card
            transform: 'translateY(-50%)', // Center vertically relative to the card row
          }}
        />
      </div>
    </div>
  );
};

export default Services;
