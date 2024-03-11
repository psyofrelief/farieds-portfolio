/** @type {import('next').NextConfig} */
import TerserPlugin from 'terser-webpack-plugin';
const nextConfig = {

  webpack: (config, { isServer }) => {
    // Apply Terser plugin only in production mode
    if (!isServer && process.env.NODE_ENV === 'production') {
      config.optimization.minimizer.push(new TerserPlugin());
    }
    return config;
  },
};

export default nextConfig;
