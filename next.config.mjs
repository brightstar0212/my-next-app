/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.vectorlogo.zone"], // Allow images from this domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ronan-murphy.com",
        port: "", // Leave empty if no port is specified
        pathname: "/Images/Projects/**", // Adjust the path as necessary
      },
    ],
  },
};

export default nextConfig;
