import './orders.css';
import {motion} from 'framer-motion'

function Orders() {
  return (
    <motion.div
    className="main"
    initial={{x:'-80%',scale:0.5}}
    animate={{x: 0,scale:1}}
    exit={{x:'100%',scale:0.5}}
    transition={{duration:0.8}}
    >
    <div className="main">
      <div className='headertab'>
        <p>Users</p>
        <div className='tabhr'>
          <div className='north'>
          <i class="fa-solid fa-chevron-down" style={{color: '#ffffff'}}></i>
          </div>
        <div className='south'>
        <i class="fa-solid fa-x" style={{color: '#ffffff'}}></i>
        </div>
        
        </div>
        
      </div>
      <div className='bodytab'>
      <table>
  <tr>
    <th> <p>ALL USERS</p> </th>
    <th> <p> EDIT</p></th>
    <th><p>DELETE </p></th>
  </tr>
  <tr>
    <td><p>Mohhamed dubois</p></td>
    <td><p>Farid al atrach</p></td>
    <td><p>Mohhamed henni</p></td>
  </tr>
  <tr>
  <td><p>Mohhamed dubois</p></td>
    <td><p>Farid al atrach</p></td>
    <td><p>Mohhamed henni</p></td>
  </tr>
  <tr>
  <td><p>Mohhamed dubois</p></td>
    <td><p>Farid al atrach</p></td>
    <td><p>Mohhamed henni</p></td>
  </tr>
  <tr>
  <td><p>Mohhamed dubois</p></td>
    <td><p>Farid al atrach</p></td>
    <td><p>Mohhamed henni</p></td>
  </tr>
  <tr>
  <td><p>Mohhamed dubois</p></td>
    <td><p>Farid al atrach</p></td>
    <td><p>Mohhamed henni</p></td>
  </tr>
  <tr>
  <td><p>Mohhamed dubois</p></td>
    <td><p>Farid al atrach</p></td>
    <td><p>Mohhamed henni</p></td>
  </tr>
  <tr>
  <td><p>Mohhamed dubois</p></td>
    <td><p>Farid al atrach</p></td>
    <td><p>Mohhamed henni</p></td>
  </tr>
</table>
      </div>
    </div>
    </motion.div>
  );
}

export default Orders;