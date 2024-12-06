import Image from "next/image";
import WaterMascot from './components/WaterMascot';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with animated waves */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600">
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="wave1">
              <use href="#wave" x="50" y="3" fill="rgba(255,255,255, .1)" />
            </g>
            <g className="wave2">
              <use href="#wave" x="50" y="0" fill="rgba(255,255,255, .2)" />
            </g>
            <g className="wave3">
              <use href="#wave" x="50" y="9" fill="rgba(255,255,255, .3)" />
            </g>
            <g className="wave4">
              <use href="#wave" x="50" y="6" fill="rgba(255,255,255, .4)" />
            </g>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Bienvenue dans l'Univers Aquatique
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Plongez dans une expérience interactive unique avec notre mascotte Ondine
          </p>
        </div>

        {/* Mascot section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <WaterMascot />
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-semibold mb-4">
                Découvrez le Monde de l'Eau
              </h2>
              <p className="text-lg mb-6">
                Interagissez avec Ondine, votre guide aquatique, et découvrez les merveilles 
                de l'eau à travers une expérience ludique et éducative.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-2">💧</span>
                  Apprenez les secrets de l'eau
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌊</span>
                  Explorez les océans
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌍</span>
                  Protégez notre planète bleue
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {[
            {
              title: "Interaction Ludique",
              description: "Cliquez sur Ondine pour découvrir ses messages",
              icon: "🎮"
            },
            {
              title: "Apprentissage Amusant",
              description: "Des informations fascinantes sur l'eau",
              icon: "📚"
            },
            {
              title: "Animation Interactive",
              description: "Une expérience visuelle unique",
              icon: "✨"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl 
                        transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
