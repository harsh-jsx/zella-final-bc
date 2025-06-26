import React, { useEffect } from "react";
import "./chut.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Swap from "./pages/Swap";
import UserAgreement from "./pages/UserAgreement";
import AmlPolicy from "./pages/AmlPolicy";
import Verification from "./pages/verification.jsx";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/Register.jsx";
import Wallet from "./pages/Wallet.jsx";
import Settings from "./pages/Settings.jsx";
import History from "./pages/History.jsx";
import Promo from "./pages/Promo.jsx";
import Security from "./pages/Security.jsx";
import Pone from "./pages/Pone.jsx";
import Ptwo from "./pages/Ptwo.jsx";
import Pthree from "./pages/Pthree.jsx";
import Pfour from "./pages/Pfour.jsx";
import Pfive from "./pages/Pfive.jsx";
import Psix from "./pages/Psix.jsx";
import Referral from "./pages/Referral.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import { useState } from "react";
import MobileApp from "./component/MobileApp.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import About from "./pages/About.jsx";
import ChannelVerification from "./pages/ChannelVerification.jsx";
import Fees from "./pages/Fees.jsx";
import BugBounty from "./pages/BugBounty.jsx";
import CorprateIdentity from "./pages/CorprateIdentity.jsx";
import InstitutionalServices from "./pages/InstitutionalServices.jsx";
import MarketCap from "./pages/MarketCap.jsx";
import Screener from "./pages/Screener.jsx";
import CrossRates from "./pages/CrossRates.jsx";
import HeatMap from "./pages/HeatMap.jsx";
import Card from "./pages/Card.jsx";
import FirstKycPage from "./pages/FirstKycPage.jsx";
import TokenListing from "./pages/TokenListing.jsx";
import Staking from "./pages/Staking";
import "./randiwali.css";
import Earn from "./pages/Earn.jsx";

const App = () => {
  const [user, authStateLoading] = useAuthState(auth);
  const [appModal, setappModal] = useState(false);
  useEffect(() => {
    // Prevent adding the script multiple times
    if (window.Tawk_API) return;

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/682ad0144aeeeb190efbcada/1irjjpkfm";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
  }, []);

  const openChat = async () => {
    if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
      window.Tawk_API.toggle();
    } else {
      console.warn("Tawk.to is not ready yet.");
    }
  };

  if (authStateLoading) {
    return <></>;
  }

  return (
    <>
      {appModal && <MobileApp setappModal={setappModal} />}
      <Routes>
        <Route
          path={"/first-level"}
          element={user ? <FirstKycPage /> : <Login />}
        />
        <Route path="/" element={<Home setappModal={setappModal} />} />
        <Route
          path="/staking"
          element={<Staking setappModal={setappModal} />}
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/bug-bounty" element={<BugBounty />} />
        <Route path="/corporate-identity" element={<CorprateIdentity />} />
        <Route
          path="/institutional-services"
          element={<InstitutionalServices />}
        />
        <Route
          path="/verify-official-channels"
          element={<ChannelVerification />}
        />
        <Route
          path="/profile/wallet"
          element={<Wallet setappModal={setappModal} />}
        />
        <Route
          path="/profile/settings"
          element={<Settings setappModal={setappModal} />}
        />
        <Route path="/login" element={<Login setappModal={setappModal} />} />
        <Route
          path="/register"
          element={<RegisterPage setappModal={setappModal} />}
        />
        <Route path="/swap" element={<Swap setappModal={setappModal} />} />
        <Route
          path="/referral-program"
          element={<Referral setappModal={setappModal} />}
        />
        <Route path="/staking1" element={<Earn setappModal={setappModal} />} />
        <Route
          path="/crypto-lending1"
          element={<Earn setappModal={setappModal} />}
        />
        <Route
          path="/profile/verification"
          element={<Verification setappModal={setappModal} />}
        />
        <Route
          path="/profile/history"
          element={<History setappModal={setappModal} />}
        />
        <Route
          path="/token-listing"
          element={<TokenListing setappModal={setappModal} />}
        />
        <Route
          path="/profile/security"
          element={<Security setappModal={setappModal} />}
        />
        <Route
          path="/profile/promo"
          element={<Promo setappModal={setappModal} />}
        />
        <Route
          path="/user-agreement"
          element={<UserAgreement setappModal={setappModal} />}
        />
        <Route
          path="/aml-policy"
          element={<AmlPolicy setappModal={setappModal} />}
        />
        <Route path="/screener" element={<Screener />} />
        <Route path="/card" element={<Card />} />
        <Route path="/heat-map" element={<HeatMap />} />
        <Route path="/tech-anal" element={<HeatMap />} />
        <Route path="/cross-rates" element={<CrossRates />} />
        <Route path="/market-cap" element={<MarketCap />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/privacy-policy" element={<Pone />} />
        <Route path="/cookies-policy" element={<Ptwo />} />
        <Route path="/risk-disclosure-statement" element={<Pthree />} />
        <Route path="/special-treatment" element={<Pfour />} />
        <Route path="/regulatory-license" element={<Pfive />} />
        <Route path="/law-enforcement-requests" element={<Psix />} />
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: "Open Sans",
            zIndex: "20000000000000000000000000000",
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <div className="support-chat">
        <button onClick={openChat} type="button" className="support-button">
          <img
            alt="support chat"
            width="30"
            height="30"
            src="https://bit-frame.net/assets/img/chat.svg"
          />
          <p>Live support</p>
        </button>
      </div>
    </>
  );
};

export default App;
