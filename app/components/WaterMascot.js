'use client';
import { useState, useEffect } from 'react';

export default function WaterMascot() {
    const [isWaving, setIsWaving] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTalking, setIsTalking] = useState(false);
    const [message, setMessage] = useState('Bonjour! Je suis Ondine, ta mascotte aquatique! 💧');
    const [messageIndex, setMessageIndex] = useState(0);

    const messages = [
        'Bonjour! Je suis Ondine, ta mascotte aquatique! 💧',
        'Savais-tu que l\'eau recouvre 71% de la surface de la Terre? 🌊',
        'L\'eau est essentielle à toute forme de vie! 🌱',
        'Ensemble, protégeons nos océans! 🐋',
    ];

    useEffect(() => {
        if (isWaving) {
            const timer = setTimeout(() => setIsWaving(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isWaving]);

    useEffect(() => {
        // Animation de la bouche pendant que la mascotte parle
        if (isTalking) {
            const talkingInterval = setInterval(() => {
                setIsTalking((prev) => !prev);
            }, 150);
            const stopTalking = setTimeout(() => {
                clearInterval(talkingInterval);
                setIsTalking(false);
            }, 1000);
            return () => {
                clearInterval(talkingInterval);
                clearTimeout(stopTalking);
            };
        }
    }, [isTalking]);

    const handleInteraction = () => {
        setIsWaving(true);
        setIsTalking(true);
        setMessageIndex((prev) => (prev + 1) % messages.length);
        setMessage(messages[(messageIndex + 1) % messages.length]);
    };

    return (
        <div 
            className="flex flex-col items-center cursor-pointer select-none"
            onClick={handleInteraction}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative transform transition-transform duration-300 
                ${isHovered ? 'scale-110' : ''} 
                ${isWaving ? 'animate-bounce' : ''}
                ${isTalking ? 'animate-subtle-bounce' : ''}`}
            >
                <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    className={`transition-colors duration-300 ${isHovered ? 'text-blue-300' : 'text-blue-400'}`}
                >
                    {/* Corps de la goutte d'eau */}
                    <path
                        d="M100 20 C130 60, 160 100, 160 140 C160 173, 134 200, 100 200 C66 200, 40 173, 40 140 C40 100, 70 60, 100 20"
                        fill="currentColor"
                        className="drop-shadow-lg"
                    />
                    
                    {/* Bras gauche */}
                    <g className={`transition-transform origin-center ${isWaving ? 'animate-wave-arm' : ''}`}>
                        <path
                            d="M40 140 C20 140, 10 120, 20 100"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            className={`transform ${isWaving ? 'rotate-[-30deg]' : ''} transition-transform duration-300`}
                        />
                        <circle
                            cx="20"
                            cy="100"
                            r="6"
                            fill="currentColor"
                        />
                    </g>

                    {/* Bras droit */}
                    <g className={`transition-transform origin-center ${isWaving ? 'animate-wave-arm' : ''}`}>
                        <path
                            d="M160 140 C180 140, 190 120, 180 100"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="180"
                            cy="100"
                            r="6"
                            fill="currentColor"
                        />
                    </g>

                    {/* Jambes */}
                    <g className={`transition-transform duration-300 ${isHovered ? 'translate-y-1' : ''}`}>
                        {/* Jambe gauche */}
                        <path
                            d="M80 200 C80 220, 70 230, 60 235"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            className={`transition-transform origin-top ${isHovered ? 'rotate-[-5deg]' : ''}`}
                        />
                        <circle
                            cx="60"
                            cy="235"
                            r="6"
                            fill="currentColor"
                        />

                        {/* Jambe droite */}
                        <path
                            d="M120 200 C120 220, 130 230, 140 235"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            className={`transition-transform origin-top ${isHovered ? 'rotate-[5deg]' : ''}`}
                        />
                        <circle
                            cx="140"
                            cy="235"
                            r="6"
                            fill="currentColor"
                        />
                    </g>
                    
                    {/* Yeux */}
                    <g className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
                        <circle cx="80" cy="120" r="8" fill="white" />
                        <circle cx="120" cy="120" r="8" fill="white" />
                        <circle 
                            cx="83" 
                            cy="118" 
                            r="3" 
                            fill="black"
                            className={`transition-transform ${isTalking ? 'translate-y-0.5' : ''}`}
                        />
                        <circle 
                            cx="123" 
                            cy="118" 
                            r="3" 
                            fill="black"
                            className={`transition-transform ${isTalking ? 'translate-y-0.5' : ''}`}
                        />
                    </g>
                    
                    {/* Bouche */}
                    <path
                        d={isTalking 
                            ? (Math.random() > 0.5 
                                ? "M85 150 Q100 160 115 150" 
                                : "M85 150 Q100 140 115 150")
                            : (isHovered 
                                ? "M85 145 Q100 160 115 145" 
                                : "M85 150 Q100 165 115 150")}
                        stroke="white"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        className="transition-all duration-150"
                    />
                </svg>
            </div>
            
            <div className={`speech-bubble mt-6 p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg max-w-xs 
                transform transition-all duration-300 hover:scale-105
                ${isTalking ? 'animate-pulse' : ''}`}>
                <p className="text-white text-lg text-center leading-relaxed">
                    {message}
                </p>
            </div>
            
            {/* Bulles d'eau animées */}
            <div className="absolute">
                {isHovered && Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/30 animate-float"
                        style={{
                            width: `${Math.random() * 20 + 10}px`,
                            height: `${Math.random() * 20 + 10}px`,
                            left: `${Math.random() * 200 - 100}px`,
                            top: `${Math.random() * 200 - 100}px`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${Math.random() * 2 + 2}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
