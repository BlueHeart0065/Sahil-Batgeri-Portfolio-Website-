import "./Services.scss";
import {motion,useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial : {
        x : -500,
        y:100,
        opacity : 0
    },
    animate: {
        x : 0,
        opacity : 1,
        y : 0,
        transition : {
            duration : 1,
            staggerChildren: 0.1
        }
    }
};

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div className="services" variants = {variants} initial = "initial" whileInView="animate">
        <motion.div className="textContainer" variants = {variants}>
            <p>
                I focus on helping your brand grow <br />
                and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants = {variants} >
            <div className="title">
                <img src="people.webp" alt="" />
                <h1><b>Unique</b> Solutions</h1>
            </div>
            <div className="title">
                <h1><b>For Your</b> Business.</h1>
                <button>WHAT I DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants = {variants}>
            <motion.div className="box" whileHover={{background : "lightgray", color : "black" }}>
                <h2>Learn</h2>
                <p>
                    I start by immersing myself in learning the fundamentals and latest advancements in web development. Whether through online courses, tutorials, or collaborating with peers, I constantly seek to expand my knowledge. This phase is crucial for me as it lays the groundwork for everything I build, ensuring I have a strong understanding of the tools and technologies I use.
                </p>
                
            </motion.div>
            <motion.div className="box" whileHover={{background : "lightgray", color : "black" }}>
                <h2>Build</h2>
                <p>
                    Once I've grasped the necessary concepts, I move on to the building stage. Here, I transform ideas and requirements into tangible web applications. I enjoy the creative process of writing code, designing user interfaces, and implementing functionalities. This phase is where my knowledge meets action, allowing me to bring projects to life.
                </p>
                
            </motion.div>
            <motion.div className="box" whileHover={{background : "lightgray", color : "black" }}>
                <h2>Test</h2>
                <p>
                    After building, I thoroughly test my work to ensure it functions flawlessly. I conduct various tests, from unit tests to user acceptance tests, to identify and fix any issues. This meticulous testing process is vital for me to deliver high-quality, reliable web applications that meet user expectations.
                </p>
                
            </motion.div>
            <motion.div className="box" whileHover={{background : "lightgray", color : "black" }}>
                <h2>Improve</h2>
                <p>
                    Finally, I focus on improving and refining the product. Based on feedback and test results, I make necessary adjustments and optimizations. This continuous improvement cycle helps me enhance the usability, functionality, and performance of my projects, ensuring they not only meet but exceed expectations.
                </p>
                
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services