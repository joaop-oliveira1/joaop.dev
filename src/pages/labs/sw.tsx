import { useState, useEffect } from "react";

function ServiceWorkerLab() {
  const [serviceWorker, setServiceWorker] = useState<ServiceWorker>();
  const [isOnline, setIsOnline] = useState(false);

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

    async function sendMessage(message, target) {
      if (target) target.postMessage(message);
      else serviceWorker.postMessage(message);
    }

    function sendStatusUpdate(target) {
      sendMessage({ isOnline }, target);
    }

    function onServiceWorkerMessage(event: MessageEvent) {
      const { data } = event;
      if (data.requestStatusUpdate) {
        console.log(
          "Received status update request from service worker, responding..."
        );
        sendStatusUpdate(event.ports && event.ports[0]);
      }
    }

    setIsOnline(
      navigator ? ("onLine" in navigator ? navigator.onLine : true) : false
    );
    navigator.serviceWorker.addEventListener("message", onServiceWorkerMessage);
    document.addEventListener("DOMContentLoaded", ready, false);
    initServiceWorker().catch(console.error);
  }, []);

  return <section></section>;
}

export default ServiceWorkerLab;
