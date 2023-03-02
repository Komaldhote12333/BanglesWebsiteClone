import './registeruser.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Regiseteruser = () => {
const usenavigate = useNavigate();
const [ lName ,setName] = useState('');
const [ lMobilenum ,setMobilenum] = useState('');

const [ lPassword ,setPassword] = useState('');
const [iserror , seterore] = useState(false)


const Name =(e) =>{
  
  setName(e.target.value)

}

const Mobilenum =(e) =>{
  setMobilenum(e.target.value)
}

const Password =(e) =>{
  setPassword(e.target.value)
}
const Submitr = (e) => {
  e.preventDefault();
  if(lName.trim().length ===0 && lMobilenum.trim().length===0 && lPassword.trim().length===0 ){
    console.log("error")
    seterore(true)
  }
  else{
    localStorage.setItem("username", lName  )
    localStorage.setItem("mobile", lMobilenum )
    localStorage.setItem("password", lPassword  )
  

    usenavigate("/Signin")
  }


}
  return (


    <div className="registerbox">
      <div className="boxcolwhite">
      
      <div className="regstercart">

        <div className="createanaccountname">Create an account.</div>
    
   { iserror &&  <Stack sx={{ width: '100%' }} spacing={2}>
   <Alert severity="warning">Please Enter valid Informations!</Alert>
 </Stack>}
        

        <div className="formrefister">

          <form action="">
            <input type="text" placeholder='Name' x-webkit-speech onChange={Name}/>
            <input type="number" name="" placeholder="Mobile number" id="" onChange={Mobilenum} />
            <div className="useinsetedname">Use Email insted</div>
            <input type="password" placeholder="Password"onChange={Password}  name="" id="" />
            <input type="password" placeholder="Conform Password" name="" id="" />
            <div className="chackebox"><input type="checkbox"name="" id="" /><div>by singing up you agree to our terms and conditions</div></div>
            <input type="submit" className="fontcolwhite1" onClick={Submitr}   value="Create Account " />
            
          </form>



        </div>


      </div>
        <div className="orsection">
        <div className="ortype"><p>or</p></div>
        <input type="submit" className="fontcolwhite2"  value="Login With Facebook " />
        <input type="submit" className="fontcolwhite3"  value="Login With Google" />
         <div className="loginor">  
         <Link to ='/signin' style={{textDecoration:"none"}} >

         
         <p> Already have an account <b>Login</b></p>
         </Link>
         </div>
        
        
        
        </div>

      </div>



    </div>
  );
}
export default Regiseteruser