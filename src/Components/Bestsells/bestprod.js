import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../contextapi/context';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const BestProd = ({ src ,id }) => {
    const[state ,dispatch] = useStateValue();
   
    const addtobasket =() => {
        
        dispatch(
            {
                    type: 'addtobasket',
                    item : {
                            productname : id,
                            productimage : src,
                            productid : id,
                            productoldprice : id,
                            productprice : id,
                            
                          
                    }
            }
        )
   
        
    
    
      }
    
    return (

           <>


            <div className='BEstsellmainbox'>

                <div className="bestsellleftpart"><img src={src} alt="" />
                </div>


                <div className="rightside">
                    <div><div className="bestitemname">golden/red color daily use strong bangles</div>
                        <div className="besstprodcutrating">⭐⭐⭐⭐⭐</div></div>


                    <div>

                    </div>
                    <div className='bestkalast'>
                        <div class="price-box __web-inspector-hide-shortcut__">
                            <del class="old-product-price strong-400 bastsellnormalprice">Rs 149</del>
                            <span class="product-price strong-600 bastsellnormalprice">Rs 99</span>
                        </div>

                        <div className="shopingboxbestsell" ><ShoppingCartOutlinedIcon onClick={addtobasket} />
                     </div>


                    </div>
                </div>









            </div>


            </>

    );
}
export default BestProd