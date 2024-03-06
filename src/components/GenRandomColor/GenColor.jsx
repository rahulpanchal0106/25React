import { useState } from "react";

function GenColor(){
    const [color,setColor] = useState("#101010");
    const [transparencyEnabled,setTransperancy] = useState(false);
    function generateHex(){
        
        var colorString="#";
        const arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

        if(transparencyEnabled){
            for(let i=1; i<=8; i++){
                let index=Math.floor(Math.random()*15);
                colorString+=arr[index]
            }
        }else{
            for(let i=1; i<=6; i++){
                let index=Math.floor(Math.random()*15);
                colorString+=arr[index]
            }
        }

        setColor(colorString);
    }
    function generateRGB(){
        const r=Math.floor(Math.random()*255);
        const g=Math.floor(Math.random()*255);
        const b=Math.floor(Math.random()*255);
        const o=parseFloat(Math.random()).toFixed(1);
        let colorString;
        transparencyEnabled?
        colorString = `rgb(${r},${g},${b},${o})`:
        colorString = `rgb(${r},${g},${b})`
        setColor(colorString);
    }
    const div = document.querySelector("#window")
    if(div)div.style.backgroundColor=color
    return(
        <>
            <div className="bg-black text-white rounded-t-xl h-20 flex justify-evenly items-center flex-auto">
                <div className="text-3xl">Random Color Generator</div>
                <div className="transition duration-300 ease-in-out rounded-xl p-1 flex justify-evenly w-1/2 ">
                    <button onClick={()=>generateHex()} className="transition duration-300 ease-in-out border-2 border-white p-3 hover:bg-white hover:text-black active:border-black rounded-full">GenerateHex</button>
                    <button onClick={()=>generateRGB()} className="transition duration-300 ease-in-out border-2 border-white p-3 hover:bg-white hover:text-black active:border-black rounded-full">GenerateRGB</button>
                    <button onClick={()=>setTransperancy(!transparencyEnabled)}>
                        {
                            transparencyEnabled?"✅":"🟩"
                        }Transparency</button>
                </div>
            </div>
            <div id="window" className="h-80 rounded-b-xl flex justify-center items-center bg-gray-400">
                <div className="border-4 border-white bg-black text-white rounded-full p-5 shadow-2xl">
                    {color}
                </div>
            </div>
        </>
    )
}

export default GenColor;