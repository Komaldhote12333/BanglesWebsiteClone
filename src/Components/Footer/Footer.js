import { Link } from 'react-router-dom';
import './footer.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {


    return (
        <div className="Footermmain">

            <div className="footerpadding">





                <div className="Socialsec">

                    <div className="socialname">SOCIAL</div>
                    <div className="fgiicons">
                        <div className="facebooki">
                        <a style={{textDecoration:"none" , color : "white"}} href="https://www.linkedin.com/in/komal-dhote-38a792237/"><FacebookIcon fontSize='large'></FacebookIcon></a>
                        </div>
                        <div className="instai">
                        <a style={{textDecoration:"none" , color : "white"}} href="https://www.linkedin.com/in/komal-dhote-38a792237/">      <InstagramIcon fontSize='large'></InstagramIcon></a>
                  </div>
                        <div className="twweteri">
                        <a style={{textDecoration:"none" , color : "white"}} href="https://www.linkedin.com/in/komal-dhote-38a792237/">     <YouTubeIcon fontSize='large'></YouTubeIcon>   </a>
                      </div>
                        <div className="youtubei">
                        <a style={{textDecoration:"none" , color : "white"}} href="https://www.linkedin.com/in/komal-dhote-38a792237/">           <TwitterIcon fontSize='large'></TwitterIcon>  </a>
                </div>

                        <div className="linkedini">
                <a style={{textDecoration:"none" , color : "white"}} href="https://www.linkedin.com/in/komal-dhote-38a792237/">      <LinkedInIcon fontSize='large' color='red'></LinkedInIcon>       </a>
                        
                       </div>

                    </div>

                    <div className="payments">Pyments methods</div>
                    <Link to = '/chacout' style={{textDecoration:"none"}} >
           
                    <div className="razerpaylogo"> <img src="https://logodix.com/logo/1763653.jpg" alt="" /></div>
                     </Link>
                </div>






                <div className="Contact">
           
                    <div className="contacts-info">CONTACT INFO</div>
                    <div className="aboutus-g">
                    <a style={{textDecoration:"none" , color : "white"}} href="https://www.linkedin.com/in/komal-dhote-38a792237/">About us</a>
                    
                    </div>
                    
                    <div className="contactinfo2" ><a style={{textDecoration:"none" , color : "white"}} href="https://www.linkedin.com/in/komal-dhote-38a792237/">Contact us</a> </div>
                    <div className="skillf">
                    
                    <a style={{textDecoration:"none" , color : "white"}} href="https://www.instagram.com/komal_dhote__/">       Web Devlopment      </a>
                        
                  </div>




                </div>












                <div className="policysec">
                    <Link to='/polisy' style={{ textDecoration: "none", color: 'white' }} >
                        <div className="polisyname-f1">POLICY</div>  </Link>
                        <Link to='/polisy' style={{ textDecoration: "none", color: 'white' }} >
                  
                        <div className="polisyname-f2">Privacy Policy</div>
                        </Link>
                        <Link to='/polisy' style={{ textDecoration: "none", color: 'white' }} >

                    <div className="polisyname-f3">Terms</div>
                    </Link>
                    <Link to='/polisy' style={{ textDecoration: "none", color: 'white' }} >

                    <div className="polisyname-f4">Seller Policy</div>
                    </Link>
                    <Link to='/polisy' style={{ textDecoration: "none", color: 'white' }} >

                    <div className="polisyname-f5">Support Policy</div>
                    </Link>
                    <Link to='/polisy' style={{ textDecoration: "none", color: 'white' }} >

                    <div className="polisyname-f6">Return Policy</div>
                    </Link>






                </div>


                <div className="policysec">

                <Link to='/Myprofile' style={{ textDecoration: "none", color: 'white' }} >
                    
                    <div className="polisyname-f1">MY ACCOUNT</div>
                    </Link>
                <Link to='/signin' style={{ textDecoration: "none", color: 'white' }} >

                    <div className="polisyname-f2">Login</div>
                    </Link>
                    <Link to='/polisy' style={{ textDecoration: "none", color: 'white' }} >

                    <div className="polisyname-f3">Order History</div>
                    </Link>
                    <Link to='/polisy' style={{ textDecoration: "none", color: 'white' }} >

                    <div className="polisyname-f5">Track Order</div>
                    </Link>
                    <Link to='/polisy' style={{ textDecoration: "none", color: 'white' }} >

                    <div className="polisyname-f6">Return Policy</div>
                    </Link>

                    <Link to='/Myprofile' style={{ textDecoration: "none", color: 'white' }} >

                    <div className="polisyname-f6">My Profile</div>
                    </Link>
      



                </div>


            </div>






        </div>
    );
}
export default Footer;