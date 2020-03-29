module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    test: {
      presets: [
        // A Babel preset that can automatically determine the Babel plugins and polyfills
        // https://github.com/babel/babel-preset-env
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            },
            modules: 'commonjs',
            useBuiltIns: false,
            debug: false
          }
        ]
      ],
      plugins: [
        'transform-es2015-modules-commonjs',
        'babel-plugin-dynamic-import-node'
      ]
    }
  }
}
