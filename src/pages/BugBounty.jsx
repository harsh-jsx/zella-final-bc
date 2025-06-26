import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const BugBounty = () => {
  return (
    <div>
      <Navbar />
      <div class="v-main__wrap">
        <div class="bug-bounty">
          <div class="bug-bounty__header">
            <div class="container bug-bounty__header__container">
              <h1 class="bug-bounty__header__container__title">Bug Bounty</h1>
              <p class="bug-bounty__header__container__subtitle">
                Security is our top priority. The GlobeFi cryptocurrency
                exchange cares about the security of each user. Therefore, we
                encourage finding vulnerabilities on the exchange and pay
                rewards for their discovery.
              </p>
              <div class="bug-bounty__header__container__items">
                <h3 class="bug-bounty__header__container__items__title">
                  To be eligible to receive a reward for finding a
                  vulnerability, you need to:
                </h3>
                <div class="bug-bounty__header__container__items__wrapper">
                  <div class="bug-bounty__header__container__items__item">
                    <div class="bug-bounty__header__container__items__item__icon">
                      <svg
                        class="bug-bounty__header__container__items__item__icon__img"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM12 3a9 9 0 100 18 9 9 0 000-18zm.75 4.5a.75.75 0 00-1.5 0V12c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V7.5z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="bug-bounty__header__container__items__item__title">
                        Inform us about the vulnerability
                      </div>
                      <div class="bug-bounty__header__container__items__item__content">
                        Do not disclose information about it and give us
                        sufficient time to fix the vulnerability
                      </div>
                    </div>
                  </div>
                  <div class="bug-bounty__header__container__items__item">
                    <div class="bug-bounty__header__container__items__item__icon">
                      <svg
                        class="bug-bounty__header__container__items__item__icon__img"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.125 4.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.75 2.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM3 15.375a4.125 4.125 0 118.25 0v4.875a.75.75 0 01-1.5 0v-4.875a2.625 2.625 0 00-5.25 0v4.875a.75.75 0 01-1.5 0v-4.875zM16.875 9a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zM13.5 10.875a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM12.75 19.125a4.125 4.125 0 118.25 0v1.125a.75.75 0 01-1.5 0v-1.125a2.625 2.625 0 00-5.25 0v1.125a.75.75 0 01-1.5 0v-1.125z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="bug-bounty__header__container__items__item__title">
                        Make the necessary efforts
                      </div>
                      <div class="bug-bounty__header__container__items__item__content">
                        To avoid damage to the exchange and its users.
                      </div>
                    </div>
                  </div>
                  <div class="bug-bounty__header__container__items__item">
                    <div class="bug-bounty__header__container__items__item__icon">
                      <svg
                        class="bug-bounty__header__container__items__item__icon__img"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 4.5a7.5 7.5 0 00-5.625 12.46c.212.241.318.537.304.848-.012.283-.12.524-.226.703-.206.344-.537.665-.791.904l-.09.085H12a7.5 7.5 0 006.875-10.502.75.75 0 011.375-.6A9 9 0 0112 21H4.654c-.084-.001-.24-.003-.407-.046a1.038 1.038 0 01-.596-.404 1.007 1.007 0 01-.116-.928c.077-.22.214-.405.324-.535.177-.21.425-.44.635-.635.05-.045.096-.09.14-.13a4.07 4.07 0 00.489-.518A9 9 0 0115.75 3.815a.75.75 0 11-.626 1.365A7.47 7.47 0 0012 4.5z"
                          fill="#fff"
                        ></path>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.515 5.455c.301.285.314.76.03 1.06l-5.25 5.55a.75.75 0 01-1.075.015L9.67 9.53a.75.75 0 111.06-1.06l2.005 2.004 4.72-4.99a.75.75 0 011.06-.029z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="bug-bounty__header__container__items__item__title">
                        Do not mislead
                      </div>
                      <div class="bug-bounty__header__container__items__item__content">
                        Users and/or exchange employees during the search and
                        elimination of the vulnerability.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container second-content">
            <div class="second-content__reward">
              <h2 class="second-content__reward__title">Reward</h2>
              <p class="second-content__reward__subtitle">
                We do not limit the maximum amount of rewards and can increase
                the reward depending on the severity of the vulnerability. You
                are more likely to receive an increased reward if you show how
                the vulnerability can be used to cause maximum harm.
              </p>
              <p class="second-content__reward__list-title">
                Here is a list of approximate rewards for finding
                vulnerabilities:
              </p>
              <div class="second-content__reward__list">
                <div class="second-content__reward__list__item">
                  <p class="second-content__reward__list__item__name">
                    Remote code execution
                  </p>
                  <div class="spacer"></div>
                  <p class="second-content__reward__list__item__value">$5000</p>
                </div>
                <div class="second-content__reward__list__item">
                  <p class="second-content__reward__list__item__name">
                    Manipulation of user balances
                  </p>
                  <div class="spacer"></div>
                  <p class="second-content__reward__list__item__value">$3000</p>
                </div>
                <div class="second-content__reward__list__item">
                  <p class="second-content__reward__list__item__name">
                    XSS/CSRF/Clickjacking affecting actions with user
                    balances/trading/exchange/deposit
                  </p>
                  <div class="spacer"></div>
                  <p class="second-content__reward__list__item__value">$2000</p>
                </div>
                <div class="second-content__reward__list__item">
                  <p class="second-content__reward__list__item__name">
                    Theft of information related to passwords/API keys/personal
                    information
                  </p>
                  <div class="spacer"></div>
                  <p class="second-content__reward__list__item__value">$2000</p>
                </div>
                <div class="second-content__reward__list__item">
                  <p class="second-content__reward__list__item__name">
                    Partial authentication bypass
                  </p>
                  <div class="spacer"></div>
                  <p class="second-content__reward__list__item__value">$1500</p>
                </div>
                <div class="second-content__reward__list__item">
                  <p class="second-content__reward__list__item__name">
                    Other vulnerabilities that can lead to financial losses or
                    data leakage
                  </p>
                  <div class="spacer"></div>
                  <p class="second-content__reward__list__item__value">$500</p>
                </div>
                <div class="second-content__reward__list__item">
                  <p class="second-content__reward__list__item__name">
                    Other CSRF (except CSRF logout)
                  </p>
                  <div class="spacer"></div>
                  <p class="second-content__reward__list__item__value">$500</p>
                </div>
              </div>
              <p class="second-content__reward__list-title">
                Rewards will NOT be granted for DDoS, Self-XSS, Spam, Social
                engineering attacks.
              </p>
            </div>
            <div class="second-content__support">
              <h4 class="second-content__support__title">
                Have you found a vulnerability?
              </h4>
              <p class="second-content__support__subtitle">
                To report it, send us an email; we will contact you as soon as
                possible and resolve the issue.
              </p>
              <a
                href="mailto:support@GlobeFi.net"
                class="second-content__support__link-primary"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@GlobeFi.net"
                class="second-content__support__link"
              >
                Send vulnerability to Security
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer seamless={true} />
    </div>
  );
};

export default BugBounty;
