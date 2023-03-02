import './cart.css'
import { useStateValue } from '../contextapi/context'
import { Link } from 'react-router-dom';
import Perticulorcard from './perticulorcard';
const Card = () => {

  const [{ basket }, dispatch] = useStateValue();

 
  console.log({ basket })
  return (
    <div className='marginep'>

    <div className="yourcard">Your Card</div>
   {basket.map( (elementss) => {
    
    return(
      <Perticulorcard productid ={elementss.productid} productimage={elementss.productimage} productname = {elementss.productname} productprice = { elementss.productprice} productoldprice ={elementss.productoldprice}/>
    );
   })}


        </div>


  )
}

export default Card