import React from 'react';
import '../estilosComponentes/EstilosSeccionTienda.scss';
export default function SeccionTienda(){
    return(
        <section className='SeccionTienda'>
            <article className='tienda' data-aos="fade-up"
                                        data-aos-duration="1300">
                <h2 className='tienda__titulo'>TAKKAR</h2>
                <div className='tiendaTexto'>
                    <strong className='tiendaTexto__sub'>SHOP NOW, PAY LATER</strong>
                    <p className='tiendaTexto__texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                </div>
                <button className='tienda__btn' data-content="FIND OUT MORE">FIND OUT MORE</button>
            </article>
        </section>
    );
}