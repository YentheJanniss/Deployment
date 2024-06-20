import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { animate, motion, useAnimation } from "framer-motion";

const easIn = {
  initial: {
    x: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      easing: "easeInOut", // Specify the easing function here
      staggerChildren: 0.1,
    },
  },
};



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k6x0lis', 'template_fvsjgaq', form.current, '2soIq78fjchkr5vTx')
      .then((result) => {
          console.log(result.text);
          alert("Email is verzonden. Tot snel!");
      }, (error) => {
          console.log(error.text);
          alert("Email is niet verzonden. Controleer uw velden!");
      });
  };
  return (
    <section className="contact" id='contact'>
      <motion.div className="container align-items-center py-5 gy-5" variants={easIn} initial="initial" whileInView="animate">
        <h2>
          Contacteer <span>Mij.</span>
        </h2>
        <p>Ik hoor graag van u, tot snel!</p>
        <div className="row">
          <div className="col-md-4 mt-3">
            <div className="card left-card shadow">
              <div className="card-body">
                <h4 className="p-3">
                  Jannis<span>Designs.</span>
                </h4>
                <div className="bottom">
                  <h5>Contacteer Mij</h5>
                  <p>
                    Neem contact op bij interesse of als u overige vragen heeft!
                    Tot Snel!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="card shadow">
              <div className="card-body">
                <form ref={form} onSubmit={sendEmail} className="form-group py-3 px-1">
                  <div className="d-flex">
                    <div className="d-flex flex-column">
                      <label htmlFor="naam">
                        Naam<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="naam"
                        id="naam"
                        className="form-control w-100 pe-5"
                        required
                        placeholder="Yenthe Jannis"
                      />
                    </div>
                    <div className="d-flex flex-column ms-5">
                      <label htmlFor="Bedrijfsnaam">
                      Bedrijfsnaam<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="bedrijfsnaam"
                        id="bedrijfsnaam"
                        required
                        className="form-control w-100 pe-5"
                        placeholder="JannisDesigns."
                      />
                    </div>
                  </div>
                  <label htmlFor="email" className="mt-3">
                    Email-adres<span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="form-control w-100 pe-5"
                    placeholder="jannisdesigns.bedrijf@gmail.com"
                  />
                  <label htmlFor="phone" className="mt-3">
                    Telefoonnummer (Optioneel)
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control w-100 pe-5"
                    placeholder="+32 0492 10 63 35"
                  />
                  <label htmlFor="bericht" className="mt-3">
                    Bericht<span>*</span>
                  </label>

                  <textarea
                    name="bericht"
                    id="bericht"
                    cols="25"
                    rows="10"
                    required
                    placeholder="Beste, ..."
                    className="form-control"
                  ></textarea>
                  <motion.button variants={easIn} className="btn btn-primary mt-3 w-100 py-2">
                    Verzend Bericht
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
  };


export default Contact;
