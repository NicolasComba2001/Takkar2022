import React from 'react';
import '../estilosComponentes/EstilosSeccionDescuentoGuia.scss';

export default function DescuentoGuia({sub,titulo,texto, src, msjBtn, subtitulo, oferta}){
    return(
        <section id='Shop'>
        <div className='SeccionDescuento'>
            <figure className={`SeccionDescuentoItem`} data-aos="zoom-in-up"
                                                        data-aos-duration="1000"><img className={`SeccionDescuentoItem__img ${oferta === "oferta" && oferta}`} src={src} alt="discount on our brands, gucci, valenciaga, nike" /></figure>
            <div className='SeccionDescuentoTexto'>
                <em className='SeccionDescuentoTexto__sub'>{sub}</em>
                <h4 className='SeccionDescuentoTexto__titulo'>{titulo}</h4>
                {subtitulo !== null ? <strong className='SeccionDescuentoTexto__subtitulo'>{subtitulo}</strong>: <></>}
                <p className='SeccionDescuentoTexto__parrafo'>{texto}</p>
                <div className='SeccionDescuentoItemBtn'><button className='SeccionDescuentoItemBtn__btn' data-aos="fade-left"
                                                    data-aos-duration="1300">{msjBtn}</button></div>
            </div>
        </div>
    </section>
    );
}