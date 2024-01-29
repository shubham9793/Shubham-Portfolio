import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Hospital Management System",
    img: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A Hospital Management System (HMS) is a comprehensive software solution designed to streamline and automate the various processes and operations within a healthcare facility. It serves as a centralized platform that integrates and manages the different aspects of hospital administration, including patient information, appointment scheduling, inventory management, and more.",
  },
  {
    id: 2,
    title: "Online Exam Potal",
    img: "https://images.pexels.com/photos/4126705/pexels-photo-4126705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "An Exam Portal Project is a software application designed to facilitate the administration, management, and conduct of examinations in an organized and efficient manner. The portal aims to streamline the entire examination process, from exam creation and registration to result processing",
  },
  {
    id: 3,
    title: "Myntra Clone",
    img: "https://play-lh.googleusercontent.com/wpnNPYIrdHC3Q_bcFXGpwoMvFvvvQnZJHmFKzumq5ZTRZKIzfxURAUGOMqhPhVxnggY=w600-h300-pc0xffffff-pd",
    desc: "A Myntra clone project involves developing an e-commerce platform that emulates the features and functionalities of Myntra, a popular online fashion and lifestyle marketplace.",
  },
  {
    id: 4,
    title: "Blog Application",
    img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Creating a blog application using React involves building a user interface to display blog posts, allowing users to create, edit, delete posts and comment on the post.,",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
