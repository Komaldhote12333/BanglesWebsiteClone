import './recentitem.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DUMMY_EXPENCES from '../items/alljason';
import { Link } from 'react-router-dom';
const Recentitems = (props) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


  return (
    <div className="Recentsection">

      <div className="recerntname"><div className="r--name">{props.title}</div></div>

      <div className="scrools-r">
        <Carousel

          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          slidesToSlide={3}
          infinite={true}

          autoPlaySpeed={5}
          keyBoardControl={true}
          customTransition='1'
          transitionDuration={5}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['tablet', 'mobile']}

          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'

        >

          {
            DUMMY_EXPENCES.map(({id,src ,amount,amountold,rating,title}) => {
              return (
                <div  key={id}>  
                <Link to ={`/singleproduct/${id}`} style={{textDecoration:"none"}} >
                <div className="r-box">
                  <div className="-rimage">    <img src={src} alt="" /></div>
                  <div className="r-content">
                    <div class="price-box __web-inspector-hide-shortcut__">
                      <del class="old-product-price strong-400">Rs {amountold}</del>
                      <span class="product-price strong-600">Rs {amount}</span>
                    </div>
                    <div className="img-rating">⭐ ⭐ ⭐ ⭐ ⭐ </div>
                    <div className="img-name"> {title}</div>
                  </div>
                </div>
                </Link>
                
                
                </div>
              )
            })
          }

        </Carousel>


      </div>

    </div>
  );
}

export default Recentitems;