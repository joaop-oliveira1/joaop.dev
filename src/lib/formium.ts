import { createClient } from "@formium/client";

export const formium = createClient(process.env.NEXT_PUBLIC_FORMIUM_PROJECTID, {
  apiToken: process.env.FORMIUM_TOKEN,
});

export const getContactForm = async () => {
  return formium.getFormBySlug("contact-me");
};
