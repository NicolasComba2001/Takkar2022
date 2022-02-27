import React from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import '../estilosComponentes/EstilosSeccionSliderNueva.scss';

export default function SeccionSliderNuevas(){
    return(
        <section className='SliderNueva'>
            <h4 className='SliderNueva__titulo' data-aos="fade-right"
                                                data-aos-duration="1200">NEW COLLECTION</h4>
            <Glider
            hasArrows={false}
            hasDots={true}
            slidesToShow={1}
            slidesToScroll={1}
            >
                <figure className='sliderImg'><img className='sliderImg__img' src="SeccionNewCollectionImg/SeccionNewCollection.jpg" alt="new clothes collection" /></figure>
                <figure className='sliderImg'><img className='sliderImg__img' src="SeccionNewCollectionImg/SeccionNewCollectionMen.jpg" alt="new clothes collection" /></figure>
                <figure className='sliderImg'><img className='sliderImg__img' src="SeccionNewCollectionImg/SeccionNewCollectionWood.jpg" alt="new clothes collection" /></figure>
                <figure className='sliderImg'><img className='sliderImg__img' src="SeccionNewCollectionImg/SeccionNewCollectionPrimal.jpg" alt="new clothes collection" /></figure>
                <figure className='sliderImg'><img className='sliderImg__img' src="SeccionNewCollectionImg/SeccionNewCollectionScott.jpg" alt="new clothes collection" /></figure>
                

            </Glider>
        </section>
    );
}