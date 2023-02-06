import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Style from './Home.module.css'

//Este componente esta realizado 100% sin material ui, ya que es una prueba, para que se vea tambien el manejo de tags fuera de 
const Home = () => { 

  const [isActive, setIsActive] = useState(false);
  const [autoplay1, setAutoplay] = useState(true);
  const [speed, setSpeed] = useState(3000);
  const [fade, setFade] = useState(false);
  const [slow, setSlow] = useState(200);
  const [button1, setButton1] = useState(false);


const RightArrow = (props) => {
  return (
    <button {...props} style={{ display: "none",  marginRight : "-5rem"}}>
      Next
    </button>
  );
};



const settings = {
    dots: false, 
     infinite: true,
    speed: slow,   
    autoplay : true,
    autoplaySpeed : speed,
    fade : fade, 
    lazyLoad : "progressive",
        prevArrow : <RightArrow />, 
    
  };

const resize = () => {

return Style.contdis

}


  return (
    <div className={Style.vh}> 

    <div className={Style.maxContainer}> 

    <div  className={Style.contdis}> 

  
    <div  className={Style.container}>
    <Slider {...settings}>
      <div className={Style.pics}>
        <img  className={Style.imagen} src="https://www.lumion.es/wp-content/uploads/2021/08/1_Render-final.jpg.webp" />
      </div>
      <div className={Style.pics}>
        <img  className={Style.imagen} src="https://i.imgur.com/gEMlMMQ.jpeg" />
      </div>
      <div className={Style.pics}>
        <img className={Style.imagen} src="https://www.domingoloro.com/images/portfolio/mejores-renders-interiores-domingo-loro.jpg" />
      </div>
      <div className={Style.pics}>
          <img  className={Style.imagen} src="https://www.animacionesrenders.com/wp-content/uploads/2019/05/renders_3d_arquitectura.jpg" />
      </div>
    </Slider>
  </div>
    </div>
    <div className={Style.text2} >
    <h2 className={Style.text4}>  EJEMPLO </h2>
    <h2 className={Style.text4}>   DE </h2>
        <h1 className={Style.text3}>  SLIDER  </h1>
        <p className={Style.text5}>  Clickeando en el boton de abajo, te va a llevar a un componente modificable para que conozcas las funcionalidades de ReactSlick </p>
       <button  onClick={() => {setButton1(!button1)}}className={Style.button}> Activar Botonera  </button>
    
    
    </div>
    </div>
{ button1 ?
   <div className={Style.center} > 

    <div className={Style.buttonCont}> 

    <button
    className={Style.button1}
    onClick={() => speed > 1001 ? setSpeed(speed - 1000) : []}
    >
Mas velocidad al cambio automatico
    </button>

    <button
      className={Style.button1}
      onClick={() =>  setSpeed(speed + 1000) }
      >
Menos velocidad al cambio automatico
    </button>

    <button
className={Style.button1}
onClick={() => setSlow(slow + 200)}
    >
Menos velocidad al Slide / Fade
    </button>
    <button
      className={Style.button1}
      onClick={() => slow > 201 ? setSlow(slow - 200) : []}
      >
Mas velocidad al Slide / Fade
    </button>

    <button
className={Style.button1} 
onClick={() => setFade(!fade)}
>
Fade / Slide
    </button>
      </div> 
      </div> 
      : []}
    </div>
    )}

    export default Home