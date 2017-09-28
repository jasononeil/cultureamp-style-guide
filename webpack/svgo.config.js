module.exports = {
  plugins: [
    // embedded titles are nonsense; we specify accessibility titles per icon
    { removeTitle: true },
    // convert black to currentColor, so this color can be controlled per icon
    {
      convertColors: {
        currentColor: /black|#000|#000000/,
      },
    },
  ],
};
