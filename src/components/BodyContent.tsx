import React from 'react'
import { Container } from '../styles/BodyContentStyles'
import Image from 'next/image'

export const BodyContent = () => {
  return (
    <Container>
      <div className="post-container">
        <div className="img-container">
          <div className="post-1">
            <Image src={'/post-1.png'} width={569} height={342.43} />
            <span>Julho 04, 2022</span>
          </div>
          <div className="post-text">
            <h2>Começando no ReactJS em 2022</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.</p>
          </div>
        </div>

        <div className="side-post">
          <div className="side-post-1">
            <span>Julho 03, 2022</span>
            <h2>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.</p>
          </div>
          <div className="side-post-2">
            <span>Julho 03, 2022</span>
            <h2>Veja a evolução do Front-end na prática</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. </p>
          </div>
        </div>
      </div>

      <div className="lower-posts">
        <div className="lower-post-1">
          <Image src={'/post-2.png'} width={370} height={358.54} />
          <span>Julho 03, 2022</span>
          <h2>10 dicas para conseguir a vaga desejada</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </p>
        </div>
        <div className="lower-post-2">
          <Image src={'/post-3.png'} width={370} height={358.54} />
          <span>Julho 03, 2022</span>
          <h2>Deixe seu código mais semântico com essas dicas</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </p>
        </div>
        <div className="lower-post-3">
          <Image src={'/post-4.png'} width={370} height={358.54} />
          <span>Julho 03, 2022</span>
          <h2>Use essas dicas nas suas aplicações mobile</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </p>
        </div>
      </div>

    </Container>
  )
}
