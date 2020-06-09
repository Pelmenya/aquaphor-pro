module.exports = {
  root: true,

  levels: [ { path: 'src/blocks' } ],

  modules: {
    'bem-tools': {
      plugins: {
        create: {
          // Настройки уровней, которые используются только
          // в `bem-tools-create`
          levels: [
            {
              path: 'src/blocks', // Уровень по умолчанию, создаём сущности тут,
              // если уровень не задан
              default: true,
              // Технологии по умолчанию для создания блоков на уровне
              techs: [ 'css' ],
            },
          ],
        },
      },
    },
  },
};
