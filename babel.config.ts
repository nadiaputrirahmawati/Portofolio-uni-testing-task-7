module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { esmodules: true } }], // Mendukung ECMAScript Modules
      '@babel/preset-react',  // Mendukung JSX
      '@babel/preset-typescript', // Mendukung TypeScript
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs',  // Untuk mendukung CommonJS jika diperlukan
    ],
  };
  