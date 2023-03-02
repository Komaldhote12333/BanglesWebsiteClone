import './loginuser.css'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useStateValue } from '../contextapi/context';
import { Link } from 'react-router-dom';
const Loginuser = () => {
  const[state ,dispatch] = useStateValue();
   
  const addtoset =() => {
        
    dispatch(
        {
                type: 'addtobasetsket',
             
        }
    )
    toast.success('your demo is activated go back and use all prime functionality ', {
      position: "top-center",
      autoClose: 5100,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
 
  
      }

  localStorage.setItem("Ersucess" ,false)

  const navigate =useNavigate();
  const [ logPhone ,setlogphone] = useState('');
  const [ logpass ,setlogpass] = useState('');

  const Emailorphone =(e) => {
    setlogphone(e.target.value)
  }

  const passwordloging =(e) => {
    setlogpass(e.target.value)
  }

  
  const [Eroror , seteroror] = useState(false)
  const useremailorphone = localStorage.getItem("mobile");
 
  const userepassword = localStorage.getItem("password");
 console.log(useremailorphone,userepassword)


  const loginhandler = (e) => {
    e.preventDefault();
    if(logPhone===useremailorphone && logpass===userepassword){
      addtoset();
      navigate("/");
     
    }
    else{
      seteroror(true);
    }

  }
  return (
    <div className="registerbox">
      <div className="boxcolwhite">
      
      <div className="regstercart">

       {Eroror && <Stack sx={{ width: '100%' }} spacing={2}>
       <Alert severity="error">Enterd phone and password is wrong!</Alert>
       
     </Stack> }

        <div className="createanaccountname">Login To Your Acoount</div>


        <div className="formrefister">

          <form action="" >
            <input type="text" onChange={Emailorphone}  placeholder='Mobile Number' />
            
            <input type="password" onChange={passwordloging} placeholder="Password" name="" id="" />
        
            <div className="chackebox23"><div className='rembersection'><input type="checkbox"name="" id="" /><div>Remember me</div></div>
            <div className="forgetpassword">Forget Password</div>
            </div>
            <input type="submit" onClick={loginhandler} className="fontcolwhite1"  value="Login " />
          </form>



        </div>


      </div>
        <div className="orsection">
        <div className="ortype"><p>or</p></div>
        <input type="submit" className="fontcolwhite2" onClick={addtoset}  value=" TAKE DEMO WITHOUT LOGIN" />
               
        <ToastContainer
        position="top-center"
        autoClose={1100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
        <input type="submit" className="fontcolwhite3"  value="Login With Google" />
        <div className="loginor"> 
         
        <Link to ='/registration' style={{textDecoration:"none"}} >
   
         <p> Need an Account ?<b>Register</b></p>
         </Link>
         </div>
        
        
        
        
        </div>

      </div>



    </div>
  );
}

export default Loginuser;