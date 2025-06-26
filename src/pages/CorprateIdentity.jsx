import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import logo from "../assets/logo.png";

const CorprateIdentity = () => {
  return (
    <div>
      <Navbar />
      <div className="v-main__wrap">
        <div className="brand-guideline">
          <div className="brand-guideline__header">
            <div className="brand-guideline__header__bg"></div>
            <div className="brand-guideline__header__bg_2"></div>
            <h1 className="brand-guideline__header__title">
              Corporate Identity
            </h1>
            <p className="brand-guideline__header__subtitle">
              On this page, we present guidelines for using brand materials. It
              is important for us to maintain the integrity of the product
              perception
            </p>
          </div>
          <div className="container brand-guideline__container">
            <div className="brand-guideline__container__items">
              <div className="brand-guideline__container__items__item">
                <div className="brand-guideline__container__items__item__icon">
                  <img
                    src={logo}
                    style={{ width: "35px", height: "35px" }}
                    alt="Logo"
                  />
                </div>
                <div className="brand-guideline__container__items__item__title">
                  Logo
                </div>
                <div className="brand-guideline__container__items__item__text">
                  Logos are available in PNG and SVG formats in the archive;
                  rules for their use are below
                </div>
              </div>
              <div className="brand-guideline__container__items__item">
                <div className="brand-guideline__container__items__item__icon">
                  <svg
                    className="brand-guideline__container__items__item__icon__img"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h80v80H0z"></path>
                    <path
                      fill="#111115"
                      fillRule="evenodd"
                      d="M69.02 14.98v-1.45h3.03v2.91h-2.98l-4.44 4.43-10.3 10.26v2.96h-2.98v-1.45H37.47v1.45h-1.46v5.18h1.46v1.46h9.64v-1.46h2.98v2.97h-1.46v8.8h1.46v2.97h-2.98v-1.46h-9.64v1.46h-1.46v13.07h1.46v2.97H34.5v-1.46H17.08v1.46h-2.93v-2.97h1.46V25.95h.05c.1-1.61.56-3.17 1.27-4.53l-4.95 4.93v2.11H9V25.5h2.22l6.1-6.08V17.2h2.23l6.21-6.2V9h2.98v2.97h-2.37l-4.35 4.32c1.57-.85 3.44-1.3 5.36-1.3h41.64z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="brand-guideline__container__items__item__title">
                  Font
                </div>
                <div className="brand-guideline__container__items__item__text">
                  Use Inerta for headings and Inter for body text
                </div>
              </div>
              <div className="brand-guideline__container__items__item">
                <div className="brand-guideline__container__items__item__icon">
                  <svg
                    className="brand-guideline__container__items__item__icon__img"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h80v80H0z"></path>
                    <path
                      fill="#111115"
                      fillRule="evenodd"
                      d="M11.6 36.96c-.4-.33-.74-.65-1.08-.97a6.4 6.4 0 01-.92-1.12 8.4 8.4 0 01.8-10.66L21.65 12H72L61.61 23.3l-1.31 1.4-1.32 1.38-11.81 12.8H17.48a9.69 9.69 0 01-5.88-1.92zm38.36 3.2l-.51.6-.91.96h-31c-2.91 0-5.65-.9-7.82-2.57C6.75 43.17 8 48.31 11.6 51.1a9.69 9.69 0 005.88 1.93h29.69l11.81-12.8L72 26.08h-9.08L49.96 40.17zm-.51 14.63l-.91.96H17.48c-2.91 0-5.65-.9-7.82-2.57C5.44 58.91 9.72 67 17.48 67h29.69L72 40.17h-9.08L49.45 54.79z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="brand-guideline__container__items__item__title">
                  Materials
                </div>
                <div className="brand-guideline__container__items__item__text">
                  If you lack materials for your purposes, write to us and we
                  will provide them
                </div>
              </div>
            </div>

            <div className="brand-guideline__warning">
              <div className="brand-guideline__warning__section-text">
                <p className="brand-guideline__warning__section-text__warn">
                  Please note
                </p>
                <h3 className="brand-guideline__warning__section-text__title">
                  Naming
                </h3>
                <p className="brand-guideline__warning__section-text__text">
                  Correct spelling of our brand is very important to us, as it
                  affects how we are perceived as a company in the information
                  space
                </p>
              </div>
              <div className="brand-guideline__warning__items">
                <div className="brand-guideline__warning__items__item item-big">
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate brand-guideline__warning__items__item__icon mdi mdi-check theme--light"
                  ></i>
                  <div className="brand-guideline__warning__items__item__content">
                    <h4 className="brand-guideline__warning__items__item__content__title">
                      GlobeFi
                    </h4>
                    <span className="brand-guideline__warning__items__item__content__text">
                      When writing the name, you cannot change the case and must
                      use a capital “B”
                    </span>
                  </div>
                </div>
                <div className="brand-guideline__warning__items__item">
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate brand-guideline__warning__items__item__icon mdi mdi-cancel theme--light"
                  ></i>
                  <div className="brand-guideline__warning__items__item__content">
                    <h4 className="brand-guideline__warning__items__item__content__title">
                      GlobeFi!
                    </h4>
                    <span className="brand-guideline__warning__items__item__content__text">
                      Do not add any characters to the spelling of the name
                    </span>
                  </div>
                </div>
                <div className="brand-guideline__warning__items__item">
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate brand-guideline__warning__items__item__icon mdi mdi-cancel theme--light"
                  ></i>
                  <div className="brand-guideline__warning__items__item__content">
                    <h4 className="brand-guideline__warning__items__item__content__title">
                      GlobeFi
                    </h4>
                    <span className="brand-guideline__warning__items__item__content__text">
                      Do not change the number of capital letters
                    </span>
                  </div>
                </div>
                <div className="brand-guideline__warning__items__item">
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate brand-guideline__warning__items__item__icon mdi mdi-cancel theme--light"
                  ></i>
                  <div className="brand-guideline__warning__items__item__content">
                    <h4 className="brand-guideline__warning__items__item__content__title">
                      GlobeFi
                    </h4>
                    <span className="brand-guideline__warning__items__item__content__text">
                      Do not use only lowercase letters
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="brand-guideline__warning" style={{ padding: 0 }}>
              <div className="brand-guideline__warning__section-text">
                <h3 className="brand-guideline__warning__section-text__title">
                  Brand Usage Rules
                </h3>
                <p className="brand-guideline__warning__section-text__text">
                  Materials on this page are the property of the company. Do not
                  copy the brand's visual style and do not use a similar style
                  to avoid misleading consumers
                </p>
              </div>
              <div className="brand-guideline__warning__items">
                <div className="brand-guideline__warning__items__item item-biger">
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate brand-guideline__warning__items__item__icon mdi mdi-cancel theme--light"
                  ></i>
                  <div className="brand-guideline__warning__items__item__content">
                    <span className="brand-guideline__warning__items__item__content__text">
                      Do not combine the GlobeFi logo with other images without
                      the consent of a company representative
                    </span>
                  </div>
                </div>
                <div className="brand-guideline__warning__items__item item-biger">
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate brand-guideline__warning__items__item__icon mdi mdi-cancel theme--light"
                  ></i>
                  <div className="brand-guideline__warning__items__item__content">
                    <span className="brand-guideline__warning__items__item__content__text">
                      Do not alter the GlobeFi logo and always use it on a dark
                      background for good readability
                    </span>
                  </div>
                </div>
                <div className="brand-guideline__warning__items__item item-biger">
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate brand-guideline__warning__items__item__icon mdi mdi-cancel theme--light"
                  ></i>
                  <div className="brand-guideline__warning__items__item__content">
                    <span className="brand-guideline__warning__items__item__content__text">
                      Do not use the GlobeFi brand implying relationships with
                      other brands, affiliation, or endorsement
                    </span>
                  </div>
                </div>
                <div className="brand-guideline__warning__items__item item-biger">
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate brand-guideline__warning__items__item__icon mdi mdi-cancel theme--light"
                  ></i>
                  <div className="brand-guideline__warning__items__item__content">
                    <span className="brand-guideline__warning__items__item__content__text">
                      Do not use the GlobeFi brand in conjunction with any
                      illegal activity, advertisement, or product
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer seamless={true} />
    </div>
  );
};

export default CorprateIdentity;
