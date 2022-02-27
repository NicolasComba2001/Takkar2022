import React from 'react';
import '../estilosComponentes/EstilosSeccionGaleria.scss';

export default function SeccionSlider(){
    return(
    <section className='seccionGaleria' id='Product'>
        <article className='galeriaTitulo'>
            <h3 className='galeriaTitulo__titulo' data-aos="fade-right"
                                                    data-aos-duration="1300">TAKKAR</h3>
            <p className='galeriaTitulo__texto' data-aos="zoom-in-up"
                                                data-aos-duration="1200">NEW COLLECTION <br/>
            IN OUR BRANDS</p>
        </article>
        <div className='galeria'>
            <figure className='galeriaItem'data-aos="zoom-in"
                                            data-aos-duration="1500"
                                            data-aos-delay="500">
                <img className='galeriaItem__img' src="SeccionGaleryImg/SeccionGalery.jpg" alt="new collection in our brands, winter clothes" />
            </figure>
            <figure className='galeriaItem'data-aos="zoom-in"
                                            data-aos-duration="1500"
                                            data-aos-delay="500">
                <img className='galeriaItem__img' src="SeccionGaleryImg/SeccionGaleryWinter.jpg" alt="new collection in our brands, winter clothes" />
            </figure>
            <figure className='galeriaItem'data-aos="zoom-in"
                                            data-aos-duration="1500"
                                            data-aos-delay="500">
                <img className='galeriaItem__img' src="SeccionGaleryImg/SeccionGaleryGucci.jpg" alt="new collection in our brands, winter clothes" />
            </figure>
            <figure className='galeriaItem'data-aos="zoom-in"
                                            data-aos-duration="1500"
                                            data-aos-delay="500">
                <img className='galeriaItem__img' src="SeccionGaleryImg/SeccionGaleryModels.jpg" alt="new collection in our brands, winter clothes" />
            </figure>
            <figure className='galeriaItem'data-aos="zoom-in"
                                            data-aos-duration="1500"
                                            data-aos-delay="500">
                <img className='galeriaItem__img' src="SeccionGaleryImg/SeccionGaleryTwo.jpg" alt="new collection in our brands, winter clothes" />
            </figure>
        </div>
        <button className='galeria__btn'  data-aos="flip-left"
                                            data-aos-duration="1200">SEE ALL</button>
    </section>
    )
}