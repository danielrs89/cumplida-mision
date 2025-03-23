type CardProps = {
    mission: string;
};

const Card: React.FC<CardProps> = ({ mission }) => {
    /**
     * Divide el texto en múltiples líneas según el ancho máximo permitido.
     * @param text Texto a dividir.
     * @param maxWidth Ancho máximo permitido por línea.
     * @returns Un arreglo de líneas de texto.
     */
    const wrapText = (text: string, maxWidth: number): string[] => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return [];

        context.font = '30px Arial'; // Define la fuente para medir el ancho del texto.

        const words = text.split(' '); // Divide el texto en palabras.
        const lines: string[] = [];
        let currentLine = '';

        for (const word of words) {
            const testLine = currentLine ? `${currentLine} ${word}` : word;
            const width = context.measureText(testLine).width;

            // Si la línea de prueba es más corta que el ancho permitido, se agrega la palabra.
            if (width < maxWidth) {
                currentLine = testLine;
            } else {
                // Si no cabe, guarda la línea actual y comienza una nueva.
                if (currentLine) lines.push(currentLine);
                currentLine = word;
            }
        }

        // Agrega la última línea al resultado.
        if (currentLine) lines.push(currentLine);

        return lines;
    };

    const maxWidth = 200; // Ancho máximo del texto para ajustar líneas.
    const lines = wrapText(mission, maxWidth);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 360" width="150" height="225">
            {/* Borde de la carta con esquinas redondeadas */}
            <rect width="240" height="360" rx="30" ry="30" fill="#AA55FF" stroke="#000" strokeWidth="4" />

            {/* Renderiza cada línea de texto centrada */}
            {lines.map((line, index) => (
                <text
                    key={index}
                    x="120" // Posiciona el texto horizontalmente en el centro.
                    y={140 + index * 30} // Ajusta la posición vertical para cada línea.
                    fontSize="30"
                    fill="#fff"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                    textAnchor="middle" // Alinea el texto en el centro horizontal.
                >
                    {line}
                </text>
            ))}
        </svg>
    );
};

export default Card;
