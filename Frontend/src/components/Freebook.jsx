import React, { useEffect, useState } from 'react';
// import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function Freebook() {

    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async() => {
            try {
              // it will get the data from url response 
                const res = await axios.get("http://localhost:7000/book")
                // filter the free data
                const filteredData = res.data.filter((item) => item.category==="Free");
                setBook(filteredData)
            } catch (error) {
                console.log("Error Occured: ", error.message);
            }
        }
        getBook();
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    // console.log(freeBooks);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20'> 
                <div>
                    <h1 className='font-semibold text-xl pb-2' >Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, error! Unde voluptatibus, explicabo aliquid modi quos facilis sequi maiores omnis exercitationem? Eveniet consectetur dicta deserunt quasi ea eos? Minus, eligendi?</p>
                </div>
            
            <div>
                <Slider {...settings}>
                  {book.map((item) => (
                    <div key={item.id} className='px-2'>
                      <Cards item={item}/>
                    </div>
                  )             
                  )}
                </Slider>
            </div>
            </div>
        </>
    );
}
export default Freebook
