import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -350,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    },
  },

}




function Hero() {
  return (
    <div className="">
    <section id="hero">
      <div className="container py-5 gy-5">
        <div className="row align-items-center py-5 gy-5">
          <div className="col-md-6 mb-auto ">
            <motion.div className="" variants={textVariants} initial="initial" whileInView="animate">
              <motion.h1 variants={textVariants}>
                Ik ben Yenthe Jannis,
                <br />
                <span>Webdesigner</span>
              </motion.h1>
              <motion.p variants={textVariants} className="mt-2">
                Ik creëer professionele websites die uw digitale identiteit
                versterken <br />& uw online aanwezigheid naar een hoger niveau
                te tillen.
              </motion.p>
              <motion.div className="d-flex mt-4 mb-5" variants={textVariants}>
                <a href="#contact" className="btn btn-primary shadow px-5 py-2">
                  Contact
                </a>
                <a 
                  href="#portfolio"
                  className="btn btn-outline-primary shadow px-5 py-2 ms-3"
                >
                  Portfolio
                </a>
              </motion.div>
              <motion.div className="socials" variants={textVariants}>
                <a href="https://www.facebook.com/" target="_blank" className="btn btn-primary me-2">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://nl.linkedin.com/" target="_blank" className="btn btn-primary mx-2">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="btn btn-primary mx-2" >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <div className="d-flex mt-3">
                  <a href="#contact" className="meer-info" >
                    Meer info <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Hero;
