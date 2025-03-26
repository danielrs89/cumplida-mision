// https://upload.wikimedia.org/wikipedia/commons/9/95/UNO_cards_deck.svg

// #FF5555
// #FFAA00
// #55AA55
// #5555FF
// #AA55FF *quest

type NumbersProps = {
    number: number; // Número que aparecerá en la carta
    cardColor: string; // Color de fondo de la carta
};

const Numbers: React.FC<NumbersProps> = ({ number, cardColor }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 360" width="150" height="225">
            {/* Borde de la carta con esquinas redondeadas */}
            <rect width="240" height="360" rx="30" ry="30" fill={cardColor} stroke="#000" strokeWidth="4" />

            {/* Fondo del círculo central */}
            <ellipse cx="120" cy="180" rx="100" ry="100" fill="#fff" stroke={cardColor} strokeWidth="5" />

            {/* Número central de la carta */}
            <text
                x="120"
                y="180"
                fontSize="100"
                fill={cardColor}
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                stroke="#000"
                dominantBaseline="middle"
            >
                {number}
            </text>

            {/* Número superior izquierdo */}
            <text
                x="20"
                y="80"
                fontSize="80"
                fill="#fff"
                stroke="#000"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
            >
                {number}
            </text>

            {/* Número inferior derecho (rotado 180 grados) */}
            <g transform="rotate(180,120,180)">
                <text
                    x="20"
                    y="80"
                    fontSize="80"
                    fill="#fff"
                    stroke="#000"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                >
                    {number}
                </text>
            </g>
        </svg>
    );
};

export default Numbers;
