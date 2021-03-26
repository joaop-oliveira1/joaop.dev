"use strict";

const version = 0.2;
let isOnline = true;


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

function onMessage({ data }) {
  if (data.statusUpdate) {
    ({ isOnline } = data.statusUpdate);
    console.log(`Service Worker (v${verion}) status update, isOnline:${isOnline}` )
  }
}

async function sendMessage(message) {
  const allClients = await clients.matchAll({ includeUncontrolled: true });
  return Promise.all(
    allClients.map(function clientMessage(client) {
      const channel = new MessageChannel();
      channel.port1.onmessage = onMessage;
      return client.postMessage(message, [channel.port2])
    })
  )
}

async function main() {
  await senMessage({ requestStatusUpdate: true })
  console.log("Service worker installed in version ", version);
}

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);
self.addEventListener("message", onMessage)

main().catch(console.error);
