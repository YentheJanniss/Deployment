import React, { useEffect, useRef } from "react";
import tboske from "../assets/tboske.png";
import KoffieExpertise from "../assets/koffieexpertise.png";
import goedemiddag from "../assets/goedemiddag.png";
import { motion, useAnimation } from "framer-motion";

const bottomTop = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Portfolio() {
  return (
    <div className="">
      <section className="Portfolio" id="portfolio">
        <motion.div
          className="container align-items-center pb-5"
          variants={bottomTop}
          whileInView="animate"
          initial="initial"
        >
          <div className="row align-items-center pt-5 gt-5">
            <div className="col-md-6 me-auto">
              <h2>Portfolio</h2>
              <h3>Meest Recente Projecten...</h3>
            </div>
          </div>
          <div className="projecten">
            <div className="row mt-3">
              <div className="col-md-6 mt-3">
                <a href="https://tboske.be/" target="_blank">
                  <img
                    src={tboske}
                    width="500"
                    height="450"
                    className="img-fluid"
                    alt="Project 't Boske"
                  />
                </a>
              </div>
              <div className="col-md-6 mt-3 text-end d-flex flex-column justify-content-center">
                <h2>
                  't Boske | <span>Frituur</span>
                </h2>
                <p className="mt-4">
                  Voor mijn project Frituur 't Boske heb ik een professionele
                  website ontwikkeld. Op de website kunnen klanten
                  gedetailleerde informatie vinden over ons assortiment, prijzen
                  en contactgegevens. Met een gebruiksvriendelijk ontwerp kunnen
                  gebruikers eenvoudig de benodigde informatie vinden.
                </p>
                <a
                  href="https://tboske.be/"
                  target="_blank"
                  className="btn shadow btn-primary px-4 mt-5  ms-auto"
                >
                  Bekijk Project
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="Portfolio light">
        <motion.div
          className="container pb-5"
          variants={bottomTop}
          whileInView="animate"
          initial="initial"
        >
          <div className="projecten">
            <div className="row mt-5 koffieexpertise">
              <div className="col-md-6 mt-3 text-start d-flex flex-column justify-content-center">
                <h2>
                  Goedemiddag | <span>Besteldienst</span>
                </h2>
                <p className="mt-4">
                  Voor het project Goedemiddag, een bedrijf dat eten verkoopt op
                  scholen en bedrijven, heb ik een informatieve website
                  ontwikkeld.
                  <br />
                  <br />
                  De website biedt klanten gedetailleerde informatie over het
                  assortiment, prijzen en contactgegevens. Met een
                  gebruiksvriendelijk ontwerp kunnen gebruikers eenvoudig de
                  benodigde informatie vinden..
                </p>
                <a
                  href="https://goedemiddag.vercel.app/"
                  target="_blank"
                  className="btn shadow btn-primary px-4 mt-5 me-auto"
                >
                  Bekijk Project
                </a>
              </div>
              <div className="col-md-6 mt-3">
                <a href="https://goedemiddag.vercel.app/" target="_blank">
                  <img
                    src={goedemiddag}
                    width="732"
                    height="450"
                    className="img-fluid"
                    alt="Project Goedemiddag"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="Portfolio">
        <motion.div
          className="container py-5"
          variants={bottomTop}
          whileInView="animate"
          initial="initial"
        >
          <div className="projecten">
            <div className="row">
              <div className="col-md-6 mt-3">
                <a href="https://koffie-expertise.vercel.app/" target="_blank">
                  <img
                    src={KoffieExpertise}
                    width="557"
                    height="450"
                    className="img-fluid"
                    alt="Project KoffieExpertise"
                  />
                </a>
              </div>
              <div className="col-md-6 mt-3 text-end d-flex flex-column justify-content-center">
                <h2>
                  KoffieExpertise | <span>Koffiezaak</span>
                </h2>
                <p className="mt-4">
                  Als eigen project heb ik KoffieExpertise, een fictieve
                  koffiezaak, een op maat gemaakte website gegeven. Door de
                  focus te leggen op de merkidentiteit van de zaak.
                  <br />
                  <br />
                  Heb ik een aantrekkelijke en gebruiksvriendelijke website
                  ontwikkeld. Hier kunnen klanten informatie vinden over het
                  assortiment, openingstijden en contactgegevens.
                </p>
                <a
                  href="https://koffie-expertise.vercel.app/"
                  target="_blank"
                  className="btn shadow btn-primary px-4 mt-5  ms-auto"
                >
                  Bekijk Project
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Portfolio;
