import { useEffect, useState } from "react";

function LoadMore(){
    const [jsonData,setJsonData] = useState(null);
    const [currData,setCurrData] = useState(null);
    const [count,setCount] = useState(40);
    async function fetchData(url){
        const res=await fetch(url);
        const urlData=await res.json();
        
        console.log(urlData);
        setJsonData(urlData);
        const tempCurrData= urlData;
        const tempData=tempCurrData.products.filter((_,i)=>i<20);
        setCurrData([...tempData])
    }

    window.onload=()=>fetchData(`https://dummyjson.com/products?limit=100&skip`);
    function handleCurrData(){
        setCount(c=>c+20)
        const nextData=jsonData.products.filter((_,i)=>i<count);
        const data=[...nextData];
        setCurrData(data);
        console.log(count);
    }
    function handleNo(event){
        event.target.innerHTML="No More DATA!"
    }
    return(
        <>
            <div className="bg-black text-white p-4 rounded-2xl mb-3 text-5xl">
                Load more button
            </div>
            <div className="rounded-2xl bg-gray-400 w-160 h-96 flex flex-col justify-center items-center p-4">
                <div className="grid grid-cols-4 gap-4 overflow-scroll p-4 " >
                    {
                        currData?
                        currData.map((obj,i)=>{
                            return(
                                <>
                                    
                                    <div key={i} className="bg-gray-900 relative flex flex-col justify-top text-white rounded-2xl w-40 p-3 h-60"   >

                                        <img src={obj.images[0]} className=" object-cover h-96 max-h-48 rounded-2xl w-full" />

                                        <div className="flex  bg-orange-500 hover:bg-transparent absolute hover:backdrop-blur-3xl flex-col justify-center justify-center items-top rounded-2xl bottom-0 flex-row text-sm justify-evenly p-2 h-4 overflow-hidden transition-all text-black hover:text-white duration-300 hover:h-full">
                                            <div className="flex flex-row">
                                                <div className="mr-1">
                                                    {obj.id}
                                                </div>
                                                <div className="ml-1">
                                                    {obj.title}
                                                    
                                                </div>
                                            </div>
                                            <p className="text-xs p-2 bg-black rounded-2xl break-all">
                                                    {obj.description}
                                            </p>
                                        </div>
                                    </div>

                                </>
                            )
                        }):
                        <div >
                           Loading data...
                        </div>
                        
                    }
                    <div className="w-full text-white bg-black p-2 rounded-2xl flex flex-col justify-center iterms-center h-10 self-center">
                        
                        {
                            count>=120
                            ?<button className="bg-gray-100 transition duration-300 text-black rounded-2xl active:text-red-700 hover:bg-orange-500" onClick={(e)=>handleNo(e)} >No more</button>
                            :<button onClick={()=>handleCurrData()} >Load more</button>
                        }
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default LoadMore;