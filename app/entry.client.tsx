/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";
import { posthog } from "posthog-js";

function PosthogInit() {
  useEffect(() => {
    posthog.init("phc_7Eum0tsq6KRmwh2awASgsRhzUsj3WRUn9Gbp0S2W9e", {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      person_profiles: "always",
      capture_pageview: true,
      capture_pageleave: true,
    });
  }, []);

  return null;
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
      <PosthogInit />
    </StrictMode>
  );
});
