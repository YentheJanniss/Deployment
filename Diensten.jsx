import React from "react";

import { animate, motion, useAnimation } from "framer-motion";

const leftSide = {
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

function Diensten() {
  return (
    <section className="diensten" id="diensten">
      <motion.div className="container py-5" variants={leftSide} whileInView="animate" initial="initial">
        <div className="row mt-5">
          <motion.div className="col-md-6" variants={leftSide}>
            <h3 className="mt-3">
              Welke <span>Diensten</span>
              <br />
              Ik Aanbied
            </h3>
          </motion.div>
          <div className="col-md-6 text-end">
            <p className="mt-3">
              Ontdek op maat gemaakt webdesign dat de kracht van uw online
              aanwezigheid vergroot. Van strakke ontwerpen tot intuïtieve
              gebruikerservaringen.
            </p>
            <a href="#contact" className="btn shadow btn-outline-primary">
              Contact
            </a>
          </div>
        </div>
        <motion.div variants={leftSide} class="accordion mt-5" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Responsief Webdesign
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Maak indruk met websites die niet alleen visueel aantrekkelijk
                  zijn, maar ook soepel functioneren op elk apparaat. Dankzij
                  responsief webdesign past jouw site zich aan aan verschillende
                  schermformaten, waardoor gebruikers een consistente en
                  aangename ervaring hebben, ongeacht of ze op een desktop,
                  tablet of smartphone surfen.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Gebruiksvriendelijk Ontwerp (UI/UX)
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Streep door verwarring en omarm intuïtief ontwerp. Met sterke
                  UI/UX leg je de nadruk op een vlotte navigatie en een
                  plezierige gebruikerservaring. Elk aspect van de website is
                  doordacht, waardoor niet alleen tevredenheid, maar ook
                  conversies en retentie worden verhoogd.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Branding
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Breng merkidentiteit tot leven met aangepaste ontwerpen en
                  consistente visuele elementen. Het doel is niet alleen een
                  visueel aantrekkelijke website te bouwen, maar ook de unieke
                  waarden en identiteit van elk bedrijf te weerspiegelen,
                  waardoor ze opvallen in de online wereld.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Grafisch Design
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Ik voorzie indien nodig u bedrijf van een sterke visuele
                  identiteit. Dit omvat het ontwerpen van logo's,
                  productafbeeldingen en kleurpalletten voor een consistente
                  uitstraling. Daarnaast creëer ik aantrekkelijk
                  marketingmateriaal, en lever ik grafische elementen voor
                  online toepassingen, waaronder sociale media. Mijn doel is om
                  uw boodschap op een visueel aantrekkelijke en effectieve
                  manier te communiceren.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                SEO Optimalisatie
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Als SEO-specialist optimaliseer ik uw online zichtbaarheid
                  door middel van strategische zoekwoordanalyse. Ik verbeter
                  on-page elementen zoals titels en meta-beschrijvingen,
                  waardoor uw website beter presteert in zoekresultaten. Mijn
                  focus ligt op het vergroten van de relevantie en vindbaarheid
                  van uw bedrijf online, wat resulteert in een verbeterde
                  positie op zoekmachines en meer zichtbaarheid voor uw
                  doelgroep.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Diensten;
