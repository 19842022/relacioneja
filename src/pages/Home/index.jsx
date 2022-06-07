import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Logobrand from '../../assets/logo-brand.png';
import './style.css';


export default function Home(){
     const navigate = useNavigate();

     
      const [UsersCount,setUsersCount] = useState(["1.340"]);
     useEffect(()=>{
         setTimeout(()=>{
          const users = ["1.355","1.370","1.380","1.365","1.369","1.370","1.401"];
          function getRandomInt(min, max) {
               min = Math.ceil(min);
               max = Math.floor(max);
               return Math.floor(Math.random() * (max - min)) + min;
             }
         setUsersCount([users[getRandomInt(0,6)]]);
         },5000);
        
        
     },[UsersCount]);
     return (
          <div className='content-home'>
               <div className='content-page-home'>
               <img className='logo-brand' src={Logobrand}/>
               <div id='text-header-top' className='text-header'>Descubra os segredos para conquistar qualquer homem!</div>
               <div id='text-header' className='text-header'>
               Me fale o principal motivo que te fez tomar essa decisão:
               </div>
               <div className='quiz'>
                    <form className='quiz'>
                         <label className='input' htmlFor="">
                         <input type="radio" name='quiz' value={1}/>
                         Quero recuperar minha autoestima.
                         </label>
                         <label className='input' htmlFor="">
                         <input type="radio" name='quiz' value={2} />
                         Quero me sentir mais confiante. 
                         </label>
                         <label className='input' htmlFor="">
                         <input type="radio" name='quiz' value={3} />
                         Quero ser desejada e invejada por todo mundo.      
                         </label>
                         <label className='input' htmlFor="">
                         <input type="radio" name='quiz' value={4} />
                         Quero a atenção do meu marido/namorado ou ficante.      
                         </label>
                         <label className='input' htmlFor="">
                         <input type="radio" name='quiz' value={5} />
                         Todas as opções abaixo</label>
                    </form>
               </div>
               <div className='button-pre-sell'>
                    <button onClick={() => navigate("/video")} className='button-pre-sell-est'>Clique aqui para saber mais</button>
               </div>
               </div>
               <div className='rodape'><b className='count-users'>{UsersCount}</b> usuários on-line neste momento!</div>
          </div>

     );
}