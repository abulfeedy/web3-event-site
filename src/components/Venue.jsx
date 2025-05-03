import React from "react";

function Venue() {
  return (
    <div className="my-8 sm:my-12 md:my-16 text-center">
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(100vw);
          }
          20% {
            transform: translateX(0);
          }
          80% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100vw);
          }
        }
        .slide {
          display: inline-block;
          white-space: nowrap;
          animation: slide 12s ease-in-out infinite;
        }
        @media (max-width: 640px) {
          .slide {
            white-space: normal;
            animation: none;
            display: block;
          }
        }
      `}</style>
      <p className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
        27th April 2025
      </p>
      <div className="w-full overflow-hidden">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 slide">
          No. 54 Remitino Palace, Nova Etheris, 90124, Italy
        </h1>
      </div>
    </div>
  );
}

export default Venue;