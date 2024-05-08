/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          //TODO: no need for this domain if I add my local images to the public folder
          protocol: "https",
          hostname: "images.pexels.com",
        },
      ],
    },
  };

export default nextConfig;
