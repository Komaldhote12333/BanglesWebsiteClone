import { useStateValue } from '../contextapi/context'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { Link } from 'react-router-dom';
const Wishlist = () => {

  const [{ wishlist }, dispatch] = useStateValue();
  console.log({ wishlist })
  return (
    <div className='marginep'>

    <div className="yourcard">Wishlist List</div>
      {wishlist.map(element => (
        <Link to ={`/singleproduct/${element.productid}`} style={{textDecoration:"none"}} >
        <div className='mainCardbox' key={element.productid} >
          <div className="maincartitemech">

            <div className="imagecse"><img src={element.productimage} alt="" /></div>
            <div className="Carddetails">
              <div className="productname">
                <div className="productnamemain">  {element.productname}</div>
                <div className="productratingmain">1 2 3 4 5 </div>
                <div className="echprodpricesemobile">
                  <del >{element.productoldprice}</del>
                  <div className="orignalpriceechc">{element.productprice}</div>
                </div>
              </div>
            </div>
            <div className="echprodpricese">
              <del>{element.productoldprice}</del>
              <div className="orignalpriceechc">{element.productprice}</div>
            </div>
            <div className="removefromCard"><RestoreFromTrashIcon /></div>
          </div>
        </div>
        </Link>
      ))}</div>


  )
}

export default Wishlist