import React from 'react';
import './Desconto.css';
import Selo from '../../assets/selo.png';

export default function Desconto(){
    function openInNewTab(url) {
        window.open(url, '_blank').focus();
       }
    const users = [
        {
            nome:"Andreia Silva",
            link: 'https://scripts.converteai.net/1a3e8154-6bb7-41d0-9f55-b3b2103c19e2/players/629e5d62a91a4400099e1b8e/embed.html'
        },
        {
            nome:"Silvania Matos",
            link: 'https://scripts.converteai.net/1a3e8154-6bb7-41d0-9f55-b3b2103c19e2/players/629e5db0240530000a3dc70c/embed.html'
        },
        
    ];
    
    return (
        <>
       <div className='header-text-line'>
           Parabéns por ter chegado até aqui!<br></br>
           Você irá ter ótimos resultados e conquistar o seu objetivo de uma maneira mais rápida!
       </div>
    <div className='content-desc-home'>
        <div>Veja o resultados que transformaram vidas:</div>
        {
            users.map((dados,id)=>(
                <div className='videos' key={id}>
                <div className='name-video'><b>Postado por:</b> {dados.nome}</div>
                <div className='video-dep'>
                    <embed className='video-dep' src={dados.link}></embed>
                </div>
            </div>
            ))
        }
        <div className='depoimentos-img'>
            <img className='img-dep'/>
        </div>
        <button className='button-desc'>Clique aqui para obter o desconto</button>
        <div>
            <img src={Selo}/>
        </div>
    </div>
    </>
    );
}