module.exports = {
  reactStrictMode: true, // Enables React's Strict Mode for development and production

  // If you need to use environment variables, you can define them here
  env: {
    // Example: API_URL: 'https://api.example.com',
  },

  // Base path and asset prefix are not needed for Vercel deployments in most cases
  // basePath: '',
  // assetPrefix: '',

  // This section is useful if you need to modify the Webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Modify the config as needed

    return config;
  },

  // Other configurations as per your application's need
  // ...
};
