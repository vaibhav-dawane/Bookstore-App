import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Course() {

    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async() => {
            try {
                const res = await axios.get("http://localhost:7000/book")
                console.log(res.data);
                setBook(res.data)
            } catch (error) {
                console.log("Error Occured: ", error.message);
            }
        }
        getBook();
    }, [])

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        We're Delighted to have you <span className='text-pink-500'>here! :)</span>
                    </h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsa ut animi accusamus praesentium voluptatibus possimus modi harum quas quasi corporis quibusdam rerum tempore mollitia, recusandae sequi saepe quis in ipsam cumque unde. Quas, dolores ullam. Ipsum sapiente perferendis est velit! Impedit consequatur fuga voluptatem natus libero, ullam possimus maxime.</p>
                    <Link to='/'> 
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 mt-6'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        book.map((item) => (
                            <Cards item={item} key={item.id}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
export default Course
