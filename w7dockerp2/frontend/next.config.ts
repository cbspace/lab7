import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  allowedDevOrigins: ['10.0.0.100', '10.0.0.119'], /*change to your IP */
}

export default nextConfig;
