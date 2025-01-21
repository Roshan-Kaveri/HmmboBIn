module.exports = {
  server: {
    port: process.env.PORT || 3000,
  },
  autoUpdate: {
    enabled: false,
    packageJsonURL:
      "https://raw.githubusercontent.com/juliarn/PasteServer/master/package.json",
    zipURL: "https://github.com/juliarn/PasteServer/archive/master.zip",
    keepFiles: [],
    devPackageJsonURL:
      "https://raw.githubusercontent.com/juliarn/PasteServer/development/package.json",
    devZipUrl: "https://github.com/juliarn/PasteServer/archive/development.zip",
  },
  storage: {
    type: "redis",
    host: "redis-15285.c301.ap-south-1-1.ec2.redns.redis-cloud.com",
    port: 15285,
    password: "V017b2kzoCpkBAJISvnDXX0K0L1TgQav",
    user: "default", // You can adjust the user based on your Redis setup
    documentExpireInMs: 3 * 24 * 60 * 60 * 1000, // Expire after 3 days
  },
  createRateLimit: {
    timeInMs: 60 * 1000,
    maxRequestsPerTime: 15,
  },
  document: {
    dataLimit: "2mb",
    maxLength: 400000,
  },
  keyGenerator: {
    keyLength: 10,
    keyChars: "abcdefghijklmnopqrstivwxyz0123456789",
    withToUpperCase: true,
  },
};
