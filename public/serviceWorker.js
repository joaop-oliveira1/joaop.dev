"use strict";

const version = 0.1;

async function handleActivation() {
  await clients.claim();
}

async function onInstall(event) {
  console.log("Service Worker Installed...");
}
function onActivate(event) {
  console.log("Service Worker Activated...");
  event.waitUntil(handleActivation());
}

async function main() {
  console.log("Service worker installed in version ", version);
}

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);

main().catch(console.error);
