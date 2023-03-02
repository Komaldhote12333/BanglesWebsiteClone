export const initialState ={
  basket: [],
  wishlist:[],
  compair:[],
  authchack : false,

}

const reducer = (state , action) => {
 switch (action.type) {
    case 'addtobasket':
       return{
        ...state,
        basket : [...state.basket , action.item],
        
       }

    case 'addtowishlist':
      return{

        ...state,
        wishlist : [...state.wishlist , action.item]
      
      } 


      case 'addtobasetsket':
      return{

        ...state,
        authchack : true,
        
      
      } 
      case 'setfalse':
      return{

        ...state,
        authchack : false,
        
      
      } 
      case "Removeitem":
            const index = state.basket.findIndex(

                (basketitem) => {
                   return (
                    basketitem.id === action.id
                    
                   )
                   
                }
            )
    console.log('index',index) 

            const newbasket = [...state.basket];

                if(index<= 0){
                    newbasket.splice(index, 1);
                }
                
                return{
                    ...state,
                    basket : newbasket,
                }
     
    
        
        
 
 }

}

export default reducer;