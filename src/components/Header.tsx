import React from 'react'
import { DescriptionSection, HeaderContainer, MainHeaderContainer } from '../styles/HeaderStyles';
import Logo from './Logo';
import { MagnifyingGlass, ArrowRight } from 'phosphor-react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <MainHeaderContainer>
        <HeaderContainer>
          <div className='logo'>
            <Logo />
          </div>

          <div className="link-list">
            <ul>
              <li>
                <a href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#">
                  Categoria
                </a>
              </li>
              <li>
                <a href="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="search-bar">
            <input type="text" placeholder='Buscar' />
            <button><MagnifyingGlass size={28} /></button>
          </div>
        </HeaderContainer>

        <DescriptionSection>
          <div className='text-content'>
            <h1>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.</p>
            <button>Veja mais <ArrowRight size={16} weight='bold' /></button>
          </div>

          <div className='img-container'>
            <Image src={'/featured-image.png'} width={570} height={346} />
          </div>
        </DescriptionSection>

        <div className='footer'></div>
      </MainHeaderContainer>

    </>
  )
}

export default Header;
