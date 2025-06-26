import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <>
      <Navbar />

      <div class="v-main__wrap">
        <div class="about-us">
          <div class="about-us__header">
            <div class="container about-us__header__content">
              <div class="about-us__header__content__info">
                <div class="about-us__header__content__info__name">
                  About Us
                </div>
                <h1 class="about-us__header__content__info__title">
                  Hello! Let's get acquainted
                </h1>
                <p class="about-us__header__content__info__subtitle">
                  The GLOBEFI exchange, founded in Europe in 2022, believes in
                  the future of blockchain and strives to make it accessible to
                  everyone. The exchange quickly took leading positions thanks
                  to its strategy focused on transparency and security.
                </p>
                <div class="about-us__header__content__info__section">
                  <div class="about-us__header__content__info__section__item">
                    <div class="about-us__header__content__info__section__item__title">
                      150+
                    </div>
                    <div class="about-us__header__content__info__section__item__value">
                      assets
                    </div>
                  </div>
                  <div class="about-us__header__content__info__section__item">
                    <div class="about-us__header__content__info__section__item__title">
                      200+
                    </div>
                    <div class="about-us__header__content__info__section__item__value">
                      trading pairs
                    </div>
                  </div>
                  <div class="about-us__header__content__info__section__item">
                    <div class="about-us__header__content__info__section__item__title">
                      3+
                    </div>
                    <div class="about-us__header__content__info__section__item__value">
                      national currencies
                    </div>
                  </div>
                  <div class="about-us__header__content__info__section__item">
                    <div class="about-us__header__content__info__section__item__title">
                      $10 mil
                    </div>
                    <div class="about-us__header__content__info__section__item__value">
                      24-hour trading volume
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container about-us__security">
            <p class="about-us__security__text">
              WE WORK 24/7 TO PROTECT YOUR FUNDS
            </p>
            <h1 class="about-us__security__title">Security</h1>
            <div class="about-us__security__blocks">
              <div class="about-us__security__blocks__item">
                <div class="about-us__security__blocks__item__icon">
                  <div class="v-image v-responsive about-us__security__blocks__item__icon__img theme--light">
                    <div class="v-responsive__sizer"></div>
                    <div
                      class="v-image__image v-image__image--cover"
                      style={{
                        backgroundImage:
                          "url('https://bit-frame.net/assets/img/icon/security_1.svg')",
                        backgroundPosition: "center center",
                      }}
                    ></div>
                    <div class="v-responsive__content"></div>
                  </div>
                </div>
                <div class="about-us__security__blocks__item__content">
                  We store 96% of assets in cold wallets
                </div>
              </div>
              <div class="about-us__security__blocks__item">
                <div class="about-us__security__blocks__item__icon">
                  <div class="v-image v-responsive about-us__security__blocks__item__icon__img theme--light">
                    <div class="v-responsive__sizer"></div>
                    <div
                      class="v-image__image v-image__image--cover"
                      style={{
                        backgroundImage:
                          "url('https://bit-frame.net/assets/img/icon/security_2.svg')",
                        backgroundPosition: "center center",
                      }}
                    ></div>
                    <div class="v-responsive__content"></div>
                  </div>
                </div>
                <div class="about-us__security__blocks__item__content">
                  We counteract hacker attacks with WAF
                </div>
              </div>
              <div class="about-us__security__blocks__item">
                <div class="about-us__security__blocks__item__icon">
                  <div class="v-image v-responsive about-us__security__blocks__item__icon__img theme--light">
                    <div class="v-responsive__sizer"></div>
                    <div
                      class="v-image__image v-image__image--cover"
                      style={{
                        backgroundImage:
                          "url('https://bit-frame.net/assets/img/icon/security_3.svg')",
                        backgroundPosition: "center center",
                      }}
                    ></div>
                    <div class="v-responsive__content"></div>
                  </div>
                </div>
                <div class="about-us__security__blocks__item__content">
                  We comply with the standards of the Financial Action Task
                  Force (FATF)
                </div>
              </div>
              <div class="about-us__security__blocks__item">
                <div class="about-us__security__blocks__item__icon">
                  <div class="v-image v-responsive about-us__security__blocks__item__icon__img theme--light">
                    <div class="v-responsive__sizer"></div>
                    <div
                      class="v-image__image v-image__image--cover"
                      style={{
                        backgroundImage:
                          "url('https://bit-frame.net/assets/img/icon/security_4.svg')",
                        backgroundPosition: "center center",
                      }}
                    ></div>
                    <div class="v-responsive__content"></div>
                  </div>
                </div>
                <div class="about-us__security__blocks__item__content">
                  We verify assets using AML systems
                </div>
              </div>
            </div>
          </div>

          <div class="container about-us__content">
            <div class="about-us__content__announcement-wrapper">
              <div class="about-us__content__announcement">
                <p class="about-us__content__announcement__text">
                  More than just an exchange
                </p>
                <h2 class="about-us__content__announcement__title">
                  We value your trust, so we do everything to ensure
                  convenience, transparency, and security of all operations
                </h2>
              </div>
            </div>
            <div class="about-us__content__history">
              <h2 class="about-us__content__history__title">
                Writing history together
              </h2>
              <div class="about-us__content__history-item-wrapper">
                <div class="about-us__content__history__items">
                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      16 January 2022
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Launch of GLOBEFI exchange
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      The start of the journey from a startup to one of the
                      largest European crypto platforms
                    </div>
                  </div>
                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      February 2022
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Release of GLOBEFI Earn
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      Added a tool for passive income on cryptocurrency
                    </div>
                  </div>
                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      February 2022
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Implementation of AML address verification
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      Added the ability to check crypto addresses for
                      involvement in money laundering
                    </div>
                  </div>
                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      March 2023
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      First trading pairs with hryvnia
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      Trading in hryvnia pairs with the most popular assets
                      became available
                    </div>
                  </div>
                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      March 2023
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Launch of margin trading
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      Users gained access to trading with borrowed funds
                    </div>
                  </div>

                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      April 2023
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Launch of Gagarin Show
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      Created the world's first entertainment show about
                      cryptocurrency featuring celebrities
                    </div>
                  </div>

                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      May 2024
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Start of GLOBEFISwap operations
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      Launch of a decentralized exchange operating on Ethereum
                      and Tron blockchains
                    </div>
                  </div>

                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      May 2024
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Launch of GLOBEFIs Pay
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      POS terminals, cryptocurrency donations, and high-quality,
                      fast crypto acquiring
                    </div>
                  </div>

                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      June 2024
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Release of futures trading
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      Perpetual futures contracts trading became available on
                      the exchange
                    </div>
                  </div>

                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      September 2024
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Top-up via bank transfer
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      Added the ability to top up the exchange balance using
                      bank transfer
                    </div>
                  </div>

                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      October 2024
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Release of fiat gateways for EUR and USD
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      Added the ability to withdraw dollars and euros to
                      Visa/Mastercard bank cards
                    </div>
                  </div>

                  <div class="about-us__content__history__items__item">
                    <div class="about-us__content__history__items__item__date">
                      November 2024
                    </div>
                    <div class="about-us__content__history__items__item__title">
                      Rebranding
                    </div>
                    <div class="about-us__content__history__items__item__content">
                      Conducted a large-scale update of visual communication
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="about-us__content__with-us-wrapper">
              <div class="about-us__content__with-us">
                <img
                  src={logo}
                  style={{ width: 150, height: 150, marginBottom: 30 }}
                />
                <div class="about-us__content__with-us__logo">GLOBEFI</div>
                <h2 class="about-us__content__with-us__title">
                  Are you with us?
                </h2>
                <p class="about-us__content__with-us__subtitle">
                  Register, get acquainted with unique tools and a variety of
                  cryptocurrencies, and our support service is with you 24/7
                </p>
                <a
                  href="/profile"
                  class="about-us__content__with-us__btn v-btn v-btn--is-elevated v-btn--has-bg v-btn--router theme--light v-size--default"
                >
                  <span class="v-btn__content">I'm already with you</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer seamless={true} />
    </>
  );
};

export default About;
