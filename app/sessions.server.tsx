import { createCookieSessionStorage } from "@remix-run/node";

import { createThemeSessionResolver } from "remix-themes";

import { DOMAIN } from "./constants/url";

const isProduction = import.meta.env.PROD;

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    ...(isProduction ? { domain: DOMAIN, secure: true } : {}),
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
