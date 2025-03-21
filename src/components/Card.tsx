import React from "react";

type CardProps = {
    number: number;
    cardColor: string;
    numberColor: string;
};

const Card: React.FC<CardProps> = ({ number, cardColor }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 360" width="150" height="225">
            {/* Borde de la carta */}
            <rect width="240" height="360" rx="20" ry="20" fill="#ffffff" stroke="#000" strokeWidth="2" />

            {/* Cuerpo de la carta */}
            <rect width="200" height="320" x="20" y="20" rx="15" ry="15" fill={cardColor} />

            {/* Fondo del número central */}
            <ellipse
                cx="120"  // Centrado horizontalmente
                cy="180"  // Centrado verticalmente
                rx="135"  // Hicimos el óvalo más pequeño (reducción del radio horizontal)
                ry="60"   // Hicimos el óvalo más pequeño (reducción del radio vertical)
                fill="white"
                transform="rotate(-50 120 180)"  // Giramos el óvalo 10 grados hacia arriba desde el centro
            />

            {/* Número central */}
            <text x="120" y="195" fontSize="80" fill={cardColor} textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">
                {number}
            </text>

            {/* Número superior izquierdo */}
            <text x="30" y="90" fontSize="80" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold">
                {number}
            </text>

            {/* Número inferior derecho */}
            <text x="170" y="330" fontSize="80" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold">
                {number}
            </text>
        </svg>
    );
};

export default Card;
