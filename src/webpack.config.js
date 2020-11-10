let JS_DEST = __dirname + `/../dist/js`;

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'production',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  // エントリーポイントの設定
  entry: {
    index: ['./js/index.js'],
  },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: '[name].js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: JS_DEST,
  },
  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: __dirname + '/../dist/',
    open: true,
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                '@babel/preset-env',
              ],
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向けの指定
  target: ['web', 'es5'],
};
