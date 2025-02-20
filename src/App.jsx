import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import HomePage from "./pages/home";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UMKMPage from "./pages/umkm";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landingpage";
import { Helmet } from "react-helmet";

function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<HomePage />}>
            <Route index element={<Dashboard />} />
            <Route path="knm" element={<></>} />
            <Route path="umkm" element={<UMKMPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
