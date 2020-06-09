const presets = [
  [
    '@babel/env',
    {
      targets: {
        esmodules: true,
        android: '67',
        ios: '12',
        edge: '17',
        firefox: '60',
        chrome: '64',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
      corejs: '3.1.4',
    },
  ],
];

module.exports = { presets };
