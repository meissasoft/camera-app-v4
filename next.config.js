/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/**
 * @type {import('next').NextConfig}
 */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  env: {
    // env for client side
    ROLLBAR_ID: process.env.ROLLBAR_ID,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  i18n,
  trailingSlash: true,
};

module.exports = nextConfig;
