import './navbar.css';
import Profile from '../images/profile.png'

function Navbar() {
  return (
    <div className="nav">
      <div className='right'>
      <i class="fa-solid fa-chart-simple" style={{color: '#00ff9c'}}></i>
      <p>MUSLEIRA</p>
      </div>
      <div className='left'>
        <div className='inpt'>
        <i class="fa-solid fa-magnifying-glass" style={{color: '#ffffff'}}></i>
       <input placeholder='type something...'/>
       </div>
       <div className='inter'>
       <i class="fa-solid fa-globe" style={{color: '#ffffff'}}></i>
        <p>EN</p>
       </div>
       <div className='user'>
        <img src={Profile}/>
        <p>Username@gmail.com</p>
       </div>
      </div>
    </div>
  );
}

export default Navbar;