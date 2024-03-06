import React from 'react'
import './style.css'
import { useState } from 'react';
import data from './data'
function Accordion(){
    const [arr,setArr]=useState([]);
    function handleAccordion(q){
        // const btn=event.target;
        // const div=event.target.parentElement.nextSibling;
        
        // if(btn.innerHTML=="+"){
        //     div.style.display="flex";
        //     div.style.height="auto";
        //     btn.innerHTML="-";
        // }else{
        //     div.style.display="none";
        //     div.style.height="0px";
        //     btn.innerHTML="+";
        // }
        // console.log(div);
        const cpArr=[...arr];
        const index=cpArr.indexOf(q);
        index!=-1 ? cpArr.splice(index,1) : cpArr.push(q);
        setArr(cpArr)
    }
    
    const [selected,setSelected] = useState();
    function handleSelection(q){
        q===selected
        ?setSelected(null)
        :setSelected(q);
    }
    const [multiEnabled,setMulti]=useState(0);
    console.log(multiEnabled);
    return(
        <React.Fragment>
            <div className='bg-gray-200 flex flex-row justify-evenly items-center rounded-xl text-black text-xl p-8 mb-5 transition duration 300'>
                <p className='text-6xl'>Accordion</p>
                <button onClick={()=>setMulti(!multiEnabled)}>
                    Multiple selection {multiEnabled ? "☑️":"🟪"}
                </button>
            </div>
            {
                data.map((q,index)=>{
                    return(
                        <div key={index} id="accordion" className='mb-5' >
                            <div onClick={
                                data &&!multiEnabled
                                ? ()=>handleSelection(q.id)
                                : ()=>handleAccordion(q.id)
                            } className='bg-black text-white rounded-xl p-5 m-0 flex flex-row justify-between'>
                                <p >{q.id}</p>
                                <div>{q.question}</div>
                                <button onClick={
                                    !multiEnabled
                                    ? ()=>handleSelection(q.id)
                                    : ()=>handleAccordion(q.id)
                                } className='bg-black text-white rounded-full flex justify-center align-center w-8 h-8 border-2 border-white transition duration-300 ease-in-out hover:text-black hover:bg-white '>
                                    {   
                                        multiEnabled
                                        ? arr.indexOf(q.id)!==-1 ? "-" : "+"
                                        :selected==q.id ? "-": "+"

                                    }
                                </button>
                            </div>
                            {
                                data&&multiEnabled
                                ?arr.indexOf(q.id)!=-1
                                    ?<div className="bg-gray-700 p-5 pt-0 text-left mb-3 mt-0 text-white border-2 border-white rounded-xl transition duration-300 ease-in-out ">{q.answer}</div>
                                    :null
                                :selected===q.id
                                    ?<div className="bg-gray-700 p-5 text-left mb-3 text-white border-2 border-white rounded-xl transition duration-300 ease-in-out ">{q.answer}</div>
                                    :null   
                            }
                            
                        </div>
                    )
                })
            }       

        </React.Fragment>
    )
}

export default Accordion;