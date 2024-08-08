import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="side">
      <p style={{color:'#555C5F', fontWeight:'600'}} >APP INTERFACE</p>
      <div>
        <div className="rect">
          <i class="fa-solid fa-user" style={{ color: "#00ff9c" }}></i>
        </div>
       <NavLink className='navlink' to='/'><p>USERS</p></NavLink> 
      </div>
      <div>
        <div className="rect">
          <i class="fa-solid fa-sort" style={{ color: "#ffffff" }}></i>
        </div>
        <NavLink className='navlink' to='/orders'><p>ORDERS</p></NavLink>
      </div>
      <div>
        <div className="rect">
          <i class="fa-solid fa-book" style={{ color: "#ffffff" }}></i>
        </div>
       <NavLink className='navlink' to='/books'> <p>ALL BOOKS</p> </NavLink>
      </div>
      <div>
        <div className="rect">
          <i class="fa-solid fa-list" style={{ color: "#ffffff" }}></i>
        </div>
       <NavLink className='navlink' to='/category'><p>CATEGORY</p></NavLink>
      </div>
      <button>LOG OUT </button>
    </div>
  );
}

export default Sidebar;
