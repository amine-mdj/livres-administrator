import './books.css';
import {motion} from 'framer-motion'
import IMage from '../images/image.png'

function Books() {
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
        <p>Books</p>
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
      <p>NAME</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div>
        </th>
    <th><div className='thead'>
      <p>PICTURE</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div></th>
    <th><div className='thead'>
      <p>PRICE</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div></th>
    <th><div className='thead'>
      <p>EDIT</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div></th>
    <th><div className='thead'>
      <p>DELETE</p>
      <i class="fa-solid fa-sort" style={{color: '#ffffff'}}></i>
      </div></th>
  </tr>
  <tr>
  <td><p className='bluebook'>Les fables de la fontaine</p></td>
    <td className='td-image'><img className='img-desc' src={IMage} alt="" srcset="" /></td>
    <td><p>25 $</p></td>
    <td><div className='center'><div className='div-edit'><i class="fa-solid fa-pen-to-square" style={{color: '#008D8D'}}></i></div></div></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
  <tr>
  <td><p className='bluebook'>La belle et la bete </p></td>
  <td className='td-image'><img className='img-desc' src={IMage} alt="" srcset="" /></td>
    <td><p>35 $</p></td>
    <td><div className='center'><div className='div-edit'><i class="fa-solid fa-pen-to-square" style={{color: '#008D8D'}}></i></div></div></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
  <tr>
  <td><p className='bluebook'>l'etranger</p></td>
  <td className='td-image'><img className='img-desc' src={IMage} alt="" srcset="" /></td>
    <td><p>50 $</p></td>
    <td><div className='center'><div className='div-edit'><i class="fa-solid fa-pen-to-square" style={{color: '#008D8D'}}></i></div></div></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
  <tr>
  <td><p className='bluebook'>l'alchemiste</p></td>
  <td className='td-image'><img className='img-desc' src={IMage} alt="" srcset="" /></td>
    <td><p>75 $</p></td>
    <td><div className='center'><div className='div-edit'><i class="fa-solid fa-pen-to-square" style={{color: '#008D8D'}}></i></div></div></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
  <tr>
  <td><p className='bluebook'>alice au pays des merveilles</p></td>
  <td className='td-image'><img className='img-desc' src={IMage} alt="" srcset="" /></td>
    <td><p>45 $</p></td>
    <td><div className='center'><div className='div-edit'><i class="fa-solid fa-pen-to-square" style={{color: '#008D8D'}}></i></div></div></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
  <tr>
  <td><p className='bluebook'>blache neige</p></td>
  <td className='td-image'><img className='img-desc' src={IMage} alt="" srcset="" /></td>
    <td><p>50 $</p></td>
    <td><div className='center'><div className='div-edit'><i class="fa-solid fa-pen-to-square" style={{color: '#008D8D'}}></i></div></div></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
  <tr>
  <td><p className='bluebook'>les miserables</p></td>
  <td className='td-image'><img className='img-desc' src={IMage} alt="" srcset="" /></td>
    <td><p>20 $</p></td>
    <td><div className='center'><div className='div-edit'><i class="fa-solid fa-pen-to-square" style={{color: '#008D8D'}}></i></div></div></td>
    <td><div className='center'><div className='div-delete'><i class="fa-solid fa-trash" style={{color: '#911463'}}></i></div></div></td>
  </tr>
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

export default Books;