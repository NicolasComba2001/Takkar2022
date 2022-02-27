import React from 'react';
import '../estilosComponentes/EstilosFooter.scss';
export default function Footer(){
    return(
    <footer className='footer' id='Contacto'>
        <div className='SeccionFooter'>
            <div className='footerPublicidad'>
                <p className='footerPublicidad__titulo'>NEWSLETTER</p>
                <p className='footerPublicidad__texto'>Lorem ipsum dolor sit amet, consectetur,Lorem ipsum dolor sit amet, consectetur</p>
                <input className='footerPublicidad__btn--text' type="text" placeholder='type your e-mail'/>
                <div>
                <input type="radio" /><p className='requisitos'>whith this you agree our requeriments</p>
                </div>
                <input className='footerPublicidad__btn--enviar' type="submit" value="SUBCRIBE"/>
            </div>

            <div className='SeccionFooterHC'>
                <div className='footerAyuda'>
                    <p className='footerAyuda__titulo'>HELP</p>
                    <ul className='footerAyudaList'>
                        <li className='footerAyudaList__item'><a href="google.com">FaQs</a></li>
                        <li className='footerAyudaList__item'><a href="google.com">PayMethod</a></li>
                        <li className='footerAyudaList__item'><a href="google.com">Shopping</a></li>
                        <li className='footerAyudaList__item'><a href="google.com">Call Center</a></li>
                        <li className='footerAyudaList__item'><a href="google.com">About Us</a></li>
                        <li className='footerAyudaList__item'><a href="google.com">Contact Us</a></li>
                        <li className='footerAyudaList__item'><a href="google.com">Term and Conditions</a></li>

                    </ul>
                </div>
                <div className='footerCompania'>
                    <p className='footerCompania__titulo'>COMPANY</p>
                    <ul className='footerCompaniaList'>
                        <li className='footerCompaniaList__item'><a href="google.com">Community</a></li>
                        <li className='footerCompaniaList__item'><a href="google.com">Membreship</a></li>
                        <li className='footerCompaniaList__item'><a href="google.com">Brands Models</a></li>
                        <li className='footerCompaniaList__item'><a href="google.com">Address</a></li>
                    </ul>
                </div>
            </div>

            <div className='SeccionFooterInfo' >
                <h2 className='SeccionfooterInfo__titulo'>TAKKAR</h2>
                <p className='SeccionfooterInfo__texto'>Luxardo, Canada<br></br>
                Illia Carl 205, Av. Bs As</p>
                <p className='SeccionfooterInfo__texto'>TEL: +59 392356</p>
                <address className='SeccionfooterInfo__texto'>webs_Args@hotmail.com.ar</address>
                <div className='footerRedes'>
                    <figure className='footerRedes__red'><img src="SeccionRedesImg/facebook-brands.svg" alt="TAKKAR ON FACEBOOK" /></figure>
                    <figure className='footerRedes__red'><img src="SeccionRedesImg/whatsapp-brands.svg" alt="TAKKAR ON WHATSAPP" /></figure>
                    <figure className='footerRedes__red'><img src="SeccionRedesImg/instagram-brands.svg" alt="TAKKAR ON INSTAGRAM" /></figure>
                </div>
            </div>
        </div>
        <p className='copy' >TAKKAR All right reserved 2022</p>
        </footer>
    );
}