import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Fees = () => {
  // Data for payment fees table
  const paymentFees = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      icon: "https://bit-frame.net/assets/img/coins/BTC.png",
      minDeposit: "0.0005 BTC",
      depositFee: "1.0%",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      icon: "https://bit-frame.net/assets/img/coins/ETH.png",
      minDeposit: "0.005 ETH",
      depositFee: "1.0%",
    },
    {
      symbol: "USDT",
      name: "Tether",
      icon: "https://bit-frame.net/assets/img/coins/USDT.png",
      minDeposit: "50 USDT",
      depositFee: "1.0%",
    },
    {
      symbol: "USDC",
      name: "USD Coin",
      icon: "https://bit-frame.net/assets/img/coins/USDC.png",
      minDeposit: "50 USDC",
      depositFee: "1.0%",
    },
    {
      symbol: "TRX",
      name: "TRON",
      icon: "https://bit-frame.net/assets/img/coins/TRX.png",
      minDeposit: "20 TRX",
      depositFee: "1.0%",
    },
    {
      symbol: "TON",
      name: "Toncoin",
      icon: "https://bit-frame.net/assets/img/coins/TON.png",
      minDeposit: "1 TON",
      depositFee: "1.0%",
    },
    {
      symbol: "BNB",
      name: "BNB BEP-20",
      icon: "https://bit-frame.net/assets/img/coins/BNB.png",
      minDeposit: "0.01 BNB",
      depositFee: "1.0%",
    },
    {
      symbol: "XRP",
      name: "Ripple",
      icon: "https://bit-frame.net/assets/img/coins/XRP.png",
      minDeposit: "10 XRP",
      depositFee: "1.0%",
    },
    {
      symbol: "SOL",
      name: "Solana",
      icon: "https://bit-frame.net/assets/img/coins/SOL.png",
      minDeposit: "0.1 SOL",
      depositFee: "1.0%",
    },
    {
      symbol: "LTC",
      name: "Litecoin",
      icon: "https://bit-frame.net/assets/img/coins/LTC.png",
      minDeposit: "0.025 LTC",
      depositFee: "1.0%",
    },
    {
      symbol: "DOGE",
      name: "Dogecoin",
      icon: "https://bit-frame.net/assets/img/coins/DOGE.png",
      minDeposit: "50 DOGE",
      depositFee: "1.0%",
    },
    {
      symbol: "ADA",
      name: "Cardano",
      icon: "https://bit-frame.net/assets/img/coins/ADA.png",
      minDeposit: "2 ADA",
      depositFee: "1.0%",
    },
    {
      symbol: "DASH",
      name: "Dash",
      icon: "https://bit-frame.net/assets/img/coins/DASH.png",
      minDeposit: "0.05 DASH",
      depositFee: "1.0%",
    },
    {
      symbol: "BCH",
      name: "Bitcoin Cash",
      icon: "https://bit-frame.net/assets/img/coins/BCH.png",
      minDeposit: "0.01 BCH",
      depositFee: "1.0%",
    },
    {
      symbol: "ZEC",
      name: "Zcash",
      icon: "https://bit-frame.net/assets/img/coins/ZEC.png",
      minDeposit: "0.05 ZEC",
      depositFee: "1.0%",
    },
    {
      symbol: "NOT",
      name: "Notcoin",
      icon: "https://bit-frame.net/assets/img/coins/NOT.png",
      minDeposit: "50 NOT",
      depositFee: "1.0%",
    },
    {
      symbol: "ETC",
      name: "Ethereum Classic",
      icon: "https://bit-frame.net/assets/img/coins/ETC.png",
      minDeposit: "0.2 ETC",
      depositFee: "1.0%",
    },
    {
      symbol: "EOS",
      name: "EOS",
      icon: "https://bit-frame.net/assets/img/coins/EOS.png",
      minDeposit: "1 EOS",
      depositFee: "1.0%",
    },
    {
      symbol: "XLM",
      name: "Stellar",
      icon: "https://bit-frame.net/assets/img/coins/XLM.png",
      minDeposit: "10 XLM",
      depositFee: "1.0%",
    },
    {
      symbol: "SHIB",
      name: "SHIBA INU",
      icon: "https://bit-frame.net/assets/img/coins/SHIB.png",
      minDeposit: "1000000 SHIB",
      depositFee: "1.0%",
    },
  ];

  const handleDeposit = () => {
    window.location.replace("../profile/wallet?action=deposit");
  };
  const handleSwap = () => {
    window.location.replace("../swap");
  };
  const handleWithdraw = () => {
    window.location.replace("../profile/wallet?action=withdraw");
  };

  return (
    <div>
      <Navbar />
      <div className="v-main__wrap">
        <div className="cryptocurrency-container" style={{ height: "100%" }}>
          <div className="container small-container">
            <h1 className="cryptocurrency__title">Fees</h1>
            <p className="cryptocurrency__subtitle">
              Withdrawal fees depend on the value of the blockchain and asset
              prices. They are subject to change without notice. Always check
              the information.
            </p>
            <div className="cryptocurrency__content">
              <h4 className="cryptocurrency__content__title">Trading Fees</h4>
              <div className="cryptocurrency__content__commissions">
                <div className="cryptocurrency__content__commissions__item">
                  <p className="cryptocurrency__content__commissions__item__title">
                    Standard trading fee. Please note that for some pairs the
                    trading fee may differ but does not exceed 0.1%
                  </p>
                  <div className="spacer" />
                  <div className="cryptocurrency__content__commissions__item__value">
                    0.1%
                  </div>
                </div>
                <div className="cryptocurrency__content__commissions__item">
                  <p className="cryptocurrency__content__commissions__item__title">
                    Daily fee for using funds in margin trading and loans
                  </p>
                  <div className="spacer" />
                  <div className="cryptocurrency__content__commissions__item__value">
                    0.078%
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 30 }}>
              <h1 className="cryptocurrency__title">Payment Fees</h1>
              <p className="cryptocurrency__subtitle">
                Checkout our Payment Fees
              </p>
              <div className="v-data-table profile-coins-table theme--light">
                <div className="v-data-table__wrapper">
                  <table>
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                    </colgroup>
                    <thead className="v-data-table-header">
                      <tr>
                        <th
                          role="columnheader"
                          scope="col"
                          className="text-start"
                        >
                          <span style={{ whiteSpace: "nowrap" }}>
                            Payment method
                          </span>
                        </th>
                        <th
                          role="columnheader"
                          scope="col"
                          className="text-start"
                        >
                          <span style={{ whiteSpace: "nowrap" }}>
                            Min deposit
                          </span>
                        </th>
                        <th
                          role="columnheader"
                          scope="col"
                          className="text-start"
                        >
                          <span style={{ whiteSpace: "nowrap" }}>
                            Deposit fee
                          </span>
                        </th>
                        <th
                          role="columnheader"
                          scope="col"
                          className="text-right"
                        >
                          <span style={{ whiteSpace: "nowrap" }} />
                        </th>
                      </tr>
                    </thead>
                    <tbody id="desktop__coins-table">
                      {paymentFees.map((coin) => (
                        <tr className="markets-coin" key={coin.symbol}>
                          <td className="text-start">
                            <div className="table-name">
                              <div className="v-image v-responsive table-name__icon theme--light">
                                <div
                                  className="v-responsive__sizer"
                                  style={{ paddingBottom: "100%" }}
                                />
                                <div
                                  className="v-image__image v-image__image--cover v-image__rounded"
                                  style={{
                                    backgroundPosition: "center center",
                                    backgroundImage: `url(${coin.icon})`,
                                  }}
                                />
                                <div
                                  className="v-responsive__content"
                                  style={{ width: 96 }}
                                />
                              </div>
                              <div
                                className="table-name__names"
                                style={{ marginRight: 30 }}
                              >
                                <div
                                  className="table-name__names__short"
                                  style={{ whiteSpace: "nowrap" }}
                                >
                                  {coin.symbol}
                                </div>
                                <div className="spacer" />
                                <div
                                  className="table-name__names__full"
                                  style={{ whiteSpace: "nowrap" }}
                                >
                                  {coin.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-start">
                            <div className="table-name">
                              <div className="table-name__names">
                                <div
                                  className="table-name__names__short"
                                  style={{ whiteSpace: "nowrap" }}
                                >
                                  {coin.minDeposit}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-start">
                            <div className="table-name">
                              <div className="table-name__names">
                                <div
                                  className="table-name__names__short"
                                  style={{ whiteSpace: "nowrap" }}
                                >
                                  {coin.depositFee}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <div
                              className="table-button-section"
                              style={{
                                display: "flex",
                                gap: 5,
                                justifyContent: "right",
                              }}
                            >
                              <button
                                onClick={handleDeposit}
                                type="button"
                                className="custom-btn user_balance__btn-circuit v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                              >
                                <span className="v-btn__content">Deposit</span>
                              </button>
                              <button
                                onClick={handleSwap}
                                type="button"
                                className="custom-btn user_balance__btn-circuit v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                              >
                                <span className="v-btn__content">Swap</span>
                              </button>
                              <button
                                onClick={handleWithdraw}
                                type="button"
                                className="custom-btn user_balance__btn-circuit v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                              >
                                <span className="v-btn__content">Withdraw</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default Fees;
