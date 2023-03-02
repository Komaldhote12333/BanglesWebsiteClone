import './womenproduct.css'
import DUMMY_EXPENCES from '../items/alljason';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Womenproduct = () => {

const numpage = Math.ceil(DUMMY_EXPENCES.length/10)



const[paginationitem , setpaginationitem] = useState(12)
console.log(setpaginationitem)

 const[slicevalue , setslicevalue] =useState({
    start : 0,
    end :  12,
 })

const valuegeter=(start ,end) => {
    setslicevalue({start:start ,end:end})
}



 const[count ,  setcounter ]  = useState(1);

useEffect(() => {
  const endvalue = paginationitem * count;
  const startvalue = endvalue- paginationitem
  valuegeter(startvalue,endvalue)
},[count,paginationitem])




    return(
       <div>
       <div className="womanboxadding">
       {

        DUMMY_EXPENCES.slice(slicevalue.start,slicevalue.end).map( ({id, src ,amount,amountold,rating,title},index) => {
            return(
             
              <Link to ={`/singleproduct/${id}`} style={{textDecoration:"none"}} >
             <div className="womanbox" key={id}>
             <div className="imagewoman"><img src={src} alt="" /></div>
             <div className="womanprice womancontent">
             <del>299</del>
             <div>Rs 199</div></div>
             <div className="womenrating womancontent"> ⭐⭐⭐⭐⭐</div>
             <div className="womenitemname womancontent">chire bangles orange</div>


         
             
             
             
             </div>
             </Link>










            )
        })
       }
       </div>

        
       <div className='prevnest'>

       <nav aria-label="...">
  <ul class="pagination ">
    <li class="page-item ">
      <span class="page-link" onClick={()=> setcounter(count-1)}>Previous</span>
    </li>
  
   {new Array( numpage).fill(' ').map((elemnt ,index) => {
    return(
        <li class={`page-item ${1+index === count? "active" : "null" }` }><a href='!' class="page-link" onClick={()=> setcounter(1+index)}>{index +1}</a></li>
    )
   })}


   
   
    <li class="page-item">
      <a class="page-link" href='!'  onClick={()=> setcounter(count+1)}>Next</a>
    </li>
  </ul>
</nav>



       
       
       </div>
</div>



    );
}
export default Womenproduct;