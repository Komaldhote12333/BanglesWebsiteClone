import './navbar.css';

import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CropOutlinedIcon from '@mui/icons-material/CropOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { motion } from "framer-motion";
import chandel from './chandelbangles.png'
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import SynagogueOutlinedIcon from '@mui/icons-material/SynagogueOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useStateValue } from '../contextapi/context';

const Navbar = () => {
    localStorage.setItem('logged' , 'false')

    const[state , dispatch] =useStateValue();

    const { basket , wishlist ,authchack} = state



      
  


   


    const[ismobile ,setmobile] =useState(false);
    
    const sethamburgor = () => {
        setmobile(! ismobile);
    }


     const[isserch , setserch] =useState(false);
     const setserchresponsive = () => {
        setserch(!isserch);
     }

  
 
return(
    <div>

    
    

    <div className="Navbar">

     
    
    <div className={ ismobile ? 'left-navmenu' : 'normalnavwithoutclick'}>
    
                    <div className="navupper-section">
                            <div className="profile">
                            <img src="https://cdn3.vectorstock.com/i/1000x1000/27/07/young-executive-woman-profile-icon-vector-9692707.jpg" alt="" />
                            <div className="closemenu"><CloseOutlinedIcon onClick={sethamburgor} fontSize='large'/></div>
                            </div>


                          
                            <div className="signupandregister">

                                <Link to ='/Signin' style={{textDecoration:"none" ,color:"white"}} >   <div className="signin-n">Sign in</div>  </Link>
                                <Link to ='/Registration' style={{textDecoration:"none",color:"white"}} >  <div className="REgistrations-n">Registration</div> </Link>
                            
                            </div>
                    </div>


                    <div className="othersection">
                        <div className="eachelement">
                            <div className="logo"><CottageOutlinedIcon/></div>
                            <Link to ='/' style={{textDecoration:"none",color:"black"}}  >  <div className="logoname">Home</div> </Link>
                        </div>

                        <div className="eachelement">
                            <div className="logo"><WcOutlinedIcon/></div>
             <Link to ={ authchack ? '/Women' : '/signin'} style={{textDecoration:"none",color:"black"}} >

                            <div className="logoname">Women</div>
                            </Link>
                        </div>

                        <div className="eachelement">
                            <div className="logo"><CategoryOutlinedIcon/></div>
             <Link to ={ authchack ? '/allcate' : '/signin'} style={{textDecoration:"none",color:"black"}} >

                            <div className="logoname">All Categories</div> </Link>
                        </div>


                       

                        <div className="eachelement">
                            <div className="logo"><CropOutlinedIcon/></div>
            
             <Link to ={ authchack ? '/Women' : '/signin'} style={{textDecoration:"none",color:"black"}} >

                            <div className="logoname">Find Bangles Size</div></Link>
                        </div>

                        <div className="eachelement">
                            <div className="logo"><HistoryToggleOffOutlinedIcon/></div>
             <Link to ={ authchack ? '/polisy' : '/signin'} style={{textDecoration:"none",color:"black"}} >

                            <div className="logoname">Purchase History</div>
                            </Link>
                        </div>

                       


                        <div className="eachelement">
                            <div className="logo"><CreditCardOffOutlinedIcon/></div>
                            <Link to ='/card' style={{textDecoration:"none",color:"black"}} >
                            <div className="logoname">Cart <span>{basket.length}</span></div>
                            </Link>
                        </div>
             <Link to ={ authchack ? '/wishlist' : '/signin'} style={{textDecoration:"none",color:"black"}} >

                        <div className="eachelement">
                            <div className="logo"><SynagogueOutlinedIcon/></div>
                            <div className="logoname">Wishlist <span>{wishlist.length}</span></div>
                        </div> </Link>
             <Link to ={ authchack ? '/Myprofile' : '/signin'} style={{textDecoration:"none",color:"black"}} >

                        <div className="eachelement">
                            <div className="logo"><AccountBalanceWalletOutlinedIcon/></div>
                            <div className="logoname">MY Wallet</div>
                        </div>
                        </Link>
             <Link to ={ authchack ? '/Myprofile' : '/signin'} style={{textDecoration:"none",color:"black"}} >
                        
                        <div className="eachelement">
                            <div className="logo"><AccountCircleOutlinedIcon/></div>
                            <div className="logoname">Manage My Profile</div>
                        </div>
                        </Link>   
                        
                    
             <Link to ={ authchack ? '/polisy' : '/signin'} style={{textDecoration:"none",color:"black"}} >

                        <div className="eachelement">
                            <div className="logo"><RequestPageOutlinedIcon/></div>
                            <div className="logoname">Send Refund Request</div>
                        </div>
                        </Link>
             <Link to ={ authchack ? '/chacout' : '/signin'} style={{textDecoration:"none",color:"black"}} >

                        <div className="eachelement">
                            <div className="logo"><AirplaneTicketOutlinedIcon/></div>
                            <div className="logoname">Support ticket</div>
                        </div>
                        </Link>
                        
                    
                    </div>


    
    
    
    </div>
    
    <div className="hamburgormenuicon"><MenuOutlinedIcon onClick={sethamburgor}  fontSize='large'/></div>
            <div className="imagelogo">
            <motion.img 
            initial={{ left : '-34%'}}
            whileInView={{right : '2%'}}
            transition={{duration : 2 ,type:'spring'}}
  
  src={chandel} alt="" />
            </div>
    <div className="Serchbox">
            <input className="serchlogoIN" type="text" placeholder="ENTER SOMTHING HERE"/>
            <div className="serchlogo"><SearchSharpIcon fontSize='large'/></div>       
    </div>

    <div className="serchresponsive">
            <input className={isserch ? "serchlogoIN-responsiveactive" :"serchlogoIN-responsive"}     type="text" placeholder="ENTER SOMTHING HERE"/>
            <div className= {isserch ? "serchlogo-responsiveactive" : "serchlogo-responsive"}><SearchSharpIcon onClick={setserchresponsive} fontSize='large'/>  <ArrowCircleLeftOutlinedIcon className='closeserch'  fontSize='large' onClick={setserchresponsive}/></div>     
    
    </div>


    <div className="basketlogoresponsive">
    <Link to ={ authchack ? '/card' : '/signin'} style={{textDecoration:"none",color:"black"}} >

    <ShoppingCartOutlinedIcon fontSize='medium'/>
    <span>{basket.length}</span>
    </Link>
    
    </div>





    
    <div className="navrightbox">
           <Link to ={ authchack ? '/wishlist' : '/signin'} style={{textDecoration:"none"}} >
            
           <div className="echnavsection">
                    <div className="dillogo"><FavoriteBorderRoundedIcon fontSize='medium'/></div>
                    <div className="dil-right">
                    <span>{wishlist.length}</span>
                    <span>Wishlist</span>
                    </div>
            </div>
           </Link>
           <Link to ={ authchack ? '/card' : '/signin'} style={{textDecoration:"none"}} >
            <div className="echnavsection">
                    <div className="dillogo"><ShoppingCartOutlinedIcon fontSize='medium'/></div>
                    <div className="dil-right">
                    <span>{basket.length}</span>
                    <span>Card</span>
                    </div>
            </div>
            </Link>
            
            <Link to ={ authchack ? '/Myprofile' : '/signin'} style={{textDecoration:"none"}} >

            <div className="echnavsection">
                    <div className="dillogo"><PermIdentityOutlinedIcon fontSize='medium'/></div>
                    <div className="dil-right">
                    <span>{localStorage.getItem('username').charAt(0)}</span>
                    <span>Accouunt</span>
                    </div>
            </div>
            </Link>
            


            
    
    </div>
    
    
    
    
    
    
    
    
    </div>
    </div>
);


}
export default Navbar;