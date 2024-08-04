import "./Sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./Links/Links";
import {motion} from "framer-motion";
import { useState } from "react";

const variants = {
    open:{
        clipPath : "circle(63.1vw at 2.6vw 2.6vw)",
        transition : {
            type : 'spring',
            stiffness : 20,
        },
    } ,
    closed : {
        clipPath: "circle(1.6vw at 2.6vw 2.6vw)",
        transition : {
            delay : 0.5,
            type : 'spring',
            stiffness: 400,
            damping : 40
        },
    },
    };
    
const Sidebar = () => {
    const [open, setOpen] = useState(false)

    return(
        <motion.div className="sidebar" animate = {open ? "open" : "closed"} >
            <motion.div className="bg" variants = {variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen = {setOpen}/>
        </motion.div>
    )
}

export default Sidebar