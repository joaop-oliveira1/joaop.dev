import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  const [serviceWorker, setServiceWorker] = useState<ServiceWorker>();
  async function sendMessage(message, target) {
    if (target) target.postMessage(message);
    else serviceWorker.postMessage(message);
  }
  useEffect(() => {
    const isOnline = navigator
      ? "onLine" in navigator
        ? navigator.onLine
        : true
      : false;
    const serviceWorkerAvailable = "serviceWorker" in navigator;

    function isOffline() {
      return !isOnline;
    }

    async function initServiceWorker() {
      const serviceWorkerRegistration = await navigator.serviceWorker.register(
        "/serviceWorker.js",
        { updateViaCache: "none" }
      );
      setServiceWorker(
        serviceWorkerRegistration.installing ||
          serviceWorkerRegistration.waiting ||
          serviceWorkerRegistration.active
      );
      navigator.serviceWorker.addEventListener(
        "controllerchange",
        function onControllerChange() {
          setServiceWorker(navigator.serviceWorker.controller);
        }
      );
      navigator.serviceWorker.addEventListener("message", function ({ data }) {
        if (data.requestStatusUpdate) console.log(data);
      });
    }

    function ready() {
      if (isOffline()) document.title = `${document.title} - Offline`;
      window.addEventListener("online", function online() {
        document.title = document.title = `${document.title} - Online`;
      });
      window.addEventListener("offline", function offline() {
        document.title = document.title = `${document.title} - Online`;
      });
    }

    document.addEventListener("DOMContentLoaded", ready, false);
    initServiceWorker().catch(console.error);
  }, []);

  return (
    <>
      <Head>
        <title>joaop.dev</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />{" "}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
