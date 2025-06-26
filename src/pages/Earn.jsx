import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
const Earn = () => {
  return (
    <>
      <Navbar />
      <div class="container ern-section-container">
        <div class="ern-section__content">
          <h1 class="ern-section__content__title">Earn with ZELLABIT</h1>
          <p class="ern-section__content__subtitle">
            The ZELLABIT family of investment instruments is a great way to
            generate passive income with a high interest rate
          </p>
          <div class="v-image v-responsive ern-section__content__background-img theme--light">
            <div class="v-responsive__sizer"></div>
            <div
              class="v-image__image v-image__image--cover"
              style={{
                background:
                  "url(https://bit-frame.net/../assets/img/earn/treasure.png)",
              }}
            ></div>
            <div class="v-responsive__content"></div>
          </div>
        </div>
        <div class="ern-section__cards">
          <div class="ern-section__cards__card">
            <div class="ern-section__cards__card__section">
              <div class="v-image v-responsive ern-section__cards__card__img theme--light">
                <div class="v-responsive__sizer"></div>
                <div
                  class="v-image__image v-image__image--cover"
                  style={{
                    background:
                      "url(https://bit-frame.net/../assets/img/earn/fire.png)",
                  }}
                ></div>
                <div class="v-responsive__content"></div>
              </div>
              <div class="ern-section__cards__card__titles">
                <h1 class="ern-section__cards__card__titles__title earn-title">
                  Staking
                </h1>
                <span class="ern-section__cards__card__titles__subtitle earn-subtitle">
                  Profit daily by keeping your funds in staking-pool without
                  risking your principal
                </span>
              </div>
            </div>
            <button
              onclick="location.replace('../profile/staking')"
              type="button"
              class="earn-btn v-btn v-btn--has-bg theme--light v-size--default"
            >
              <span class="v-btn__content">Choose Plan</span>
            </button>
          </div>
          <div class="ern-section__cards__card">
            <div class="ern-section__cards__card__section">
              <div class="v-image v-responsive ern-section__cards__card__img theme--light">
                <div class="v-responsive__sizer"></div>
                <div
                  class="v-image__image v-image__image--cover"
                  style={{
                    background:
                      "url(https://bit-frame.net/../assets/img/earn/staking.png)",
                  }}
                ></div>
                <div class="v-responsive__content"></div>
              </div>
              <div class="ern-section__cards__card__titles">
                <h1 class="ern-section__cards__card__titles__title earn-title">
                  Crypto Lending
                </h1>
                <span class="ern-section__cards__card__titles__subtitle earn-subtitle">
                  Lending certain assets to the Exchange at interest rates
                  ranging from 0.3% to 24.85% of revenue
                </span>
              </div>
            </div>
            <button
              type="button"
              disabled="disabled"
              class="earn-btn v-btn v-btn--disabled v-btn--has-bg theme--light v-size--default"
            >
              <span class="v-btn__content">Soon</span>
            </button>
          </div>
        </div>
        <div class="ern-section__big-content">
          <div class="ern-section__big-content__section">
            <div class="v-image v-responsive ern-section__big-content__section__img theme--light">
              <div class="v-responsive__sizer"></div>
              <div
                class="v-image__image v-image__image--cover"
                style={{
                  background:
                    "url(https://bit-frame.net/../assets/img/earn/phone-new.png)",
                }}
              ></div>
              <div class="v-responsive__content"></div>
            </div>
          </div>
          <div class="ern-section__big-content__section-text">
            <div class="ern-section__big-content__section-text__status status-text-blue">
              Easy to use
            </div>
            <h1 class="ern-section__big-content__section-text__title earn-title">
              Staking
            </h1>
            <span class="ern-section__big-content__section-text__subtitle earn-subtitle">
              By investing, you participate in various functions of the network
              in exchange for a reward (fixed or in the form of interest). Your
              cryptocurrency becomes part of the Proof-of-Stake process, i.e. it
              provides verification and protection of all transactions without
              the involvement of a bank or payment processor and receives income
              for this.
            </span>
            <button
              onclick="location.replace('../profile/staking')"
              type="button"
              class="earn-btn v-btn v-btn--has-bg theme--light v-size--default"
            >
              <span class="v-btn__content">Choose Plan</span>
            </button>
          </div>
        </div>
        <div class="ern-section__big-content">
          <div class="ern-section__big-content__section-text">
            <div class="ern-section__big-content__section-text__status status-text-green">
              Guaranteed income
            </div>
            <h1 class="ern-section__big-content__section-text__title earn-title">
              Crypto Lending
            </h1>
            <span class="ern-section__big-content__section-text__subtitle earn-subtitle">
              The tool allows lending digital assets on the exchange, placing
              them on special terms and earning interest income.
            </span>
            <button
              type="button"
              disabled="disabled"
              class="earn-btn v-btn v-btn--disabled v-btn--has-bg theme--light v-size--default"
            >
              <span class="v-btn__content">Soon</span>
            </button>
          </div>
          <div class="ern-section__big-content__section">
            <div class="v-image v-responsive ern-section__big-content__section__img theme--light">
              <div class="v-responsive__sizer"></div>
              <div
                class="v-image__image v-image__image--cover"
                style={{
                  background:
                    "url(https://bit-frame.net/../assets/img/earn/phone-new.png)",
                }}
              ></div>
              <div class="v-responsive__content"></div>
            </div>
          </div>
        </div>
        <div class="ern-section__advantages">
          <h1
            class="ern-section__advantages__section-title earn-title"
            earn="Advantages"
          ></h1>
          <div class="ern-section__advantages__section__wrapper">
            <div class="ern-section__advantages__section">
              <div class="ern-section__advantages__section__icon">
                <div class="v-image v-responsive ern-section__advantages__section__icon__img theme--light">
                  <div class="v-responsive__sizer"></div>
                  <div
                    class="v-image__image v-image__image--cover"
                    style={{
                      background:
                        "url(https://bit-frame.net/../assets/img/earn/percent.png)",
                    }}
                  ></div>
                  <div class="v-responsive__content"></div>
                </div>
              </div>
              <div class="ern-section__advantages__title earn-title">
                Passive income
              </div>
              <div class="ern-section__advantages__subtitle earn-subtitle">
                Profit from holding or lending your own assets by choosing a
                tool from the Earn catalog.
              </div>
            </div>
            <div class="ern-section__advantages__section">
              <div class="ern-section__advantages__section__icon">
                <div class="v-image v-responsive ern-section__advantages__section__icon__img theme--light">
                  <div class="v-responsive__sizer"></div>
                  <div
                    class="v-image__image v-image__image--cover"
                    style={{
                      background:
                        "url(https://bit-frame.net/../assets/img/earn/lock_empty.svg)",
                    }}
                  ></div>
                  <div class="v-responsive__content"></div>
                </div>
              </div>
              <div class="ern-section__advantages__title earn-title">
                Asset security
              </div>
              <div class="ern-section__advantages__subtitle earn-subtitle">
                We store 96% of digital assets on cold wallets and use WAFs to
                detect and block various attacks.
              </div>
            </div>
            <div class="ern-section__advantages__section">
              <div class="ern-section__advantages__section__icon">
                <div class="v-image v-responsive ern-section__advantages__section__icon__img theme--light">
                  <div class="v-responsive__sizer"></div>
                  <div
                    class="v-image__image v-image__image--cover"
                    style={{
                      background:
                        "url(https://bit-frame.net/../assets/img/earn/lightning.svg)",
                    }}
                  ></div>
                  <div class="v-responsive__content"></div>
                </div>
              </div>
              <div class="ern-section__advantages__title earn-title">
                Simple interaction
              </div>
              <div class="ern-section__advantages__subtitle earn-subtitle">
                Open or close investments in minutes. Investment statuses are
                displayed on your personal balance.
              </div>
            </div>
          </div>
        </div>
        <div class="questions questions-earn">
          <div class="questions-earn-title earn-title">Any questions?</div>
          <div class="v-item-group theme--light v-expansion-panels">
            <div aria-expanded="false" class="v-expansion-panel">
              <button type="button" class="v-expansion-panel-header">
                What is ZELLABIT Earn?
                <div class="v-expansion-panel-header__icon">
                  <i
                    aria-hidden="true"
                    class="v-icon notranslate mdi mdi-chevron-down theme--light"
                  ></i>
                </div>
              </button>
              <div class="v-expansion-panel-content">
                <div class="v-expansion-panel-content__wrap">
                  ZELLABIT Earn is a family of earning products from our
                  exchange. With ZELLABIT Earn you can earn passive income in
                  cryptocurrency without any effort.
                </div>
              </div>
            </div>
            <div aria-expanded="false" class="v-expansion-panel">
              <button type="button" class="v-expansion-panel-header">
                What is currently available from ZELLABIT Earn tools?
                <div class="v-expansion-panel-header__icon">
                  <i
                    aria-hidden="true"
                    class="v-icon notranslate mdi mdi-chevron-down theme--light"
                  ></i>
                </div>
              </button>
              <div class="v-expansion-panel-content">
                <div class="v-expansion-panel-content__wrap">
                  Right now, you can take advantage of Crypto Staking. In the
                  near future we will launch Crypto Lending. Stay tuned!
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

export default Earn;
