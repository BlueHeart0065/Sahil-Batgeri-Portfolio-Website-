import { useRef } from "react";
import "./Parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion";
const Parallax = ({type}) => {

  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
  return (
    <div className="parallax" style={{background : type === "Services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)"}} ref={ref}>
        <motion.h1 style={{y : yText}}>{type === "Services" ? "What I Do?" : "What I Did?"}</motion.h1>
        <motion.div className="mountains" ></motion.div>
        <motion.div className="planets" style={{y : yBg, backgroundImage : `url(${type === "Services" ? "/planets.png" : "/sun.png" })`}} ></motion.div>
        <motion.div className="stars" style={{x : yBg}}></motion.div>
    </div>
  )
}

export default Parallax