import React from "react";
import { Typography } from "@mui/material";

import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import logo from "../assets/logo.png";

const Card = () => {
  return (
    <>
      <Navbar />

      <div className="v-main__wrap">
        <div className="card">
          <div className="card-header">
            <div className="container">
              <span className="card-header__text">Quick card registration</span>
              <h1 className="card-header__title">
                Pay anywhere with the GlobeFi card
              </h1>
              <p className="card-header__subtitle">
                The card allows you to make payments from numerous places around
                the world!
              </p>
              <button
                type="button"
                className="card-header__btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
              >
                <span className="v-btn__content">
                  <strong data-v-7524a934="">Soon</strong>
                </span>
              </button>
              <div className="card-header__img-section">
                <div className="v-image v-responsive card-header__img-section__img theme--light">
                  <div
                    className="v-responsive__sizer"
                    style={{ paddingBottom: "53.7037%" }}
                  ></div>
                  <div
                    className="v-image__image v-image__image--cover"
                    style={{
                      backgroundImage:
                        "url('https://bit-frame.net/../assets/img/pedestal.webp')",
                      backgroundPosition: "center center",
                    }}
                  ></div>
                  <div
                    className="v-responsive__content"
                    style={{ width: "1836px" }}
                  ></div>
                </div>
                <div className="card-header__card-wrapper">
                  <div className="card-header__card-wrapper__img-section">
                    <div className="v-image v-responsive card-header__card-wrapper__img theme--light">
                      <div
                        className="v-responsive__sizer"
                        style={{ paddingBottom: "62.0833%" }}
                      ></div>
                      <div
                        className="v-image__image v-image__image--cover"
                        style={{
                          backgroundImage:
                            "url('https://bit-frame.net/../assets/img/card.webp')",
                          backgroundPosition: "center center",
                        }}
                      ></div>
                      <div
                        className="v-responsive__content"
                        style={{ width: "960px" }}
                      ></div>
                    </div>
                  </div>
                  <span className="card-header__card-wrapper__shadow"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="container slider-advantages">
            <div className="slider-advantages__header">
              <h1 className="slider-advantages__header__title">
                Explore the benefits
              </h1>
              <div className="slider-advantages__header__btns">
                <button
                  type="button"
                  className="my-swiper-button-prev slider-advantages__header__btn v-btn v-btn--has-bg theme--light v-size--default"
                  tabIndex={0}
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-eba8d884ec30282e"
                >
                  <span className="v-btn__content">
                    <i
                      aria-hidden="true"
                      className="v-icon notranslate slider-advantages__header__btn__icon mdi mdi-arrow-left-thin theme--light"
                    ></i>
                  </span>
                </button>
                <button
                  type="button"
                  className="my-swiper-button-next slider-advantages__header__btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                  tabIndex={0}
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-eba8d884ec30282e"
                >
                  <span className="v-btn__content">
                    <i
                      aria-hidden="true"
                      className="v-icon notranslate slider-advantages__header__btn__icon mdi mdi-arrow-right-thin theme--light"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="my-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-eba8d884ec30282e"
                aria-live="off"
                style={{
                  transitionDuration: "0ms",
                  transform: "translate3d(-844px, 0px, 0px)",
                  transitionDelay: "0ms",
                }}
              >
                {/* Slide 1 */}
                <div
                  className="swiper-slide"
                  style={{ width: "412px", marginRight: "10px" }}
                  role="group"
                  aria-label="1 / 5"
                  data-swiper-slide-index="0"
                >
                  <div className="slider-advantages__slide__icon-wrapper">
                    {/* SVG omitted for brevity */}
                  </div>
                  <h4 className="slider-advantages__slide__title">
                    Multiple payment options
                  </h4>
                  <span className="slider-advantages__slide__subtitle">
                    Make payments worldwide with the GlobeFi card.
                  </span>
                </div>
                {/* Slide 2 */}
                <div
                  className="swiper-slide swiper-slide-prev"
                  style={{ width: "412px", marginRight: "10px" }}
                  role="group"
                  aria-label="2 / 5"
                  data-swiper-slide-index="1"
                >
                  <div className="slider-advantages__slide__icon-wrapper">
                    {/* SVG omitted for brevity */}
                  </div>
                  <h4 className="slider-advantages__slide__title">
                    Supports Apple Pay and Google Pay
                  </h4>
                  <span className="slider-advantages__slide__subtitle">
                    Add the GlobeFi card to your Apple Pay or Google Pay wallet
                    and enjoy the benefits anytime!
                  </span>
                </div>
                {/* Slide 3 */}
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: "412px", marginRight: "10px" }}
                  role="group"
                  aria-label="3 / 5"
                  data-swiper-slide-index="2"
                >
                  <div className="slider-advantages__slide__icon-wrapper">
                    {/* SVG omitted for brevity */}
                  </div>
                  <h4 className="slider-advantages__slide__title">
                    Convenient withdrawals
                  </h4>
                  <span className="slider-advantages__slide__subtitle">
                    Convert your digital assets to cash and withdraw USD, EUR or
                    GBP.
                  </span>
                </div>
                {/* Slide 4 */}
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ width: "412px", marginRight: "10px" }}
                  role="group"
                  aria-label="4 / 5"
                  data-swiper-slide-index="3"
                >
                  <div className="slider-advantages__slide__icon-wrapper">
                    {/* SVG omitted for brevity */}
                  </div>
                  <h4 className="slider-advantages__slide__title">
                    Instant access to funds
                  </h4>
                  <span className="slider-advantages__slide__subtitle">
                    Withdraw up to 5,000 USD per day at Visa ATMs anywhere in
                    the world.
                  </span>
                </div>
                {/* Slide 5 */}
                <div
                  aria-hidden="true"
                  className="swiper-slide"
                  role="group"
                  aria-label="5 / 5"
                  data-swiper-slide-index="4"
                  style={{ width: "412px", marginRight: "10px" }}
                >
                  <div className="slider-advantages__slide__icon-wrapper">
                    {/* SVG omitted for brevity */}
                  </div>
                  <h4 className="slider-advantages__slide__title">
                    Receive cashback
                  </h4>
                  <span className="slider-advantages__slide__subtitle">
                    Get lucrative cashback from relevant purchases
                  </span>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
          <div className="container action-section__container">
            <div className="action-section">
              <div className="action-section__info">
                <h5 className="action-section__info__title">
                  Become an owner today
                </h5>
                <h2 className="action-section__info__users">500+</h2>
                <p className="action-section__info__description">
                  Users have already ordered the GlobeFi card! Take the
                  opportunity to be among the first to appreciate the benefits
                  of the GlobeFi card.
                </p>
                <button
                  type="button"
                  className="action-section__info__btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                >
                  <Typography>Soon</Typography>
                </button>
              </div>
            </div>
          </div>
          <div className="container slider-advantages">
            <div className="slider-advantages__header">
              <div>
                <h1 className="slider-advantages__header__title">
                  How to get the card?
                </h1>
                <p className="slider-advantages__header__subtitle">
                  Becoming an owner of the GlobeFi card is easy! Just follow a
                  few steps:
                </p>
              </div>
              <div className="slider-advantages__header__btns">
                <button
                  type="button"
                  className="my-swiper-button-prev-2 slider-advantages__header__btn v-btn v-btn--has-bg theme--light v-size--default"
                  tabIndex={0}
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-43d8eecd51c70ac6"
                >
                  <span className="v-btn__content">
                    <i
                      aria-hidden="true"
                      className="v-icon notranslate slider-advantages__header__btn__icon mdi mdi-arrow-left-thin theme--light"
                    ></i>
                  </span>
                </button>
                <button
                  type="button"
                  className="my-swiper-button-next-2 slider-advantages__header__btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                  tabIndex={0}
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-43d8eecd51c70ac6"
                >
                  <span className="v-btn__content">
                    <i
                      aria-hidden="true"
                      className="v-icon notranslate slider-advantages__header__btn__icon mdi mdi-arrow-right-thin theme--light"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="my-swiper-2 swiper-initialized swiper-horizontal swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-43d8eecd51c70ac6"
                aria-live="polite"
              >
                {/* Step 1 */}
                <div
                  className="swiper-slide slider-steps__slide swiper-slide-active"
                  style={{
                    height: "600px",
                    width: "412px",
                    marginRight: "10px",
                  }}
                  role="group"
                  aria-label="1 / 5"
                  data-swiper-slide-index="0"
                >
                  <div className="slider-steps__slide__content">
                    <div className="slider-steps__slide__number">1</div>
                    <div className="slider-steps__slide__texts">
                      <h4 className="slider-steps__slide__title">
                        <Typography>
                          Step 1: Check the basic requirements
                        </Typography>
                      </h4>
                      <p className="slider-steps__slide__subtitle">
                        <Typography sx={{ fontFamily: "inter" }}>
                          Before applying for the GlobeFi card registration,
                          make sure you have activated 2FA in your exchange
                          account, verified your identity, and have the first
                          Holding level.
                        </Typography>
                      </p>
                    </div>
                    <div className="v-image v-responsive slider-steps__slide__img theme--light">
                      <img
                        src="https://bit-frame.net/../assets/img/how1.webp"
                        style={{ width: "100%", height: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* Step 2 */}
                <div
                  className="swiper-slide slider-steps__slide swiper-slide-next"
                  style={{
                    height: "600px",
                    width: "412px",
                    marginRight: "10px",
                  }}
                  role="group"
                  aria-label="2 / 5"
                  data-swiper-slide-index="1"
                >
                  <div className="slider-steps__slide__content">
                    <div className="slider-steps__slide__number">2</div>
                    <div className="slider-steps__slide__texts">
                      <h4 className="slider-steps__slide__title">
                        Step 2: Complete quick verification
                      </h4>
                      <p className="slider-steps__slide__subtitle">
                        To apply for a card, you need a passport or residence
                        permit. Having one of these documents will help you pass
                        the verification stage quickly.
                      </p>
                    </div>
                    <div className="v-image v-responsive slider-steps__slide__img theme--light">
                      <img
                        src="https://bit-frame.net/../assets/img/how2.webp"
                        style={{ width: "100%", height: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* Step 3 */}
                <div
                  className="swiper-slide slider-steps__slide"
                  style={{
                    height: "600px",
                    width: "412px",
                    marginRight: "10px",
                  }}
                  role="group"
                  aria-label="3 / 5"
                  data-swiper-slide-index="2"
                >
                  <div className="slider-steps__slide__content">
                    <div className="slider-steps__slide__number">3</div>
                    <div className="slider-steps__slide__texts">
                      <h4 className="slider-steps__slide__title">
                        Step 3: Apply for KYC at PayUnicard
                      </h4>
                      <p className="slider-steps__slide__subtitle">
                        Complete the necessary steps to register the card on the
                        PayUnicard website. You will need to provide personal
                        information and wait for the result.
                      </p>
                    </div>
                    <div className="v-image v-responsive slider-steps__slide__img theme--light">
                      <img
                        src="https://bit-frame.net/../assets/img/how3.webp"
                        style={{ width: "100%", height: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* Step 4 */}
                <div
                  className="swiper-slide slider-steps__slide"
                  style={{
                    height: "600px",
                    width: "412px",
                    marginRight: "10px",
                  }}
                  role="group"
                  aria-label="4 / 5"
                  data-swiper-slide-index="3"
                >
                  <div className="slider-steps__slide__content">
                    <div className="slider-steps__slide__number">4</div>
                    <div className="slider-steps__slide__texts">
                      <h4 className="slider-steps__slide__title">
                        Step 4: Download the PayUnicard app
                      </h4>
                      <p className="slider-steps__slide__subtitle">
                        Download the PayUnicard app to check the application
                        status and manage your GlobeFi card.
                      </p>
                    </div>
                    <div className="v-image v-responsive slider-steps__slide__img theme--light">
                      <img
                        src="https://bit-frame.net/../assets/img/how4.webp"
                        style={{ width: "100%", height: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* Step 5 */}
                <div
                  className="swiper-slide slider-steps__slide"
                  style={{
                    height: "600px",
                    width: "412px",
                    marginRight: "10px",
                  }}
                  role="group"
                  aria-label="5 / 5"
                  data-swiper-slide-index="4"
                >
                  <div className="slider-steps__slide__content">
                    <div className="slider-steps__slide__number">5</div>
                    <div className="slider-steps__slide__texts">
                      <h4 className="slider-steps__slide__title">
                        Step 5: Done! The GlobeFi card is at your service
                      </h4>
                      <p className="slider-steps__slide__subtitle">
                        We are pleased to provide top-notch services for your
                        comfort. Enjoy the convenience and versatility of the
                        product today!
                      </p>
                    </div>
                    <div className="v-image v-responsive slider-steps__slide__img theme--light">
                      <img
                        src="https://bit-frame.net/../assets/img/how5.webp"
                        style={{ width: "100%", height: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
          <div className="container about-us road-map">
            <div className="about-us__content">
              <div className="about-us__content__history">
                <h2 className="about-us__content__history__title">Roadmap</h2>
                <div className="about-us__content__history-item-wrapper">
                  <div className="about-us__content__history__items">
                    <div className="about-us__content__history__items__item">
                      <div className="about-us__content__history__items__item__date">
                        September 2024
                      </div>
                      <div className="about-us__content__history__items__item__title">
                        Launch of the digital GlobeFi card
                      </div>
                      <div className="about-us__content__history__items__item__content">
                        We created a digital version of the card for convenient
                        and fast payments
                      </div>
                    </div>
                    <div className="about-us__content__history__items__item">
                      <div className="about-us__content__history__items__item__date">
                        September 2024
                      </div>
                      <div className="about-us__content__history__items__item__title">
                        Support for Apple Pay and Google Pay
                      </div>
                      <div className="about-us__content__history__items__item__content">
                        Connected Apple Pay and Google Pay. Add the card to your
                        wallet and use it anytime!
                      </div>
                    </div>
                    <div className="about-us__content__history__items__item">
                      <div className="about-us__content__history__items__item__date">
                        October 2024
                      </div>
                      <div className="about-us__content__history__items__item__title">
                        Launch of the GlobeFi Card loyalty program
                      </div>
                      <div className="about-us__content__history__items__item__content">
                        Cashback, promotions, loyalty program, and much more.
                      </div>
                    </div>
                    <div className="about-us__content__history__items__item">
                      <div className="about-us__content__history__items__item__date">
                        Coming soon
                      </div>
                      <div className="about-us__content__history__items__item__title">
                        Stay tuned for updates!
                      </div>
                      <div className="about-us__content__history__items__item__content">
                        Many more new features coming soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container terms">
            <h1 className="terms__title">Terms and Fees</h1>
            <div className="terms__sections-wrapper">
              <div className="terms__wrapper partial-content">
                {/* Standard Package */}
                <div className="terms__wrapper__section">
                  <div className="terms__wrapper__section__header">
                    <div className="v-image v-responsive terms__wrapper__section__header__img theme--light">
                      <div
                        className="v-responsive__sizer"
                        style={{ paddingBottom: "62.0833%" }}
                      ></div>
                      <div
                        className="v-image__image v-image__image--cover"
                        style={{
                          backgroundImage:
                            "url('https://bit-frame.net/../assets/img/card.webp')",
                          backgroundPosition: "center center",
                        }}
                      ></div>
                      <div
                        className="v-responsive__content"
                        style={{ width: "960px" }}
                      ></div>
                    </div>
                    <div className="terms__wrapper__section__header__title">
                      <p className="terms__wrapper__section__header__title__name">
                        Package
                      </p>
                      <h1 className="terms__wrapper__section__header__title__role">
                        Standard
                      </h1>
                    </div>
                  </div>
                  {/* Standard Tables */}
                  <div className="terms-table">
                    <p className="terms-table__tile">Card features</p>
                    <p className="terms-table__description">
                      Digital Card for Individuals
                    </p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">Card class</p>
                    <p className="terms-table__description">VISA Prepaid</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">Validity period</p>
                    <p className="terms-table__description">3 Years</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Opening a PayUnicard account
                    </p>
                    <p className="terms-table__description">Free</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Daily ATM withdrawal limit (24 hours)
                    </p>
                    <p className="terms-table__description">
                      1,500 USD or equivalent in EUR/GBP
                    </p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Monthly/Annual service fee
                    </p>
                    <p className="terms-table__description">
                      Monthly 2.5 USD or Annually 24 USD, or equivalent in
                      EUR/GBP
                    </p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">24-hour purchase limit</p>
                    <p className="terms-table__description">
                      3,000 USD or equivalent in EUR/GBP
                    </p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">ATM withdrawal fee</p>
                    <p className="terms-table__description">2.8%</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Maximum number of active cards per client
                    </p>
                    <p className="terms-table__description">1 Card</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      SMS service and online banking
                    </p>
                    <p className="terms-table__description">Free</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Fee for transfers within the PayUnicard wallet
                    </p>
                    <p className="terms-table__description">Free</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Transfer limit within the PayUnicard wallet
                    </p>
                    <p className="terms-table__description">Unlimited</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Card-to-card transfer fee
                    </p>
                    <p className="terms-table__description">2.5%</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Card stop-list management (online blocking/unblocking)
                    </p>
                    <p className="terms-table__description">Free</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Withdrawal via PayUnicard Wallet
                    </p>
                    <p className="terms-table__description">Free</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Top up via PayUnicard wallet
                    </p>
                    <p className="terms-table__description">0.2% USD/EUR/GBP</p>
                  </div>
                </div>
                {/* Premium Package */}
                <div className="terms__wrapper__section">
                  <div className="terms__wrapper__section__header">
                    <div className="terms__wrapper__section__header__img-wrapper">
                      <div className="premium-card-wrapper">
                        {/* SVG omitted for brevity */}
                        <svg
                          viewBox="0 0 36 36"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="premium-card-wrapper__icon"
                        ></svg>
                      </div>
                      <div className="v-image v-responsive terms__wrapper__section__header__img theme--light">
                        <div
                          className="v-responsive__sizer"
                          style={{ paddingBottom: "62.0833%" }}
                        ></div>
                        <div
                          className="v-image__image v-image__image--cover"
                          style={{
                            backgroundImage:
                              "url('https://bit-frame.net/../assets/img/card.webp')",
                            backgroundPosition: "center center",
                          }}
                        ></div>
                        <div
                          className="v-responsive__content"
                          style={{ width: "960px" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terms__wrapper__section__header__title">
                      <p className="terms__wrapper__section__header__title__name">
                        Package
                      </p>
                      <h1 className="terms__wrapper__section__header__title__role">
                        VIP
                      </h1>
                    </div>
                  </div>
                  {/* Premium Tables */}
                  <div className="terms-table">
                    <p className="terms-table__tile">Card features</p>
                    <p className="terms-table__description">
                      Digital card for individuals
                    </p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">Card class</p>
                    <p className="terms-table__description">VISA Prepaid</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">Validity period</p>
                    <p className="terms-table__description">3 years</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Opening a PayUnicard account
                    </p>
                    <p className="terms-table__description">Free</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Daily ATM withdrawal limit (24 hours)
                    </p>
                    <p className="terms-table__description">
                      2,000 USD or equivalent in EUR/GBP
                    </p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Monthly/Annual service fee
                    </p>
                    <p className="terms-table__description">
                      Monthly 4 USD or annually 38 USD, or equivalent in EUR/GBP
                    </p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">24-hour purchase limit</p>
                    <p className="terms-table__description">
                      15,000 USD or equivalent in EUR/GBP
                    </p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">ATM withdrawal fee</p>
                    <p className="terms-table__description">2.8%</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Maximum number of active cards per client
                    </p>
                    <p className="terms-table__description">2 cards</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      SMS service and online banking
                    </p>
                    <p className="terms-table__description">Free</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Fee for transfers within the PayUnicard wallet
                    </p>
                    <p className="terms-table__description">Free</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Transfer limit within the PayUnicard wallet
                    </p>
                    <p className="terms-table__description">Unlimited</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Card-to-card transfer fee
                    </p>
                    <p className="terms-table__description">1.5%</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Card stop-list management (online blocking/unblocking)
                    </p>
                    <p className="terms-table__description">Free</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Withdrawal via PayUnicard Wallet
                    </p>
                    <p className="terms-table__description">Free</p>
                  </div>
                  <div className="terms-table">
                    <p className="terms-table__tile">
                      Top up via PayUnicard wallet
                    </p>
                    <p className="terms-table__description">0.2% USD/EUR/GBP</p>
                  </div>
                </div>
              </div>
              <div className="terms__sections-wrapper__btn-wrapper">
                <button
                  type="button"
                  className="terms__sections-wrapper__btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                >
                  <span className="v-btn__content">
                    Show more
                    <i
                      aria-hidden="true"
                      className="v-icon notranslate terms__sections-wrapper__btn__icon mdi mdi-triangle-down theme--light"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="container card-faq">
            <div className="questions">
              <div className="questions__title">FAQ</div>
              <div className="v-item-group theme--light v-expansion-panels">
                {/* FAQ Item 1 */}
                <div aria-expanded="false" className="v-expansion-panel">
                  <button type="button" className="v-expansion-panel-header">
                    <span>What currencies does the GlobeFi card support?</span>
                    <div className="v-expansion-panel-header__icon">
                      <i
                        aria-hidden="true"
                        className="v-icon notranslate mdi mdi-chevron-down theme--light"
                      ></i>
                    </div>
                  </button>
                  <div
                    className="v-expansion-panel-content"
                    style={{ display: "none" }}
                  >
                    <div className="v-expansion-panel-content__wrap">
                      The GlobeFi card supports USD, EUR and GBP.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 2 */}
                <div aria-expanded="false" className="v-expansion-panel">
                  <button type="button" className="v-expansion-panel-header">
                    <span>
                      Which currencies can be withdrawn from the GlobeFi card?
                    </span>
                    <div className="v-expansion-panel-header__icon">
                      <i
                        aria-hidden="true"
                        className="v-icon notranslate mdi mdi-chevron-down theme--light"
                      ></i>
                    </div>
                  </button>
                  <div
                    className="v-expansion-panel-content"
                    style={{ display: "none" }}
                  >
                    <div className="v-expansion-panel-content__wrap">
                      The GlobeFi card allows withdrawals in USD, EUR and GBP.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 3 */}
                <div aria-expanded="false" className="v-expansion-panel">
                  <button type="button" className="v-expansion-panel-header">
                    <span>How can I send funds to the GlobeFi card?</span>
                    <div className="v-expansion-panel-header__icon">
                      <i
                        aria-hidden="true"
                        className="v-icon notranslate mdi mdi-chevron-down theme--light"
                      ></i>
                    </div>
                  </button>
                  <div
                    className="v-expansion-panel-content"
                    style={{ display: "none" }}
                  >
                    <div className="v-expansion-panel-content__wrap">
                      To do this, you need to specify your PayUnicard account
                      nickname when withdrawing. With PayUnicard, you can
                      withdraw only USD, EUR and GBP Additionally, USD can be
                      withdrawn using Checkout.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 4 */}
                <div aria-expanded="false" className="v-expansion-panel">
                  <button type="button" className="v-expansion-panel-header">
                    <span>Why is additional verification needed?</span>
                    <div className="v-expansion-panel-header__icon">
                      <i
                        aria-hidden="true"
                        className="v-icon notranslate mdi mdi-chevron-down theme--light"
                      ></i>
                    </div>
                  </button>
                  <div
                    className="v-expansion-panel-content"
                    style={{ display: "none" }}
                  >
                    <div className="v-expansion-panel-content__wrap">
                      To link GlobeFi and PayUnicard accounts, additional
                      verification is required. For additional verification you
                      need to provide one of the following documents: passport
                      or residence permit. If your application is rejected, your
                      verification status on the exchange will remain unchanged.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 5 */}
                <div aria-expanded="false" className="v-expansion-panel">
                  <button type="button" className="v-expansion-panel-header">
                    <span>How to top up the card's tariff plan?</span>
                    <div className="v-expansion-panel-header__icon">
                      <i
                        aria-hidden="true"
                        className="v-icon notranslate mdi mdi-chevron-down theme--light"
                      ></i>
                    </div>
                  </button>
                  <div
                    className="v-expansion-panel-content"
                    style={{ display: "none" }}
                  >
                    <div className="v-expansion-panel-content__wrap">
                      When ordering the card, you chose one of the available
                      tariff plans. Transfer the amount provided by the selected
                      plan to your PayUnicard account. This amount will be
                      automatically credited as payment for your GlobeFi card
                      tariff plan.
                    </div>
                  </div>
                </div>
                {/* FAQ Item 6 */}
                <div aria-expanded="false" className="v-expansion-panel">
                  <button type="button" className="v-expansion-panel-header">
                    <span>What additional security settings are there?</span>
                    <div className="v-expansion-panel-header__icon">
                      <i
                        aria-hidden="true"
                        className="v-icon notranslate mdi mdi-chevron-down theme--light"
                      ></i>
                    </div>
                  </button>
                  <div
                    className="v-expansion-panel-content"
                    style={{ display: "none" }}
                  >
                    <div className="v-expansion-panel-content__wrap">
                      In your PayUnicard account, you can change the PIN code of
                      the GlobeFi card. To do this, log in to your PayUnicard
                      account, select the GlobeFi card, and click the "Change
                      Card PIN" button. A message with a new PIN code will be
                      sent to your mobile number.
                      <br />
                      You can also add the card number to the Whitelist. To do
                      this, hover over the account icon on the exchange and
                      select the "Security" section. In the "Address Management"
                      block, change the status to "Whitelist enabled" and add
                      the card number.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container about-us card-register">
            <div className="about-us__content">
              <div className="about-us__content__with-us-wrapper">
                <div className="about-us__content__with-us">
                  <img
                    src={logo}
                    style={{
                      width: "70px",
                      height: "70px",
                      marginBottom: "20px",
                    }}
                    alt=""
                  />
                  <div className="about-us__content__with-us__logo">
                    Quick card registration
                  </div>
                  <p className="about-us__content__with-us__subtitle">
                    Get the GlobeFi card in a few simple steps
                  </p>
                  <button
                    type="button"
                    className="about-us__content__with-us__btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                  >
                    <span className="v-btn__content">
                      <strong>Coming soon</strong>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Card;
