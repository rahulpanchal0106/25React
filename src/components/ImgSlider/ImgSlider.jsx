import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import { useState } from "react";
function ImgSlider({url, limit}){
    
    const [imgData,setData] = useState(null);
    const [page,setPage] = useState(2);
    const [index,setIndex] = useState(0);

    async function fetchImg(){
       const res=await fetch(`${url}?page=${page}&limit=${limit}`);
       const data=await res.json();
       setData(data);
    }
    useEffect(() => {
        if (url !== "") fetchImg(url);
      }, [url]);
    function handleRight(){
        index==(imgData.length-1)? setIndex(0) : setIndex(index+1);
    }
    function handleLeft(){
        index==0? setIndex(imgData.length-1) : setIndex(index-1);
    }
    function handlePageUp(page){
        setPage(++page)
        fetchImg()
    }
    function handlePageDown(page){
        
        setPage(--page)
        fetchImg()
    }
    return(
        <>
            <div className="flex flex-row justify-evenly items-center">
                <div className="text-4xl font-thin ">Image Slider</div>
                <div>
                    Page:
                    <button onClick={()=>handlePageUp(page)} >
                        ⬆️
                    </button>
                    <button onClick={()=>handlePageDown(page)}>
                        ⬇️
                    </button>
                </div>
            </div>
            <div className=" min-w-64 scale-40 flex flex-col justify-center items-center w-full" >
                
                {
                    
                    
                    <div className="min-w-64 rounded-xl flex flex-row justify-between items-center h-80 w-192 p-3">
                        <button onClick={()=>handleLeft()}>
                            <BsArrowLeftCircleFill size={50} className=" transition duration-1 mr-5 hover:drop-shadow-2xl hover:translate-x-[-10px]"/>
                        </button>
                        <div className="h-full flex flex-col items-center justify-center">
                            {
                                imgData?
                                <>
                                    
                                    <img className="drop-shadow-2xl rounded-xl h-full w-96" src={imgData[index].download_url} />

                                    <div className="drop-shadow-xl absolute text-white backdrop-brightness-10 transition duration-3 ease-in-out hover:backdrop-blur-0 bg-blend-difference backdrop-blur p-3 rounded-xl shadow-2xl  " >
                                        By
                                        <a className="p-2 underline" href={imgData[index].url} >
                                            {imgData[index].author}
                                        </a>
                                    </div>
                                    
                                    
                                    
                                </>
                                :<div className="text-yellow-700">
                                    Loading...
                                </div>
                            }

                        </div>
                        <button onClick={()=>handleRight()}>
                            <BsArrowRightCircleFill size={50} className="ml-5 hover:drop-shadow-2xl hover:translate-x-[10px] transition duration-1" />
                        </button>
                    </div>
                    
                }
                <div className="flex flex-row p-3">
                    {imgData&&imgData.map((_,i)=>{
                        return(
                            <>
                                {
                                    index==i?<div className="w-4 h-4 mr-1 rounded-full bg-black" onClick={()=>setIndex(i)} key={i}></div>:
                                    <div className="w-4 h-4 mr-1 rounded-full bg-gray-400" onClick={()=>setIndex(i)} key={i}></div>
                                }
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ImgSlider;