module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    [
      '@babel/preset-react',
      {
        pragma: 'dom', // default pragma is React.createElement (only in classic runtime)
        pragmaFrag: 'DomFrag', // default is React.Fragment (only in classic runtime)
        throwIfNamespace: false, // defaults to true
        runtime: 'classic', // defaults to classic
        // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
      },
    ],
    ['@babel/preset-flow'],
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
  ],
};
