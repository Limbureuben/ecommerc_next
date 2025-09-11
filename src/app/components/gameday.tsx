// app/page.tsx
"use client";

import Image from "next/image";

export default function GameDay() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      
      {/* Subtle floating football graphics */}
      <div className="absolute top-10 left-5 w-20 h-20 animate-float opacity-30">
        <Image
          src="/football1.png"
          alt="Football"
          width={80}
          height={80}
        />
      </div>
      <div className="absolute bottom-10 right-10 w-24 h-24 animate-float-slow opacity-20">
        <Image
          src="/football2.png"
          alt="Football"
          width={120}
          height={120}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/stadium-bg.jpg"
          alt="Football Stadium"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg animate-fadeIn">
            SportPesa <span className="text-[#2E9E41]">GameDay Genius</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 animate-fadeIn animate-delay-200">
            Play. Predict. Win. Join the future of football betting & trivia.
          </p>
          <button className="mt-6 px-8 py-3 bg-[#555879] hover:bg-[#444567] cursor-pointer rounded-2xl font-semibold shadow-lg transition-transform transform hover:scale-105 animate-fadeIn animate-delay-400">
            Get Started
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Predictions Card */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
          <Image
            src="/predictions.png"
            alt="Predictions"
            width={120}
            height={120}
            className="mb-4 animate-fadeIn animate-delay-200"
          />
          <h2 className="text-2xl font-bold mb-2 text-[#2E9E41] animate-fadeIn animate-delay-300">
            Predictions
          </h2>
          <p className="text-gray-300 mb-4 animate-fadeIn animate-delay-400">
            Test your football knowledge and predict match outcomes. Earn points
            and rewards with every correct call.
          </p>
          <button className="px-6 py-2 bg-[#555879] hover:bg-[#444567] cursor-pointer rounded-lg font-semibold transition-transform transform hover:scale-105">
            Start Predicting
          </button>
        </div>

        {/* Trivia Card */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
          <Image
            src="/trivia.png"
            alt="Trivia"
            width={120}
            height={120}
            className="mb-4 animate-fadeIn animate-delay-200"
          />
          <h2 className="text-2xl font-bold mb-2 text-[#2E9E41] animate-fadeIn animate-delay-300">
            Trivia
          </h2>
          <p className="text-gray-300 mb-4 animate-fadeIn animate-delay-400">
            Challenge yourself with fun football trivia questions. Prove your
            knowledge and climb the leaderboard!
          </p>
          <button className="px-6 py-2 bg-[#555879] hover:bg-[#444567] cursor-pointer rounded-lg font-semibold transition-transform transform hover:scale-105">
            Play Trivia
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 border-t border-gray-700">
        © {new Date().getFullYear()} GameDay Genius. All rights reserved.
      </footer>

      {/* Tailwind custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .animate-delay-100 {
          animation-delay: 0.1s;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }

        /* Subtle floating animations for graphics */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}




// // app/page.tsx
// "use client"; // Needed for animations and interactive elements

// import Image from "next/image";

// export default function GameDay() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      
//       {/* Floating football graphics */}
//       <div className="absolute top-10 left-5 w-20 h-20 animate-bounce opacity-30">
//         <Image
//           src="/football1.png" // place image in public folder
//           alt="Football"
//           width={80}
//           height={80}
//         />
//       </div>
//       <div className="absolute bottom-10 right-10 w-24 h-24 animate-pulse opacity-20">
//         <Image
//           src="/football2.png" // place image in public folder
//           alt="Football"
//           width={120}
//           height={120}
//         />
//       </div>

//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6">
//         <Image
//           src="/stadium-bg.jpg" // place a stadium image in public folder
//           alt="Football Stadium"
//           fill
//           className="object-cover opacity-40"
//         />
//         <div className="relative z-10">
//           <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg animate-fadeIn">
//             Welcome to <span className="text-[#2E9E41]">GameDay Genius</span>
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-200 animate-fadeIn animate-delay-200">
//             Play. Predict. Win. Join the future of football betting & trivia.
//           </p>
//           <button className="mt-6 px-8 py-3 bg-[#555879] hover:bg-[#444567] rounded-2xl font-semibold shadow-lg transition-transform transform hover:scale-105 animate-bounce">
//             Get Started
//           </button>
//         </div>
//       </section>

//       {/* Cards Section */}
//       <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Predictions Card */}
//         <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-1">
//           <Image
//             src="/predictions.png" // local image
//             alt="Predictions"
//             width={120}
//             height={120}
//             className="mb-4 animate-bounce"
//           />
//           <h2 className="text-2xl font-bold mb-2 text-[#2E9E41] animate-fadeIn">Predictions</h2>
//           <p className="text-gray-300 mb-4 animate-fadeIn animate-delay-100">
//             Test your football knowledge and predict match outcomes. Earn points
//             and rewards with every correct call.
//           </p>
//           <button className="px-6 py-2 bg-[#555879] hover:bg-[#444567] rounded-lg font-semibold transition-transform transform hover:scale-105">
//             Start Predicting
//           </button>
//         </div>

//         {/* Trivia Card */}
//         <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-1">
//           <Image
//             src="/trivia.png" // local image
//             alt="Trivia"
//             width={120}
//             height={120}
//             className="mb-4 animate-pulse"
//           />
//           <h2 className="text-2xl font-bold mb-2 text-[#2E9E41] animate-fadeIn">Trivia</h2>
//           <p className="text-gray-300 mb-4 animate-fadeIn animate-delay-100">
//             Challenge yourself with fun football trivia questions. Prove your
//             knowledge and climb the leaderboard!
//           </p>
//           <button className="px-6 py-2 bg-[#555879] hover:bg-[#444567] rounded-lg font-semibold transition-transform transform hover:scale-105">
//             Play Trivia
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 text-gray-400 border-t border-gray-700">
//         © {new Date().getFullYear()} GameDay Genius. All rights reserved.
//       </footer>

//       {/* Tailwind custom animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 1s ease forwards;
//         }
//         .animate-delay-100 {
//           animation-delay: 0.1s;
//         }
//         .animate-delay-200 {
//           animation-delay: 0.2s;
//         }
//       `}</style>
//     </div>
//   );
// }
