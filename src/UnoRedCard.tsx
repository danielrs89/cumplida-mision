function UnoRedCard() {

    /**
     * FALTA
     * hacer variable para que de esta plantilla san todos los números
     */
    return (
        <div style={{
            width: '320px',
            height: '480px',
            margin: '20px',
            borderRadius: '20px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden'
        }}>
            <svg
                viewBox="0 0 200 300"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%' }}
            >
                {/* Fondo de la carta (cambiar el color aquí) */}
                <rect
                    x="0"
                    y="0"
                    width="200"
                    height="300"
                    rx="20"
                    ry="20"
                    fill="#3498DB"  // Fondo color azul
                />

                {/* Números en las esquinas en blanco y más grandes (después de la capa blanca) */}
                <text
                    x="28"
                    y="48"
                    fontSize="40"  // Aumentamos el tamaño de los números en las esquinas
                    fontWeight="bold"
                    fill="white"  // Números blancos
                    style={{ fontFamily: 'Arial, sans-serif' }}
                >
                    1
                </text>

                <text
                    x="172"
                    y="272"
                    fontSize="40"  // Aumentamos el tamaño de los números en las esquinas
                    fontWeight="bold"
                    fill="white"  // Números blancos
                    textAnchor="end"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                >
                    1
                </text>

                {/* Número central dentro de un óvalo más pequeño */}
                <ellipse
                    cx="100"
                    cy="150"
                    rx="90"  // Hicimos el óvalo más pequeño (reducción del radio horizontal)
                    ry="60"  // Hicimos el óvalo más pequeño (reducción del radio vertical)
                    fill="white"
                    transform="rotate(-50 100 150)"  // Giramos el óvalo 10 grados hacia arriba
                />
                <text
                    x="100"
                    y="150"
                    fontSize="60"
                    fontWeight="bold"
                    fill="#3498DB"  // Número de color azul
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                >
                    1
                </text>

                {/* Borde blanco solo en las esquinas (no cubre toda la carta) */}
                <rect
                    x="12"
                    y="12"
                    width="176"
                    height="276"
                    rx="18"
                    ry="18"
                    fill="none"  // Ya no tiene relleno blanco
                    stroke="white"  // Borde blanco
                    strokeWidth="4"  // Grosor del borde
                />
            </svg>
        </div>
    );
}

export default UnoRedCard;










// import React from "react"
// // https://es.wikipedia.org/wiki/Uno_%28juego%29#/media/Archivo:UNO_cards_deck.svg
// function UnoRedCard() {
//     return (
//         <>
//             <div style={{
//                 width: '300px',
//                 height: '450px',
//                 margin: '20px',
//                 border: '1px solid #ccc' // Borde para visualización
//             }}>
//                 <svg
//                     viewBox="0 0 200 300"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{
//                         width: '100%',
//                         height: '100%',
//                         display: 'block'
//                     }}
//                 >
//                     {/* Fondo de la carta */}
//                     <rect
//                         x="0"
//                         y="0"
//                         width="200"
//                         height="300"
//                         rx="15"
//                         ry="15"
//                         fill="#E74C3C"
//                     />

//                     {/* Borde blanco interno */}
//                     <rect
//                         x="10"
//                         y="10"
//                         width="180"
//                         height="280"
//                         rx="10"
//                         ry="10"
//                         fill="white"
//                     />

//                     {/* Número 1 central */}
//                     <text
//                         x="100"
//                         y="150"
//                         fontSize="120"
//                         fontWeight="bold"
//                         fill="#E74C3C"
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                     >
//                         1
//                     </text>

//                     {/* Números en esquinas */}
//                     <text
//                         x="30"
//                         y="50"
//                         fontSize="28"
//                         fontWeight="bold"
//                         fill="#E74C3C"
//                     >
//                         1
//                     </text>

//                     <text
//                         x="170"
//                         y="270"
//                         fontSize="28"
//                         fontWeight="bold"
//                         fill="#E74C3C"
//                         textAnchor="end"
//                     >
//                         1
//                     </text>

//                     {/* Círculos indicadores */}
//                     <circle cx="30" cy="80" r="8" fill="#E74C3C" />
//                     <circle cx="170" cy="240" r="8" fill="#E74C3C" />
//                 </svg>




//                 {/* FONDO ROJO *NO me convence mucho, la esquna redonda es mejor */}
//                 <svg
//                     viewBox="0 0 200 300"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{
//                         width: '100%',
//                         height: '100%',
//                         display: 'block'
//                     }}
//                 >
//                     {/* Fondo principal */}
//                     <rect
//                         x="0"
//                         y="0"
//                         width="200"
//                         height="300"
//                         rx="15"
//                         ry="15"
//                         fill="#E74C3C"
//                     />

//                     {/* Borde blanco */}
//                     <rect
//                         x="8"
//                         y="8"
//                         width="184"
//                         height="284"
//                         rx="12"
//                         ry="12"
//                         fill="none"
//                         stroke="white"
//                         strokeWidth="4"
//                     />

//                     {/* Número central */}
//                     <text
//                         x="100"
//                         y="160"
//                         fontSize="140"
//                         fontWeight="bold"
//                         fill="white"
//                         fontFamily="Arial, sans-serif"
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                     >
//                         1
//                     </text>

//                     {/* Esquina superior izquierda */}
//                     <g transform="translate(20 20)">
//                         <text
//                             x="0"
//                             y="0"
//                             fontSize="28"
//                             fontWeight="bold"
//                             fill="white"
//                             fontFamily="Arial, sans-serif"
//                         >
//                             1
//                         </text>
//                         <circle
//                             cx="12"
//                             cy="35"
//                             r="8"
//                             fill="#E74C3C"
//                             stroke="white"
//                             strokeWidth="2"
//                         />
//                     </g>

//                     {/* Esquina inferior derecha */}
//                     <g transform="translate(180 280) scale(-1 -1)">
//                         <text
//                             x="0"
//                             y="0"
//                             fontSize="28"
//                             fontWeight="bold"
//                             fill="white"
//                             fontFamily="Arial, sans-serif"
//                         >
//                             1
//                         </text>
//                         <circle
//                             cx="12"
//                             cy="35"
//                             r="8"
//                             fill="#E74C3C"
//                             stroke="white"
//                             strokeWidth="2"
//                         />
//                     </g>
//                 </svg>
//             </div>
//         </>

//     )
// }

// export default UnoRedCard

