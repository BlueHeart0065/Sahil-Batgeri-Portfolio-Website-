import {motion} from "framer-motion";
import "./Hero.scss"
import PopUp from "../pop-up/PopUp";
import { useState } from "react";


const textVariants = {
  initial : {
    x : -500,
    opacity: 0
  },
  animate: {
    x : 0,
    opacity : 1,
    transition : {
      duration : 1,
      staggerChildren : 0.1
    }
  },
  scrollButton : {
    opacity : 0,
    y : 10,
    transition : {
      duration : 2,
      repeat : Infinity
    }
  }
};
const sliderVariants = {
  initial : {
    x : -0,
  },
  animate: {
    x : "-220%",
    transition : {
      repeat:Infinity,
      repeatType: "mirror",
      duration : 20
    }
  },
};

const Hero = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const handleLinkClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleConfirmDownload = () => {
    setModalOpen(false);
    window.location.href = 'Sahil Resume 1.pdf';
  };


  return (
    <div className='hero'>
      <div className="wrapper">

        <motion.div className="textContainer" variants = {textVariants} initial = "initial" animate = "animate">
          <motion.h2  variants = {textVariants}>SAHIL BATGERI</motion.h2>
          <motion.h1  variants = {textVariants}>Web Developer and UI Designer</motion.h1>
          <motion.div className="buttons"  variants = {textVariants}>
            <motion.button  variants = {textVariants}> <a href="">See the Latest Works</a> </motion.button>
            <motion.button  variants = {textVariants} onClick={handleLinkClick} >Get Resume</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt=""  variants = {textVariants} animate = "scrollButton"/>
        </motion.div>
        <motion.div className="slidingTextContainer" variants = {sliderVariants} initial = "initial" animate = "animate">
          Computer Engineer Web Developer UI/UX Designer 
        </motion.div>
        <div className="imageContainer">
            <img src="sahil.png" alt="" />
        </div>
      </div>
      <PopUp isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmDownload} />
    </div>
  )
}

export default Hero