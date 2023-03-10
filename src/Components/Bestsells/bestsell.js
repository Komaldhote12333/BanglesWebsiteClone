import './bestsell.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BestProd from './bestprod';
import Recentjason from '../items/recentjason';

const BestSell = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className="bestsell">
            <div className="bestsellname">Best Sells </div>
            <div className="bestsellcrousel">


                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}

                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", ""]}

                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                 { Recentjason.map(({src ,id}) => {
                    
                    return(
                        <BestProd key={id} src ={src} id = {id}></BestProd>
                    );
                 })}   
                  









                 





                    





                   



                   






                   






                </Carousel>





            </div >






        </div >
    );
}

export default BestSell;