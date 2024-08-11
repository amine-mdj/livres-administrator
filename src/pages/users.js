import './users.css';
import {motion} from 'framer-motion'
import Profile from '../images/profile-pic.jpg'

function Users() {
  return (
    <motion.div
    className="setting"
    initial={{x:'-80%',scale:0.5}}
    animate={{x: 0,scale:1}}
    exit={{x:'100%',scale:0.5}}
    transition={{duration:0.8}}
    >
      <h1>Setting</h1>
    <p>Manage your account setting and preferences</p>
    <hr/>
    <h2>personal information</h2>
    <p>update your email details and password</p>
    <hr className='hr1'/>
    <div className='all-cont'>
      <div className='em-word'>
        <div className='email-cont cont-shared'>
        <label htmlFor="email">Email</label>
        <input className='input1' id="email" type="text" placeholder='type someting...' />
        </div>
        <div className='password-cont cont-shared'>
        <label htmlFor="password">Password</label>
        <input id="password" className='input2' type="text" placeholder='type someting...' />
        </div>
      </div>
      <div className='img-btn'>
        <img src={Profile} alt="" />
        <button>Add Picture</button>
      </div>
      <div>

      </div>
    </div>
    </motion.div>
  );
}

export default Users;