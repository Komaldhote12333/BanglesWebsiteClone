import { useStateValue } from '../contextapi/context'
import { Link } from 'react-router-dom';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';


const Perticulorcard = ({productid,productimage,productname,productprice,productoldprice}) => {
  const [state, dispatch] = useStateValue();
  const Removeitem = () =>{
    dispatch(
      {
          type:"Removeitem",
          id : productid
      }
    )
    console.log('dispach',productid) 

  }
    
     
  return(
      <div>
      <div className='maincardbox' key={productid} >
        <div className="maincartitemech">
  
      <Link to ={`/singleproduct/${productid}`} style={{textDecoration:"none"}} >
      <div className="imagecse"><img src={productimage} alt="" /></div> 
      </Link>

          <div className="carddetails">
            <div className="productname">
              <div className="productnamemain">  {productname}</div>
              <div className="productratingmain">1 2 3 4 5 </div>
              <div className="echprodpricesemobile">
                <del >{productoldprice}</del>
                <div className="orignalpriceechc">{productprice}</div>
              </div>
            </div>
          </div>
          <div className="echprodpricese">
            <del>{productoldprice}</del>
            <div className="orignalpriceechc">{productprice}</div>
          </div>
          <div className="removefromcard"><RestoreFromTrashIcon onClick={Removeitem}/></div>
        </div>
      </div>
  </div>
    
  )


      
        
    
  
      
     
}


export default Perticulorcard;