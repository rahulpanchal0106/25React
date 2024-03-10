import {useState} from 'react';
import { FaStar } from "react-icons/fa";

function Rating({noOstars}){

    const [rating, setRating] = useState(null);
    const [hover,setHover] = useState(null);
    // const [, setRating] = useState(0);


    function handleClick(index){
        console.log(index);
        setRating(index);
    }
    function handleMouseMove(index){
        console.log("************")
        setHover(index);
    }
    function handleMouseLeave(){
        setHover(rating);
    }

    return (
        <>
            <div>
                {rating<5?`Star rating: ${rating}`:`Eat 5 star, Do nothing.`}
            </div>
            <div className='flex flex-column justify-center'>
                {
                    [...Array(noOstars)].map((_,index)=>{
                        index+=1;
                        return (
                            <>
                                {
                                   <FaStar 
                                        key={index} 
                                        className={index<=(hover||rating) ? "text-yellow-300 text-6xl " : "text-gray-200 text-6xl"}  //The order of "hover || rating" MATTERS 
                                        onClick={()=>handleClick(index)}
                                        onMouseMove={()=>handleMouseMove(index)}
                                        onMouseLeave={()=>handleMouseLeave()}
                                    />
                                   
                                }
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Rating;