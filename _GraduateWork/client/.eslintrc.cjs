module.exports = {
  env: {
    // где будет исполняться наш код
    browser: true,
    es2021: true
  },
  /* Пресет с настройками. prettier должен быть последним. 
  Он удаляет некоторые правила eslint из-за которых могут возникать конфликты. */
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parser: '@babel/eslint-parser', // Парсер для обработки jsx кода
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    },
    ecmaVersion: 11, // версия стандарта JavaScript. Последний 12 (2021).
    sourceType: 'module' // Позволяет использовать import/export
  },
  // Здесь мы подключаем используемые плагины.
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
    // 'react/prop-types': 0 // Отключаем правило проверки передаваемых типов.
  }
};
