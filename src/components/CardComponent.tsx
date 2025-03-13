function CardComponent() {
  // Variables de configuración reutilizables
  const cardWidth = 60;
  const cardHeight = 90;
  const innerCardWidth = 50;
  const innerCardHeight = 80;
  const cornerRadius = 10;
  const innerCornerRadius = 5;
  const fillColor = "#ff5555";
  const strokeColor = "#000000";
  const strokeWidth = 0.5;
  const whiteColor = "#ffffff";
  const borderOffsetX = 60;
  const borderOffsetY = 332.36218;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg2" height="2000" width="2000">
      <g transform="translate(1261,748.63787)" id="layer1">
        <g transform="matrix(4,0,0,4,-1260,-637.08653)" id="g6563-6">
          {/* Rectángulo de fondo */}
          <rect
            width={cardWidth}
            height={cardHeight}
            rx={cornerRadius}
            ry={cornerRadius}
            x={borderOffsetX}
            y={borderOffsetY}
            id="rect2987-2"
            style={{ fill: whiteColor, stroke: strokeColor, strokeWidth: strokeWidth }}
          />
          {/* Rectángulo interior */}
          <rect
            width={innerCardWidth}
            height={innerCardHeight}
            rx={innerCornerRadius}
            ry={innerCornerRadius}
            x={borderOffsetX + 5}
            y={borderOffsetY + 5}
            id="rect3757-68"
            style={{ fill: fillColor }}
          />
          {/* Círculo en el medio */}
          <path
            d="m 105,352.36217 c -22.09139,0 -40,17.90861 -40,40 0,5.52285 4.47715,10 10,10 22.09139,0 40,-17.90861 40,-40 0,-5.52285 -4.47715,-10 -10,-10 z"
            id="path3773-0-4-8-4-25"
            style={{ fill: whiteColor }}
          />
          {/* Rectángulo de la derecha */}
          <path
            d="m 88,362.36217 -5,5 0,6 5,-5 0,24 5,0 0,-30 z"
            id="rect3921-51"
            style={{ fill: fillColor }}
          />
          {/* Rectángulo superior */}
          <path
            d="m 70,339.86217 -2.5,2.5 0,3 2.5,-2.5 0,12 2.5,0 0,-15 z"
            id="rect3921-5-0"
            style={{ fill: whiteColor }}
          />
          {/* Rectángulo inferior */}
          <path
            d="m 110,414.86217 2.5,-2.5 0,-3 -2.5,2.5 0,-12 -2.5,0 0,15 z"
            id="rect3921-5-5-1"
            style={{ fill: whiteColor }}
          />
        </g>
      </g>
    </svg>
  );
}

export default CardComponent;
