
import './App.css';
import logo from './img/user1.png';
import logo1 from './img/id.jpeg';

export default function App(){
  return (
    < >

          <fieldset className="fi">
            <img className="image" src={logo1} alt="" /><br/>
            <div  className='posi'>
                <img className="icon" src={logo}/> 
            </div>
                     <h4 className="center">Logan Paul</h4>
                   <small className="size">Software Enginner</small>
            
             <h6 className="h">ID <kbd>: 264737</kbd></h6>
             <h6 className="h">D O B: <small>dd/mm/yy </small></h6>
             <h6 className="h1">J/D:   <small>15/Dec/2022</small></h6>
             <h6 className="h2">E/D:   <small>15/Dec/2023</small></h6>
        </fieldset>
    
    </>
  );
}


