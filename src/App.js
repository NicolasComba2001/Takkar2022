import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Footer from './componentes/Footer';
import HeaderMenu from "./componentes/HeaderMenu";
import SeccionDescuento from './componentes/SeccionDescuento';
import SeccionInicio from './componentes/SeccionInicio';
import SeccionOferta from './componentes/SeccionOferta';
import SeccionSlider from './componentes/SeccionSlider';
import SeccionSliderNuevas from './componentes/SeccionSliderNuevas';
import SeccionTienda from './componentes/SeccionTienda';
import './estilosComponentes/MediasQueris.scss';
library.add(fas)

function App() {
  useEffect(()=>{
        
    AOS.init();

},[])
  return (
    <>
    <HeaderMenu></HeaderMenu>
    <SeccionInicio></SeccionInicio>
    <SeccionSlider></SeccionSlider>
    <SeccionDescuento></SeccionDescuento>
    <SeccionSliderNuevas></SeccionSliderNuevas>
    <SeccionOferta></SeccionOferta>
    <SeccionTienda></SeccionTienda>
    <Footer></Footer>
    </>
  );
}

export default App;
