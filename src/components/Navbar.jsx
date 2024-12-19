import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import images from '../assets/images.png';
import { useDispatch, useSelector } from 'react-redux';
import {logOut} from '../redux/sliceUser'
import { resetReserve } from '../redux/sliceReserve';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import style from '../views/titulo.module.css'

const Navbar = ()=>{

    const user = useSelector((state)=>state.User.user);
    const dispatch = useDispatch();
   const navigate = useNavigate();

    const handleState = ()=>{
        dispatch(resetReserve())
     dispatch(logOut())
     navigate('/')
     return;
    }

    return (
   
    <div className={styles.navbar} >
    <img src={images} alt="NH" style={{width:"70px", height:"70px"}} />
    <Link to="/">HOME</Link>
   
   {user?(<>
   
    <Link to="/Misturnos">My turns</Link>
    <button className={styles.btn} onClick={handleState}>Logout</button>

    <div>
    <h3 className={style.userName}>Usuario: {user.userName}</h3>
    <p className={style.userPhoto}><FontAwesomeIcon icon={faUser} size='2x' /></p>
    </div>

    </>
   ):(<>
      <Link to="/Login">LOGIN</Link>
      <Link to="/Register">REGISTER</Link>
   </>)}
   </div>
    )
}

export default Navbar;