import { useRef } from "react";
import "./Portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {
        id : 1,
        title : "YelpCamp Website",
        img : "yelpcamp.png",
        desc : "YelpCamp is a comprehensive website dedicated to helping users find and share great campsites from all around the world. Whether you are a seasoned camper or just getting started, YelpCamp provides a user-friendly platform to explore, create, and review campsites globally.",
        src : "https://github.com/BlueHeart0065/YelpCamp"
    },
    {
        id : 2,
        title : "TEDx PVGCOET Website",
        img : "tedx.png",
        desc : "A dynamic website for the official TEDxPVGCOET club of our college, featuring an interactive event panel, team showcase, organizational information and thematic elements",
        src : "https://tedxpvgcoet.com/"
    },
    {
        id : 3,
        title : "E-Commerce Website UI",
        img : "ecommerce.png",
        desc : "An E-Commerce website with fully responsive UI and attractive elements.",
        src : "https://blueheart0065.github.io/E-commerce-website/"

    },
    {
        id : 4,
        title : "UI UX Projects",
        img : "uiux.png",
        desc : "This google drive folder consists of all my UI-UX projects on mobile and PC website screens implemented using design principles.",
        src : "https://drive.google.com/drive/folders/1Vss6tjj3LHXOIcJY5lE6gtpRKTNzRa2E?usp=drive_link"
    }
]


const Single = ({item}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target : ref})
    const y = useTransform(scrollYProgress, [0,1], [-300, 300])
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src = {item.img} alt=""  ref={ref}/>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.src}>See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target : ref, offset : ["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping : 30
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style= {{scaleX: scaleX}}>

            </motion.div>
        </div>
        {
            items.map(item => (<Single item = {item} key = {item.id}/>))
        }
    </div>
  )
}

export default Portfolio