
import './App.css';


import { Route, Routes } from "react-router-dom";
import Recentitems from './Components/Recent items/recentitem';
import Intro from './Components/Intro/intro';
import Rowdata from './Components/rowsection/rowdata';
import Secondonef from './Components/secondfotter/Secondfooter';
import Subscribe from './Components/sUBSCRIBESE/subscribesection';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Singleproduct from './Components/singleproduct/singleproduct';
import BestSell from './Components/Bestsells/bestsell';
import Womenproduct from './Components/Womenprod/womenproduct';
import Regiseteruser from './Components/loginsignpu/Registration';
import Loginuser from './Components/loginsignpu/loginuser';
import Card from './Components/Cards/cart';
import Privacy from './Components/Privacy policy/Privacy';
import Chackout from './Components/chacoutpage/chackout';
import Wishlist from './Components/wishlist/wishlist';
import Myprofile from './Components/myprofile/myprofile';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Rowdata/>
      <Routes>
  
        <Route path="/" element={
          <div>
        
         <Intro></Intro>
         <Recentitems></Recentitems>
          <Recentitems></Recentitems>
          <BestSell></BestSell>
          <Secondonef></Secondonef>
          <Subscribe></Subscribe>
      
          <Footer></Footer>
          </div>
        
        
        
        
        } />
        <Route path='/card' element={ <div><Card/> <Chackout/></div>}/>
        <Route path='/Myprofile' element={ <div><Myprofile/> <Privacy/> <Subscribe/> <Footer/></div>}/>


        <Route path='/wishlist' element={ <div><Wishlist/> <Chackout/></div>}/>
        <Route path='/chacout' element={ <div><Chackout/> <Privacy/> <Subscribe/> <Footer/></div>}/>

        <Route path='/allcate' element={ <div><Recentitems/> <Recentitems/> <Womenproduct/> <BestSell/> <Secondonef/> <Subscribe/> <Footer/></div>}/>


        <Route path="/singleproduct/:id" element={<div><Singleproduct />
        <Secondonef></Secondonef>
     
        <Subscribe></Subscribe>
        <Footer></Footer>

        
        </div>} />
       
         <Route path ="/Women" element ={<div>
          
          <Womenproduct/>
          <Secondonef></Secondonef>
          <Subscribe></Subscribe>
          <Footer></Footer>
          
          </div>}/>


          <Route path='polisy' element={<div>
            
            <Privacy/>
            <Secondonef></Secondonef>
            <Subscribe></Subscribe>
            <Footer></Footer>
            
            </div>}/>



            <Route path='Signin' element={<div>
            
              <Loginuser/>
      
              <Subscribe></Subscribe>
              <Footer></Footer>
              
              </div>}/>


              <Route path='Registration' element={<div>
            
                <Regiseteruser/>
             
                <Subscribe></Subscribe>
                <Footer></Footer>
                
                </div>}/>

      </Routes>
    </div>
  );
}

export default App;
