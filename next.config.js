/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: process?.env?.NEXT_PUBLIC_ASSET_CDN ?? undefined,
  images: {
    domains: [
      "devpublicbucket.blob.core.windows.net",
      "media-dev-bxgwfxdvhfemexbk.z01.azurefd.net",
      "media-prod-b5ffbpg5c6bbd2h9.z01.azurefd.net",
      "prodpublicbucket.blob.core.windows.net",
      "media.e-valy.com",
      "lh3.googleusercontent.com",
    ],
  },
};
