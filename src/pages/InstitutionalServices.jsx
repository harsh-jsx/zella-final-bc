import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const InstitutionalServices = () => {
  return (
    <div>
      <Navbar />
      <div className="v-main__wrap">
        <div className="institutional-services">
          <div className="institutional-services__header">
            <img
              className="institutional-services__header__img-1"
              src="https://bit-frame.net/assets/img/inst1.svg"
              alt=""
            />
            <img
              className="institutional-services__header__img-2"
              src="https://bit-frame.net/assets/img/inst2.svg"
              alt=""
            />
            <div className="container institutional-services__header__container">
              <p className="institutional-services__header__container__text">
                For partners
              </p>
              <h1 className="institutional-services__header__container__title">
                Institutional Services Bit Frame
              </h1>
              <p className="institutional-services__header__container__subtitle">
                A full range of solutions for corporate clients
              </p>
              <p className="institutional-services__header__container__subtitle">
                From providing liquidity to customized terms for traders
              </p>
              <button
                type="button"
                className="institutional-services__header__container__btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
              >
                <span className="v-btn__content">Let's start cooperation!</span>
              </button>
            </div>
            <div className="institutional-services__header__ander-section">
              <div className="institutional-services__header__ander-section__item">
                <svg
                  className="institutional-services__header__ander-section__item__icon"
                  fill="none"
                  viewBox="0 0 32 32"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.042 6.833a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM5.46 9.583a4.583 4.583 0 119.167 0 4.583 4.583 0 01-9.167 0z"
                    fill="#000"
                  ></path>
                  <path
                    d="M7.292 9.583a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0z"
                    fill="#000"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 20.126a5.042 5.042 0 1110.083 0v5.958a.917.917 0 01-1.833 0v-5.958a3.208 3.208 0 10-6.417 0v5.958a.917.917 0 01-1.833 0v-5.958z"
                    fill="#000"
                  ></path>
                  <path
                    d="M14.167 27a.917.917 0 01-.917-.916v-5.958a3.208 3.208 0 10-6.417 0v5.958c0 .506-.41.917-.916.917h8.25z"
                    fill="#000"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.959 12.333a2.292 2.292 0 100 4.584 2.292 2.292 0 000-4.584zm-4.125 2.292a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0z"
                    fill="#000"
                  ></path>
                  <path
                    d="M19.667 14.625a2.292 2.292 0 114.584 0 2.292 2.292 0 01-4.584 0z"
                    fill="#000"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.918 24.708a5.042 5.042 0 1110.083 0v1.375a.917.917 0 01-1.833 0v-1.375a3.208 3.208 0 00-6.417 0v1.375a.917.917 0 01-1.833 0v-1.375z"
                    fill="#000"
                  ></path>
                  <path
                    d="M26.085 27a.917.917 0 01-.917-.917v-1.375a3.208 3.208 0 00-6.417 0v1.375c0 .506-.41.916-.916.916h8.25z"
                    fill="#000"
                  ></path>
                </svg>
                <span>500+</span> <span>institutional clients</span>
              </div>
              <div className="institutional-services__header__ander-section__item">
                <svg
                  className="institutional-services__header__ander-section__item__icon"
                  fill="none"
                  viewBox="0 0 32 32"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.364 1H6.182v4.363H4v15.455a2 2 0 002 2h.182v5.046a1.5 1.5 0 001.5 1.5h.682v-6.546h2.181V5.363H8.364V1zm10.908 17.455H17.09v-3.273h-2.182v3.273h-2.181v7.818a2 2 0 002 2h.181v1.772a1.5 1.5 0 001.5 1.5h.682v-3.272h2.182v-9.818zm6.547-9.818H28v12H25.82V25h-.682a1.5 1.5 0 01-1.5-1.5v-2.863h-.182a2 2 0 01-2-2v-10h2.182V6.455h2.181v2.182z"
                    fill="#000"
                  ></path>
                </svg>
                <span>equivalent of $700 million average daily</span>{" "}
                <span>trading volume</span>
              </div>
              <div className="institutional-services__header__ander-section__item">
                <svg
                  className="institutional-services__header__ander-section__item__icon"
                  fill="none"
                  viewBox="0 0 32 32"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.181 17.5A82.336 82.336 0 0016 23s1.902-2.475 3.817-5.5c.23-.363.462-.726.682-1.1 1.683-2.783 3.2-5.808 3.2-7.7 0-4.257-3.442-7.7-7.7-7.7a7.694 7.694 0 00-7.7 7.7c0 1.892 1.519 4.917 3.202 7.7.22.374.45.737.681 1.1zM16 4.3c1.826 0 3.3 1.474 3.3 3.3 0 1.826-1.474 3.3-3.3 3.3a3.296 3.296 0 01-3.3-3.3c0-1.826 1.473-3.3 3.3-3.3z"
                    fill="#000"
                  ></path>
                  <path
                    d="M24.8 17.5h-3.3c-.121.187-.242.396-.374.594-.11.176-.22.341-.319.506a75.654 75.654 0 01-2.871 4.158c-.121.165-.231.297-.319.418a9.024 9.024 0 01-.363.495L16 25.5l-1.265-1.829a8.902 8.902 0 01-.363-.495c-.088-.121-.198-.253-.32-.418a77.733 77.733 0 01-2.53-3.64c-.22-.342-.44-.683-.66-1.035-.12-.198-.252-.396-.362-.583H7.2L5 30.7h22l-2.2-13.2z"
                    fill="#000"
                  ></path>
                </svg>
                <span>8 offices across three</span> <span>continents</span>
              </div>
            </div>
          </div>
          <div className="institutional-services__section-black">
            <div className="institutional-small-title">
              Strengthen your business with Bit Frame
            </div>
            <div className="institutional-subtitle">
              We provide advanced solutions and personalized support to all
              types of institutional clients.
            </div>
            <div className="section-black-services">
              <div className="section-black-services__item">
                <svg
                  fill="none"
                  viewBox="0 0 32 32"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clipPath="url(#clip0_37001_364307)"
                    fill="#fff"
                    fillOpacity=".6"
                  >
                    <path d="M12 12h9v13h-9V12zM23 4h9v9h-9V4zM15 25h3v7a3 3 0 01-3-3v-4zM15 8h3v4h-3V8zM26 13h3v11a3 3 0 01-3-3v-8zM26 0h3v4h-3V0zM0 7h9v12H0V7zM3 19h3v8a3 3 0 01-3-3v-5zM3 2h3v5H3V2z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_37001_364307">
                      <path fill="#fff" d="M0 0h32v32H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <span className="section-black-services__item__title">
                  Market Makers
                </span>
                <span className="section-black-services__item__subtitle">
                  Utilize an additional liquidity pool, diversify risks, and
                  trade on more favorable terms.
                </span>
              </div>
              <div className="section-black-services__item">
                <svg
                  fill="none"
                  viewBox="0 0 32 32"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 4h32v22h-3a5 5 0 10-8 0H10C4.477 26 0 21.523 0 16V4zm25 24a4.978 4.978 0 003-1v4a2 2 0 01-2-2v3a3 3 0 01-3-3v-1.416A4.983 4.983 0 0025 28zM5 11a2 2 0 012-2h20v2H5zm0 3h16v2H7a2 2 0 01-2-2zm20 12a3 3 0 100-6 3 3 0 000 6z"
                    fill="#fff"
                    fillOpacity=".6"
                  ></path>
                </svg>
                <span className="section-black-services__item__title">
                  Asset Management
                </span>
                <span className="section-black-services__item__subtitle">
                  Automate and accelerate the reception, exchange, and
                  withdrawal of over 270 digital assets.
                </span>
              </div>
              <div className="section-black-services__item">
                <svg
                  fill="none"
                  viewBox="0 0 32 32"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 5h26a1 1 0 00-1-1H3a1 1 0 00-1 1zM0 6h32v5h-9a2 2 0 00-2 2v3a6 6 0 006 6h5v6H10C4.477 28 0 23.523 0 18V6z"
                    fill="#fff"
                    fillOpacity=".6"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 13a1 1 0 00-1 1v2a4 4 0 004 4h5v-7h-8zm3.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    fill="#fff"
                    fillOpacity=".6"
                  ></path>
                </svg>
                <span className="section-black-services__item__title">
                  Crypto Wallets
                </span>
                <span className="section-black-services__item__subtitle">
                  Expand your cryptocurrency assortment and generate an
                  unlimited number of wallet addresses.
                </span>
              </div>
              <div className="section-black-services__item">
                <svg
                  fill="none"
                  viewBox="0 0 32 32"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 10h-1v1h-1v5h1v2a1 1 0 001 1v-3h1v-5h-1v-1zm-4 5h-1v-2h-1v2h-1v4h1v1a1 1 0 001 1v-2h1v-4z"
                    fill="#fff"
                    fillOpacity=".6"
                  ></path>
                  <path
                    d="M12 4h8a2 2 0 01-2 2h-4a2 2 0 01-2-2z"
                    fill="#fff"
                    fillOpacity=".6"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25 2v28H13a6 6 0 01-6-6V2h18zm-2 2H9v20h14V4z"
                    fill="#fff"
                    fillOpacity=".6"
                  ></path>
                  <rect
                    x="15"
                    y="26"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#1C1C20"
                  ></rect>
                </svg>
                <span className="section-black-services__item__title">
                  Exchanges
                </span>
                <span className="section-black-services__item__subtitle">
                  Increase the number of trading instruments and pairs using our
                  API and liquidity.
                </span>
              </div>
              <div className="section-black-services__item">
                <svg
                  fill="none"
                  viewBox="0 0 32 32"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.625 21.658h-3.467c-.987 0-1.787-.8-1.787-1.788v-.93L1 16.578v5.08c0 3.3 2.675 5.974 5.973 5.974h24.025V16.576L18.625 18.94v2.718z"
                    fill="#fff"
                    fillOpacity=".6"
                  ></path>
                  <path
                    d="M24.192 8.523V6.79C24.192 5.225 22.649 4 20.679 4H8.588v4.526H1v5.709l12.373 2.364v-1.972h5.254v1.972L31 14.235v-5.71h-6.806l-.002-.002zm-13.068 0V6.535h9.555c.559 0 .888.21.976.31V8.52h-10.53v.002z"
                    fill="#fff"
                    fillOpacity=".6"
                  ></path>
                </svg>
                <span className="section-black-services__item__title">
                  Funds or Private Investors
                </span>
                <span className="section-black-services__item__subtitle">
                  Hedge risks by investing in CryptoDeposit plans with returns
                  up to 24.85% annually.
                </span>
              </div>
              <div className="section-black-services__item">
                <svg
                  fill="none"
                  viewBox="0 0 32 32"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.952 21.325A13.96 13.96 0 0030 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14a13.96 13.96 0 005.325-1.048 6 6 0 017.627-7.627z"
                    fill="#fff"
                    fillOpacity=".6"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.5 23H26v3h-3v2.5h3v1a2.5 2.5 0 002.5 2.5v-3.5H32V26h-3.5v-3z"
                    fill="#fff"
                    fillOpacity=".6"
                  ></path>
                  <path
                    d="M20.015 20.689a5.467 5.467 0 11-.06-8.426"
                    stroke="#1C1C20"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M14.773 21.682h2.591V26a2.59 2.59 0 01-2.59-2.591v-1.727zM14.773 7.863h2.591v3.455h-2.59V7.863z"
                    fill="#1C1C20"
                  ></path>
                </svg>
                <span className="section-black-services__item__title">
                  Cryptocurrencies
                </span>
                <span className="section-black-services__item__subtitle">
                  Get fast listing, promotion, and comprehensive support to help
                  your project grow.
                </span>
              </div>
            </div>
          </div>
          <div className="institutional-services__conditions">
            <h3 className="institutional-services__conditions__title">
              Stable and Secure Conditions
            </h3>
            <p className="institutional-services__conditions__subtitle">
              Reliability and security of your assets are assured by regular
              audits and certifications in compliance with global security
              standards.
            </p>
            <div className="institutional-services__conditions__items">
              <div className="institutional-services__conditions__items__item">
                <div className="institutional-services__conditions__items__item__icon">
                  <img
                    className="item-icon-img"
                    src="https://bit-frame.net/assets/img/institutional/security_1.svg"
                    alt=""
                  />
                </div>
                <div className="institutional-services__conditions__items__item__text">
                  We store 96% of digital assets in cold wallets
                </div>
              </div>
              <div className="institutional-services__conditions__items__item">
                <div className="institutional-services__conditions__items__item__icon">
                  <img
                    className="item-icon-img"
                    src="https://bit-frame.net/assets/img/institutional/security_2.svg"
                    alt=""
                  />
                </div>
                <div className="institutional-services__conditions__items__item__text">
                  We use WAF to detect and block hacker attacks
                </div>
              </div>
              <div className="institutional-services__conditions__items__item">
                <div className="institutional-services__conditions__items__item__icon">
                  <img
                    className="item-icon-img"
                    src="https://bit-frame.net/assets/img/institutional/security_3.svg"
                    alt=""
                  />
                </div>
                <div className="institutional-services__conditions__items__item__text">
                  We comply with GDPR European data protection standards
                </div>
              </div>
              <div className="institutional-services__conditions__items__item">
                <div className="institutional-services__conditions__items__item__icon">
                  <img
                    className="item-icon-img"
                    src="https://bit-frame.net/assets/img/institutional/security_4.svg"
                    alt=""
                  />
                </div>
                <div className="institutional-services__conditions__items__item__text">
                  We are certified in confidential information management
                </div>
              </div>
            </div>
          </div>
          <div id="form" className="institutional-services__cooperation">
            <h4 className="institutional-services__cooperation__title">
              Take a Step Towards Cooperation
            </h4>
            <p className="institutional-services__cooperation__subtitle">
              Leave your contact information to start an effective and
              transparent partnership with Bit Frame
            </p>
            <form noValidate className="v-form token-listing__start-work__form">
              <div className="v-input token-listing__start-work__form__input theme--light v-text-field v-text-field--is-booted">
                <div className="v-input__control">
                  <div className="v-input__slot">
                    <div className="v-text-field__slot">
                      <label
                        htmlFor="input-324"
                        className="v-label theme--light"
                        style={{ left: 0, right: "auto", position: "absolute" }}
                      >
                        Your Name*
                      </label>
                      <input required id="input-324" type="text" />
                    </div>
                  </div>
                  <div className="v-text-field__details">
                    <div className="v-messages theme--light error--text">
                      <div className="v-messages__wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v-input token-listing__start-work__form__input theme--light v-text-field v-text-field--is-booted">
                <div className="v-input__control">
                  <div className="v-input__slot">
                    <div className="v-text-field__slot">
                      <label
                        htmlFor="input-327"
                        className="v-label theme--light"
                        style={{ left: 0, right: "auto", position: "absolute" }}
                      >
                        Company Name
                      </label>
                      <input required id="input-327" type="text" />
                    </div>
                  </div>
                  <div className="v-text-field__details">
                    <div className="v-messages theme--light error--text">
                      <div className="v-messages__wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v-input token-listing__start-work__form__input theme--light v-text-field v-text-field--is-booted">
                <div className="v-input__control">
                  <div className="v-input__slot">
                    <div className="v-text-field__slot">
                      <label
                        htmlFor="input-330"
                        className="v-label theme--light"
                        style={{ left: 0, right: "auto", position: "absolute" }}
                      >
                        Personal Telegram or WhatsApp*
                      </label>
                      <input required id="input-330" type="text" />
                    </div>
                  </div>
                  <div className="v-text-field__details">
                    <div className="v-messages theme--light error--text">
                      <div className="v-messages__wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v-input token-listing__start-work__form__input theme--light v-text-field v-text-field--is-booted">
                <div className="v-input__control">
                  <div className="v-input__slot">
                    <div className="v-text-field__slot">
                      <label
                        htmlFor="input-333"
                        className="v-label theme--light"
                        style={{ left: 0, right: "auto", position: "absolute" }}
                      >
                        Company Website
                      </label>
                      <input required id="input-333" type="text" />
                    </div>
                  </div>
                  <div className="v-text-field__details">
                    <div className="v-messages theme--light error--text">
                      <div className="v-messages__wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v-input token-listing__start-work__form__input theme--light v-text-field v-text-field--is-booted">
                <div className="v-input__control">
                  <div className="v-input__slot">
                    <div className="v-text-field__slot">
                      <label
                        htmlFor="input-336"
                        className="v-label theme--light"
                        style={{ left: 0, right: "auto", position: "absolute" }}
                      >
                        E-mail*
                      </label>
                      <input required id="input-336" type="text" />
                    </div>
                  </div>
                  <div className="v-text-field__details">
                    <div className="v-messages theme--light error--text">
                      <div className="v-messages__wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v-input token-listing__start-work__form__input theme--light v-text-field v-text-field--is-booted">
                <div className="v-input__control">
                  <div className="v-input__slot">
                    <div className="v-text-field__slot">
                      <label
                        htmlFor="input-337"
                        className="v-label theme--light"
                        style={{ left: 0, right: "auto", position: "absolute" }}
                      >
                        What are you interested in?
                      </label>
                      <input required id="input-337" type="text" />
                    </div>
                  </div>
                  <div className="v-text-field__details">
                    <div className="v-messages theme--light error--text">
                      <div className="v-messages__wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="token-listing__start-work__form__btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
              >
                <span className="v-btn__content">Send</span>
              </button>
            </form>
          </div>
          <div className="v-dialog__container"></div>
        </div>
        <div
          id="listing-popup"
          role="dialog"
          aria-modal="true"
          className="v-dialog__content v-dialog__content--active"
          style={{ zIndex: 202, display: "none" }}
        >
          <div
            tabIndex={0}
            className="v-dialog dialog v-dialog--active"
            style={{ transformOrigin: "center center", width: 450 }}
          >
            <div className="dialog__close">
              <i
                aria-hidden="true"
                className="v-icon notranslate dialog__close__icon mdi mdi-close theme--light"
              ></i>
            </div>
            <div className="modal-background"></div>
            <div className="token-listing__modal-content">
              <div className="token-listing__modal-title">
                Start cooperation
              </div>
              <div className="token-listing__modal-subtitle">
                Your data has been accepted for processing. We will contact you
                in case of a positive response to your application.
              </div>
              <a
                href="../"
                className="token-listing__modal-content__btn v-btn v-btn--is-elevated v-btn--has-bg v-btn--router theme--light v-size--default"
              >
                <span className="v-btn__content">Main page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer seamless={true} />
    </div>
  );
};

export default InstitutionalServices;
