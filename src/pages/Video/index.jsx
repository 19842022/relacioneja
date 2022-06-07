import React,{useState,useEffect,useLayoutEffect} from 'react';
import {Comments,CommentsNews} from '../../comments';
import './style.css';
import logoVideo from '../../assets/logo-video.png';
export default function Video(){
     const [dados,setDados] = useState(Comments);
     const [visitas,setVisitas] = useState("3.219");
     const [peoples,setPeople] = useState("5.219");
    
    
     const visiters = ["3.230","3.339","3.400","3.441"];

     function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

useLayoutEffect(() => {
      setVisitas(visiters[getRandomInt(0,3)]);
}, [])

     useEffect(()=>{
          function getRandomIntInclusive(num) {
               return Math.floor(Math.random() * num);
             }
          setTimeout(()=> setDados([CommentsNews[getRandomIntInclusive(2)],...Comments]),5000);
      const pessoas = ["5.230","5.324","5.123","5.221","5.330","5.354","5.423","5.621"];
          setInterval(()=>{
            setPeople(pessoas[getRandomInt(0,7)]);
          },15000);

          (function() {
               window.history.replaceState(null, document.title, "/desconto");
               window.history.pushState(null, document.title, "/video");
               }());
     },[peoples]);
      return (
             <div className='content-home-video'>
                  <header>
                 <img className='img-header' src={logoVideo}/>
                  </header>
                  <div className='video'><embed className='video' src="https://scripts.converteai.net/1a3e8154-6bb7-41d0-9f55-b3b2103c19e2/players/629bac976cc2cc000a7471f2/embed.html"></embed></div> 
                  <div className='people-on-the-video'>{peoples} Pessoas simultaneamente assistindo este video.</div>
                  <div className="comentarios">
                    { dados.map((item,id) => {
                   return (
                    <>
                    <div className="content">
                    <div className="content-header-comments">
                    <img className="img-comments" key={id} src={item.foto} width={50} height={50}/>  
                    </div>
                    <div className="content-flex">
                    <div className="comment-name">{ item.name }</div>
                    <div className="comment-content">{ item.comment }</div>
                <div className="comment-type">{item.hora=="Agora" ? `Comentado ${item.hora}` : `Comentado há ${item.hora}` }</div>
                    
                    </div>
                    
                    </div>

                    
                    </>
                   ); 
                    
                        }) }
                    </div>
             </div>
      );

}