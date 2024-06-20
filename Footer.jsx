import React from "react";
import { motion, useAnimation } from "framer-motion";

const bottomTop = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    },
  },

}

function Footer() {
  return (
    <footer>
      <motion.div className="container py-5 gy-5 align-items-center" variants={bottomTop} whileInView="animate" initial="initial">
        <div className="row">
          <div className="col-md-3 mt-3">
            <h3>
              Jannis<span>Designs.</span>
            </h3>
            <p>
              Ik creëer professionele websites die uw digitale identiteit
              versterken & uw online aanwezigheid naar een hoger niveau te
              tillen.
            </p>
          </div>
          <div className="col-md-3 mt-3">
            <h2>
              Samen voor een betere <br /> <span>digitale identiteit.</span>
            </h2>
          </div>
          <div className="col-md-6">
          <div className="row mt-3">
              <div className="flex-column col-md-4">
                <h5>Start Conversatie</h5>
                <ul>
                  <li className="mt-2">
                    <a href="mailto:jannisdesigns.bedrijf@gmail.com">
                    Email
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="tel:0492106335">+0492106335</a>
                  </li>
                </ul>
              </div>
              <div className="flex-column col-md-4 ">
                <h5>Portfolio</h5>
                <ul>
                  <li className="mt-2">
                    <a href="https://tboske.be/" target="_blank">‘t Boske</a>
                  </li>
                  <li className="mt-2">
                    <a href="https://goedemiddag.vercel.app/" target="_blank">Goedemiddag</a>
                  </li>
                  <li className="mt-2">
                    <a href="https://koffie-expertise.vercel.app/" target="_blank">KoffieExpertise</a>
                  </li>
                </ul>
              </div>
              <div className="flex-column col-md-4 ">
                <div className="d-flex">
                  <a href="https://www.instagram.com/" target="_blank">
                    <i class="fa-brands fa-instagram mx-2"></i>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    {" "}
                    <i class="fa-brands fa-facebook mx-2"></i>
                  </a>
                  <a href="https://nl.linkedin.com/" target="_blank">
                    <i class="fa-brands fa-linkedin mx-2"></i>
                  </a>
                </div>
                <ul>
                  <li className="mt-2">
                    <a href="https://www.termsfeed.com/live/4575ef55-b156-4e4b-894c-7ed52e15f321" target="_blank">Algemene voorwaarden</a>
                  </li>
                  <li className="mt-2">
                    <a href="https://www.termsfeed.com/live/0709cd94-b83d-42db-afd9-85875a78f777" target="_blank">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
