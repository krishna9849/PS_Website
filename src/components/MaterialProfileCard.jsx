import React from "react";

export default function MaterialProfileCard({
  name,
  title,
  avatar,
  facebook,
  twitter,
  instagram,
}) {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-md">
      {/* Image */}
      <div className="relative mx-4 mt-4 h-72 overflow-hidden rounded-xl shadow-lg">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name + Role */}
      <div className="p-6 text-center">
        <h4 className="mb-2 text-2xl font-semibold text-blue-gray-900">
          {name}
        </h4>

        <p className="bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text text-base font-medium text-transparent">
          {title}
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-7 p-6 pt-2 text-2xl">
        {facebook && (
          <a
            href={facebook}
            className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-transparent"
          >
            <i className="fab fa-facebook"></i>
          </a>
        )}

        {twitter && (
          <a
            href={twitter}
            className="bg-gradient-to-tr from-sky-600 to-sky-400 bg-clip-text text-transparent"
          >
            <i className="fab fa-twitter"></i>
          </a>
        )}

        {instagram && (
          <a
            href={instagram}
            className="bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text text-transparent"
          >
            <i className="fab fa-instagram"></i>
          </a>
        )}
      </div>
    </div>
  );
}
