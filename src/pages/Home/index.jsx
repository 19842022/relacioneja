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
               <div className='rodape'><b className='count-users'>{UsersCount}</b> usuários on-line neste momento!</div>
               <div className='content-page-home'>
               <img className='logo-brand' src={Logobrand}/>
               <div id='text-header-top' className='text-header'>Descubra os segredos para conquistar qualquer homem!</div>
          

               <div className='button-pre-sell'>
                    <button onClick={() => navigate("/video")} className='button-pre-sell-est'>Clique aqui para saber mais</button>
               </div>
               </div>
               
          </div>

     );
}