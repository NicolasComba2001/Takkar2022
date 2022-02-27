import React, { useEffect, useState } from 'react';
import '../estilosComponentes/EstilosHeaderMenu.scss';


function MenuLogo({abrirMenu, estadoMenu}){
    return(
        <>
        <div className={`header__icono ${estadoMenu ? "estiloIcono": ""}`} onClick={abrirMenu}>
            <div className='header__icono--abrirMenu'></div>
        </div>
        <label className='logoEscritorio'>TAKKAR</label>
        </>
        
    );
}

export default function HeaderMenu(){
    
    const [estadoMenu, setestadoMenu] = useState(false);

    function abrirMenu(){
        setestadoMenu(!estadoMenu);
    }
    
    return(
        <header data-aos="fade-down"
        data-aos-duration="1000">
            <MenuLogo abrirMenu={abrirMenu} estadoMenu={estadoMenu} ></MenuLogo>
            <nav className={`menu ${estadoMenu && "mostrarMenu"}`}>
                <ul className='menuItems'>
                    <li className='menuItemsList'><a className='menuItemsList__btn' href="#Inicio" data-text="&nbsp;INICIO">&nbsp;INICIO</a></li>
                    <li className='menuItemsList'><a className='menuItemsList__btn' href="#Shop" data-text="&nbsp;SHOP">&nbsp;SHOP</a></li>
                    <li className='menuItemsList'><a className='menuItemsList__btn' href="#Product" data-text="&nbsp;PRODUCT">&nbsp;PRODUCT</a></li>
                    <li className='menuItemsList'><a className='menuItemsList__btn' href="#AboutUs" data-text="&nbsp;ABOUTUS">&nbsp;ABOUTUS</a></li>
                    <li className='menuItemsList'><a className='menuItemsList__btn' href="#Contacto" data-text="&nbsp;CONTACT">&nbsp;CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
}