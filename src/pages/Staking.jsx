// Staking.jsx
import React, { useState } from "react";
import "./staking.css";
import toast from "react-hot-toast";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const cryptoPlans = [
  {
    icon: "https://bit-frame.net/assets/img/coins/BTC.png",
    asset: "BTC",
    name: "Bitcoin",
    rate: "17.39%",
    deposit: "0.005 - 120 BTC",
  },
  {
    icon: "https://bit-frame.net/assets/img/coins/USDT.png",
    asset: "USDT",
    name: "Tether",
    rate: "17.39%",
    deposit: "50 - 600,000 USDT",
  },
  {
    icon: "https://bit-frame.net/assets/img/coins/ETH.png",
    asset: "ETH",
    name: "Ethereum",
    rate: "17.39%",
    deposit: "0.05 - 400 ETH",
  },
  {
    icon: "https://bit-frame.net/assets/img/coins/USDC.png",
    asset: "USDC",
    name: "USD Coin",
    rate: "17.39%",
    deposit: "50 - 600,000 USDC",
  },
  {
    icon: "https://bit-frame.net/assets/img/coins/SOL.png",
    asset: "SOL",
    name: "Solana",
    rate: "17.39%",
    deposit: "1 - 10,000 SOL",
  },
  {
    icon: "https://bit-frame.net/assets/img/coins/TRX.png",
    asset: "TRX",
    name: "TRON",
    rate: "17.39%",
    deposit: "1,000 - 5,000,000 TRX",
  },
  {
    icon: "https://bit-frame.net/assets/img/coins/XRP.png",
    asset: "XRP",
    name: "Ripple",
    rate: "17.39%",
    deposit: "100 - 1,000,000 XRP",
  },
  {
    icon: "https://bit-frame.net/assets/img/coins/LTC.png",
    asset: "LTC",
    name: "Litecoin",
    rate: "17.39%",
    deposit: "1 - 5,000 LTC",
  },
  {
    icon: "https://bit-frame.net/assets/img/coins/TON.png",
    asset: "TON",
    name: "Toncoin",
    rate: "17.39%",
    deposit: "10 - 100,000 TON",
  },
  {
    icon: "https://bit-frame.net/assets/img/coins/DOGE.png",
    asset: "DOGE",
    name: "Dogecoin",
    rate: "17.39%",
    deposit: "1,000 - 10,000,000 DOGE",
  },
];

const periods = ["7", "14", "30", "90", "180", "360"];

export default function StakingPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <div className="staking-page">
        <section className="staking-hero">
          <div>
            <h1>Crypto Staking</h1>
            <p>
              Bit Frame Crypto Staking is a simple yet effective way to earn
              rewards. It allows you to gain profit by staking your crypto
              assets. Select the best staking plan for you based on its rate,
              lock-up period, and staking amount, and start earning today.
            </p>
          </div>
          <img
            src="https://bit-frame.net/assets/img/earn/intro.webp"
            alt="Vault"
          />
        </section>

        <section className="staking-plans">
          <h2>Plans</h2>
          <div className="tabs">
            <button className="active">Active Plans</button>
            <button>History</button>
          </div>
          <input
            type="text"
            placeholder="🔍 Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="staking-table">
            <div className="staking-table-header">
              <div>Assets</div>
              <div>Period</div>
              <div>Rate</div>
              <div>Deposit Range</div>
              <div></div>
            </div>
            {cryptoPlans
              .filter((plan) =>
                plan.asset.toLowerCase().includes(search.toLowerCase())
              )
              .map((plan, i) => (
                <div key={i} className="staking-table-row">
                  <div className="asset-cell">
                    <img src={plan.icon} alt={plan.asset} className="icon" />
                    <span>
                      <b>{plan.asset}</b> <br />
                      <small>{plan.name}</small>
                    </span>
                  </div>
                  <div className="periods">
                    {periods.map((p) => (
                      <button key={p}>{p} Days</button>
                    ))}
                  </div>
                  <div>{plan.rate}</div>
                  <div>{plan.deposit}</div>
                  <div>
                    <button
                      className="choose"
                      onClick={() =>
                        toast.error(
                          "Please complete your identity verification first."
                        )
                      }
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section className="staking-active">
          <h2>Your Active Plans</h2>
          <div className="staking-table">
            <div className="staking-table-header">
              <div>Assets</div>
              <div>Plan</div>
              <div>Deposited</div>
              <div>Realtime Profit</div>
              <div>Open Time</div>
              <div>Close Time</div>
              <div>Action</div>
            </div>
          </div>
          <div className="no-records">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7486/7486803.png"
              alt="no records"
            />
            <p>No Records</p>
          </div>
        </section>

        <section className="faq">
          <h2>Any questions?</h2>
          <details>
            <summary>What is a Crypto Staking?</summary>
            <p>
              Crypto staking is the process of locking up your crypto assets to
              support a blockchain network and confirm transactions, earning
              rewards in return.
            </p>
          </details>
        </section>
      </div>
      <Footer />
    </>
  );
}
