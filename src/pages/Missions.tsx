

import React from 'react';

interface MissionProps {
    mission: string;
    onClick: () => void;
}

const Missions: React.FC<MissionProps> = ({ mission, onClick }) => {
    const wrapText = (text: string, maxWidth: number): string[] => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return [];

        context.font = '30px Arial';

        const words = text.split(' ');
        const lines: string[] = [];
        let currentLine = '';

        for (const word of words) {
            const testLine = currentLine ? `${currentLine} ${word}` : word;
            const width = context.measureText(testLine).width;

            if (width < maxWidth) {
                currentLine = testLine;
            } else {
                if (currentLine) lines.push(currentLine);
                currentLine = word;
            }
        }

        if (currentLine) lines.push(currentLine);

        return lines;
    };

    const maxWidth = 200;
    const lines = wrapText(mission, maxWidth);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 360" width="150" height="225" onClick={onClick} style={{ cursor: 'pointer' }}>
            <rect width="240" height="360" rx="30" ry="30" fill="#AA55FF" stroke="#000" strokeWidth="4" />
            {lines.map((line, index) => (
                <text
                    key={index}
                    x="120"
                    y={140 + index * 30}
                    fontSize="30"
                    fill="#fff"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    {line}
                </text>
            ))}
        </svg>
    );
};

export default Missions;