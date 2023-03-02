import './chackout.css'
import amitbarcode from './amitbarcode.jpg'
import { useStateValue } from '../contextapi/context';
const Chackout = () => {
  
    return(
       <div className="chackoutbox">
        
            <div className="imageandtotal">  
            
              <div className="imagebar"><img src={amitbarcode} alt="" /></div>
              
            
            </div>


            <div className="phonpaynumber"><span className='Phonepaynumberc'> Phonypay Number</span> &nbsp;&nbsp;&nbsp;&nbsp;7089062848 <div>or</div> 9131522923</div>

            <div className="addresh">
            <div className="addreshmain">Address</div> 
            <div className="addreshdecription">in FRont of stadium ground Cs Complex Nagpur  Road Chhindwara 480001</div>
            
            
            </div>
        
        
            
       
       
       
       
       
       </div>
    )
}

export default Chackout;