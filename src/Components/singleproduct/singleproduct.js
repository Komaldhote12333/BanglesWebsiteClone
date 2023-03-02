import './singleproduct.css';
import { useParams } from 'react-router-dom';
import DUMMY_EXPENCES from '../items/alljason';
import { useStateValue } from '../contextapi/context';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
     
        GlassMagnifier,
        
      } from "react-image-magnifiers";
const Singleproduct = () => {
    const[state ,dispatch] = useStateValue();

    

  const addtobasket =() => {
        
    dispatch(
        {
                type: 'addtobasket',
                item : {
                        productname : title,
                        productimage : src,
                        productid : id,
                        productoldprice : amountold,
                        productprice : amount,
                        
                      
                }
        }
    )

    toast.success('Item added to Card', {
position: "top-center",
autoClose: 1100,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});

    


  }



  const addtowishlist =() => {
    dispatch(
        {
                type: 'addtowishlist',
                item : {
                        productname : title,
                        productimage : src,
                        productid : id,
                        productoldprice : amountold,
                        productprice : amount,
                        
                      
                }
        }

    )
    toast.success('Item added to Wish LIst', {
position: "top-center",
autoClose: 1100,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
  
    


  }
  


        const Prodidd = useParams();
        const mainp = DUMMY_EXPENCES.find((el) => el.id ===Prodidd.id)
        const {src,title,amountold,amount,id} =mainp
    return (
          
        <div className="sigleprodbox">
        
            <div className="left-singleside"> 
            <GlassMagnifier
            magnifierSize={200}
            magnifierBorderColor ={ '#d50000'}
                imageSrc={src}
                imageAlt="Example"
                largeImageSrc={src} // Optional
// Optional
/>
            </div>

            <div className="right-singleproditem">
              <div className="itemno">SKU: BST-{mainp.id}</div>
              <div className="itemname">{mainp.title}</div>
              <div class="singleitemprice">
                      <del class="old-productsingle">Rs {mainp.amountold}</del>
                      <span class="old-productsingle">Rs {mainp.amount}</span>
              </div>

              <div className="singleproductrating">
               <div className="ratingofsingleprod">RATING</div>
               <div className="vountsingleprodrating">⭐⭐⭐⭐⭐</div>
              
              </div>
              

              <div className="quantityandcard">
             
              <div className="singlebutton"><button onClick={addtobasket}>Add to cart</button>
              <button onClick={addtowishlist}>Add to Wishlist</button>
            
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
              </div>
              
              </div>
            </div>
        
        
        
        
        
        
        </div>

        
                );
}

export default Singleproduct;