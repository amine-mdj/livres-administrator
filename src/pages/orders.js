import './orders.css';
import {motion} from 'framer-motion'

function Orders() {
  return (
    <motion.div
    className="main2 margin-main2"
    initial={{x:'-80%',scale:0.5}}
    animate={{x: 0,scale:1}}
    exit={{x:'100%',scale:0.5}}
    transition={{duration:0.8}}
    >
      <div className='filter'>
      <i class="fa-solid fa-filter" style={{color: '#7D6211'}}></i>
        <p>filter</p>
      </div>
    <div className="main2">
      <div className='headertab'>
        <p>Orders</p>
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
    <th>
      <div className='thead'>
      <p>FULL NAME</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div>
        </th>
    <th><div className='thead'>
      <p>BOOK</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div></th>
    <th><div className='thead'>
      <p>PRICE</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div></th>
    <th><div className='thead'>
      <p>ACTION</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div></th>
    <th><div className='thead'>
      <p>PHONE NUMBER</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div></th>
  </tr>
  <tr>
    <td><p>Mohhamed hendi</p></td>
    <td><p className='bluebook'>Les fables de la fontaine</p></td>
    <td><p>25 $</p></td>
    <td><div className='center'><button className='sold'>Sold</button></div></td>
    <td><p>07 56 85 64 78 </p></td>
  </tr>
  <tr>
  <td><p>Karim ouadahi</p></td>
    <td><p className='bluebook'>La belle et la bete </p></td>
    <td><p>35 $</p></td>
    <td><div className='center'><button className='sold'>Sold</button></div></td>
    <td><p>07 86 56 43 85 </p></td>
  </tr>
  <tr>
  <td><p>kamel ben sghir</p></td>
    <td><p className='bluebook'>l'etranger</p></td>
    <td><p>50 $</p></td>
    <td><div className='center'><button className='pending'>Pending</button></div></td>
    <td><p>06 76 57 85 64 </p></td>
  </tr>
  <tr>
  <td><p>farid loumi</p></td>
    <td><p className='bluebook'>l'alchemiste</p></td>
    <td><p>75 $</p></td>
    <td><div className='center'><button className='canceled'>Canceled</button></div></td>
    <td><p>06 75 78 65 87 </p></td>
  </tr>
  <tr>
  <td><p>islam ait idir</p></td>
    <td><p className='bluebook'>alice au pays des merveilles</p></td>
    <td><p>45 $</p></td>
    <td><div className='center'><button className='pending'>Pending</button></div></td>
    <td><p>07 65 54 78 64</p></td>
  </tr>
  <tr>
  <td><p>Adb essamed deghi</p></td>
    <td><p className='bluebook'>blache neige</p></td>
    <td><p>50 $</p></td>
    <td><div className='center'><button className='pending'>Pending</button></div></td>
    <td><p>07 75 69 43 27 </p></td>
  </tr>
  <tr>
  <td><p>Djamel bounafet</p></td>
    <td><p className='bluebook'>les miserables</p></td>
    <td><p>20 $</p></td>
    <td><div className='center'><button className='sold'>Sold</button></div></td>
    <td><p>06 76 59 51 37</p></td>
  </tr>
</table>
      </div>
    </div>
    <div className='pagincont'>
      <div className='pagin'>
      <i class="fa-solid fa-chevron-left" style={{color: '#7D6211'}}></i>
      </div>
      <p>1</p>
      <div className='pagin'>
      <i class="fa-solid fa-chevron-right" style={{color: '#7D6211'}}></i>
      </div>
      </div>
    </motion.div>
  );
}

export default Orders;