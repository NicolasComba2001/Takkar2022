import React from 'react';
import '../estilosComponentes/EstilosSeccionInicio.scss';

export default function SeccionInicio(){
    return(
        <section id='Inicio'>
                <article className='seccionProducto'>
                    <figure className='seccionProducto__img' data-aos="zoom-in"
                                                            data-aos-duration="1500"><img src="SeccionInicioImg/seccionInicioProduct.jpg" alt="New brands, collection 2022" /></figure>
                    <div className='seccionProductoTexto' data-aos="fade-right"
                                                        data-aos-duration="1000">
                        <em className='seccionProductoTexto__sub'>Collection 2022</em>
                        <h1 className='seccionProductoTexto__titulo'>
                            <span>NEW</span><br/>
                            <span>PRODUCT</span><br/>
                            <span>ARRIVED</span>
                        </h1>
                        <p className='seccionProductoTexto__texto' data-aos="flip-left"
                                                                    data-aos-duration="1400">Lorem ipsum dolor sit amet, consectetur adipiscing elit,consectetur adipiscing elit</p>
                        <button className='seccionProductoTexto__btn' data-content="CHECK NOW!" data-aos="fade-left"
                                                                                                data-aos-delay="1000">CHECK NOW</button>
                    </div>
                </article>

                <article className='seccionHistoria'>
                    <figure className='seccionHistoria__img' data-aos="fade-up"
                                                            data-aos-duration="1500"><img src="SeccionInicioImg/seccionInicioHistory.jpg" alt="our history, takkar 2022" /></figure>
                    <div className='seccionHistoriaTexto' data-aos="fade-left"
                                                            data-aos-duration="1000">
                        <em className='seccionHistoriaTexto__sub'>Our brands history</em>
                        <h2 className='seccionHistoriaTexto__titulo'>THE PHILOSOPHY OF CLAIRE</h2>
                        <p className='seccionHistoriaTexto__texto' data-aos="flip-left"
                                                                    data-aos-duration="1400">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, .<br></br><br></br>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            illum dolore eu fugiat nulla pariatur.</p>
                        <button className='seccionHistoriaTexto__btn' data-content="LEARN MORE" data-aos="fade-right"
                                                                                                data-aos-delay="1000"
                                                                                                data-aos-duration="1000">LEARN MORE</button>
                    </div>
                </article>
                
            
        </section>
    );
}