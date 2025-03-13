import './App.css'
import CardComponent from './components/CardComponent'
import UnoRedCard from './UnoRedCard'
/**
 * pasan que me cosas *
 * https://quejuegosdemesa.com/mision-cumplida/
 * https://madresdesterradas.es/index.php/2021/01/08/mision-cumplida/
 * https://tienda.playfunlearning.es/producto/mision-cumplida/
 * https://www.google.com/imgres?q=cartas%20misi%C3%B3n%20cumplida&imgurl=https%3A%2F%2Fminimonstros.com%2F6150-thickbox_default%2Fmision-cumplida.jpg&imgrefurl=https%3A%2F%2Fminimonstros.com%2Fjuego-de-mesa%2F1433-mision-cumplida.html&docid=jfeb5qPofjPKyM&tbnid=8yrl8aGnsS4HUM&vet=12ahUKEwjK0Yjg2oaMAxVUVKQEHeI3PNwQM3oECCsQAA..i&w=1100&h=1422&hcb=2&ved=2ahUKEwjK0Yjg2oaMAxVUVKQEHeI3PNwQM3oECCsQAA
 * https://www.google.com/search?sca_esv=ee3395f8cbb9de9c&q=cartas+misi%C3%B3n+cumplida&udm=2&fbs=ABzOT_BnMAgCWdhr5zilP5f1cnRvK9uZj3HA_MTJAA6lXR8yQICx599sdFbm5siVC5WEzgEtp6o4DrSWTqdqZO8MP31kqbFKkqfL89nq1hvw37H6rIAZkda8kuMKVR-cNArA2C-Jqzbye-N8LF_PdCoDZ7Vk3Aa-uGiNe1r0OKhT74Chl1u6OO1zdLofrC-x1LqbUEmwe2Nm6KyK1QlH-CafREIBnR2Oag&sa=X&ved=2ahUKEwjv5qLK2oaMAxVbAPsDHe5VO_IQtKgLegQIHxAB&biw=1420&bih=1426&dpr=0.9
 * 
 * 
 */
// App.tsx: Componente principal que administra el estado del juego y coordina los subcomponentes.
// Card.tsx: Representa una carta individual, ya sea numerada o de misión.
// Hand.tsx: Muestra las cartas en mano del jugador.
// Pile.tsx: Representa una de las cuatro pilas en la mesa donde se juegan las cartas.
// Mission.tsx: Muestra una misión activa que los jugadores deben cumplir.
function App() {

  return (
    <>
      <UnoRedCard></UnoRedCard>
---
      <CardComponent/ >

    </>
  )
}

export default App
