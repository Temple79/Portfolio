
import { useState, useEffect, useRef } from "react";


export default function MagneticWrapper({children}) {
    const [mouseX,setMouseX] = useState(0);
    const [mouseY,setMouseY] = useState(0);
    
    const divRef = useRef(null);


    useEffect(()=>{
        const handleMouseMove = (e) => {
            const {clientX, clientY} = e
            const {left, top, width, height} = (divRef.current).getBoundingClientRect()

            setMouseX(clientX - (left + width / 2))
            setMouseY(clientY - (top + height / 2))
        }

        const handleMouseLeave = () => {
            setMouseX(0)
            setMouseY(0)
        }

        const wrapperElement = divRef.current
        if (wrapperElement) {
            wrapperElement.addEventListener('mousemove', handleMouseMove)
            wrapperElement.addEventListener('mouseleave', handleMouseLeave)
        }

        return  () => {
            if (wrapperElement) {
                wrapperElement.removeEventListener('mousemove', handleMouseMove)
                wrapperElement.removeEventListener('mouseleave', handleMouseLeave)

            }
        }

    }, [])
    return(
        <div 
            ref={divRef}
            style={{

                width: 'fit-content',
                display: 'flex',
                position:'relative',
                transform: `translate(${mouseX}px, ${mouseY}px)`,
                transition: 'transform 0.3s ease-out',
            }}
        >
            {children}
        </div>
    )
} 