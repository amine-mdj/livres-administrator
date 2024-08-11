import './category.css';
import {motion} from 'framer-motion'
import IMage from '../images/image.png'

import Aventure from '../images/aventure.png'
import Histoire from '../images/histoire.png'
import Fiction from '../images/fiction.jpeg'
import Romance from '../images/romance.jpg'
import Politics from '../images/politics.jpg'
import Poesie from '../images/poesie.jpeg'

function Category() {
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
      <div className='dash-wrap'>
    <div className="main2 main-books">
      <div className='headertab'>
        <p>Category</p>
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
      <p>CATEGORY</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div>
        </th>
    <th><div className='thead'>
      <p>NAME</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div></th>
    <th><div className='thead'>
      <p>NUM OF BOOKS</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div></th>
      <th>
      <div className='thead'>
      <p>DELETE</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div>
        </th>
    
  </tr>
  <tr>
    <td className='td-image'><img className='img-desc img-category' src={Aventure} alt="" srcset="" /></td>
    <td><p className=' big-font'>Aventure</p></td>
    <td><p className=' big-font'>4 <span>Books</span></p></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
  <tr>
  <td className='td-image'><img className='img-desc img-category' src={Histoire} alt="" srcset="" /></td>
  <td><p className=' big-font'>Histoire </p></td>
    <td><p className=' big-font'>15 <span>Books</span></p></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
  <tr>
  <td className='td-image'><img className='img-desc img-category' src={Fiction} alt="" srcset="" /></td>
  <td><p className=' big-font'>Fiction</p></td>
    <td><p className=' big-font'>7 <span>Books</span></p></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
  <tr>
  <td className='td-image'><img className='img-desc img-category' src={Romance} alt="" srcset="" /></td>
  <td><p className=' big-font'>Romance</p></td>
    <td><p className=' big-font'>10 <span>Books</span></p></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
  {/* <tr>  
  <td className='td-image'><img className='img-desc' src={Politics} alt="" srcset="" /></td>
  <td><p className='bluebook'>alice au pays des merveilles</p></td>
    <td><p>45 $</p></td>
  </tr>
  <tr>
  <td className='td-image'><img className='img-desc' src={Poesie} alt="" srcset="" /></td>
  <td><p className='bluebook'>blache neige</p></td>
    <td><p>50 $</p></td>
  </tr>
  */}
</table>
      </div>
    </div>
    <div className='add-new'> <button>Add New</button></div>
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

export default Category;