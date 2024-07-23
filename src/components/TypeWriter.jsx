import React,{useState,useEffect} from 'react';
export default function TypeWriter({texts,speed,delayBetweenTexts}){
    const [displayedText,setDisplayedText]=useState('');
    const[index,setIndex]=useState(0);
    const[textIndex,setTextIndex]=useState(0);
    useEffect(()=>{
        if(textIndex < texts.length){
            if(index < texts[textIndex].length){
                //If current text is not fully displayed,type next character
                const timeout=setTimeout(()=>{
                    setDisplayedText((prev)=>prev+texts[textIndex][index]);
                    setIndex((prev)=>prev+1);
                },speed); //delay
                return ()=>clearTimeout(timeout);
            }
            else{
                //If current text is fully displayed, increase the text index, steindex to 0,initialize displayedtext
                const timeout=setTimeout(()=>{
                    setDisplayedText('');
                    setIndex(0);
                    setTextIndex((prev)=>(prev+1)%texts.length);
                },delayBetweenTexts);
                return()=>clearTimeout(timeout);
            }
        }
    },[index,textIndex,texts,speed,delayBetweenTexts]);
    return(
        <div className="info-style">{displayedText}</div>
    );
}