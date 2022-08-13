import { createClient } from "microcms-js-sdk"

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "jamstack-blog-unripe", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.API_KEY,
});