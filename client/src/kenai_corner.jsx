import { useState, useEffect } from 'react'
import './App.css'
import kenai_lay from './assets/kenai_lay.png'
import kenai_stand from './assets/kenai_stand.png'
import kenai_tongue_1 from './assets/kenai_tongue_1.png'
import kenai_tongue_2 from './assets/kenai_tongue_2.png'
import kenai_crouch from './assets/kenai_crouch.png'


function KenaiCorner() {
    const [open, setOpen] = useState(true);
    const [animate, setAnimate] = useState(true);

    const sittingClass = "pt-10 pl-4 pr-4";
    const [kenai, setKenai] = useState(0);

    const images = [
        {img: kenai_lay, alt: "kenai laying down", className: sittingClass},
        {img: kenai_tongue_1, alt: "kenai panting", className: sittingClass},
        {img: kenai_tongue_2, alt: "kenai panting", className: sittingClass},
        {img: kenai_stand, alt: "kenai standing", className: "pl-7 pr-7 pt-3"},
        {img: kenai_crouch, alt: "kenai crouching", className: "pl-3 pr-3 pt-6"},
    ]

    useEffect(() => {
        if(!animate || !open) return;
       const interval = setInterval(() => {
            setKenai((kenai % 2)+1)
       }, 1000);
       return () => clearInterval(interval);
    }, [images]);

    const handleOpenChange = () => {
        setOpen(!open);
    }


    return (
    <>
      {open&&<div className = "fixed bottom-0 right-0 w-60 h-60 bg-bgColor2 border-5 border-borderColor shadow-lg">
        <div className = "p-1 pl-2 flex justify-between border-b-1 border-borderColor">Kenai's Corner 
            <button className = "pr-2 pl-2 bg-bgColor rounded border-1" onClick = {handleOpenChange}> {open ? "Hide":"Show"}</button>
        </div>
        <div 
            onMouseEnter={() => {setAnimate(false); setKenai(3)}}
            onMouseLeave={() => {setAnimate(true); setKenai(0)}}
            onMouseDown={() => {setAnimate(false); setKenai(4)}}
            onMouseUp={() => { setKenai(3)}}>
            <img src = {images[kenai].img} alt = {images[kenai].alt} className = {images[kenai].className}></img>
        </div>
      </div>}
      {!open&&<div className = "fixed bottom-0 right-0 w-60 h-11 bg-bgColor2 border-5 border-borderColor shadow-lg">
        <div className = "p-1 pl-2 flex justify-between border-b-1 border-borderColor">Kenai's Corner 
            <button className = "pr-2 pl-2 bg-bgColor rounded border-1" onClick = {handleOpenChange}> {open ? "Hide":"Show"}</button>
        </div>
        </div>}

    </>)
}

export default KenaiCorner