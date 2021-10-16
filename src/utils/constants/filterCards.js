const filterCards = [
  {
    enName: 'First courses',
    ruName: 'Первые блюда',
    path: '/first-courses'
  },
  {
    enName: 'Second courses',
    ruName: 'Вторые блюда',
    path: '/second-courses',
    categories: [
      {
        ruName: 'Стейки',
        enName: 'Steaks',
        path: '/steaks'
      },
      {
        ruName: 'Из рыбы',
        enName: 'Fish dishes',
        path: '/fish'
      },
      {
        ruName: 'Из баранины',
        enName: 'Lamb dishes',
        path: '/lamb'
      },
      {
        ruName: 'Из говядины',
        enName: 'Beef dishes',
        path: '/beef'
      },
      {
        ruName: 'Из курицы',
        enName: 'Chicken dishes',
        path: '/chicken'
      },
      {
        ruName: 'Колбаски на гриле',
        enName: 'Grilled sausages',
        path: '/grilled-sausages'
      }
    ]
  },
  {
    enName: 'Wood-fired pizza',
    ruName: 'Пицца на дровах',
    path: '/pizza'
  },
  {
    enName: 'Burgers',
    ruName: 'Бургеры',
    path: '/burgers'
  },
  {
    enName: 'Salads',
    ruName: 'Салаты',
    path: '/salads'
  },
  {
    enName: 'Warm salads',
    ruName: 'Тёплые салаты',
    path: '/warm-salads'
  },
  {
    enName: 'Desserts',
    ruName: 'Дессерты',
    path: '/deserts'
  },
  {
    enName: 'Italian pies',
    ruName: 'Итальянские пироги',
    path: '/italian-pies'
  },
  {
    enName: 'Focaccia',
    ruName: 'Фокачча',
    path: '/focaccia'
  },
  {
    enName: 'Хлеб',
    ruName: 'Bread',
    path: '/bread'
  },
  {
    enName: 'Snacks',
    ruName: 'Закуски',
    path: '/snacks'
  },
  {
    enName: 'Fries',
    ruName: 'Фри',
    path: '/fries'
  },
  {
    enName: 'Sauces',
    ruName: 'Соусы',
    path: '/sauces'
  },
  {
    enName: 'Pasta',
    ruName: 'Паста',
    path: '/pasta'
  },
  {
    enName: 'Side dishes',
    ruName: 'Гарниры',
    path: '/side-dishes'
  },
  {
    enName: 'Bar menu',
    ruName: 'Алкогольное меню',
    path: '/bar-menu',
    categories: [
      {
        ruName: 'Коктейли',
        enName: 'Cocktails',
        path: '/сocktails'
      },
      {
        ruName: 'Глинтвейн',
        enName: 'Mulled wine',
        path: '/mulled-wine'
      },
      {
        ruName: 'Вина',
        enName: 'Wines',
        path: '/wines',
        subCategories: [
          {
            ruName: 'Домашние вина',
            enName: 'Homemade wines',
            path: '/homemade-wines'
          },
          {
            ruName: 'Игристые вина',
            enName: 'Sparkling wines',
            path: '/sparkling-wines'
          },
          {
            ruName: 'Грузия Kartuli Marani',
            enName: 'Georgia Kartuli Marani',
            path: '/georgia-kartuli-marani'
          },
          {
            ruName: 'Фруктовые вина',
            enName: 'Fruit wines',
            path: '/fruit-wines'
          }
        ]
      },
      {
        ruName: 'Водка',
        enName: 'Vodka',
        path: '/vodka'
      },
      {
        ruName: 'Ром',
        enName: 'Rum',
        path: '/rum'
      },
      {
        ruName: 'Мартини',
        enName: 'Martini',
        path: '/martini'
      },
      {
        ruName: 'Текила',
        enName: 'Tequila',
        path: '/tequila'
      }
    ]
  },
  {
    enName: 'Soft drinks',
    ruName: 'Безалкогольное меню',
    path: '/soft-drinks',
    categories: [
      {
        ruName: 'Безалкогольные коктейли',
        enName: 'Non-alcoholic cocktails',
        path: '/non-alcoholic-cocktails'
      },
      {
        ruName: 'Смузи',
        enName: 'Smoothie',
        path: '/smoothie'
      },
      {
        ruName: 'Домашние напитки',
        enName: 'Homemade drinks',
        path: '/homemade-drinks'
      },
      {
        ruName: 'Молочные коктейли',
        enName: 'Milkshakes',
        path: '/milkshakes'
      },
      {
        ruName: 'соки свежевыжатые',
        enName: 'freshly squeezed juices',
        path: '/freshly-squeezed-juices'
      },
      {
        ruName: 'Фирменные лимонады',
        enName: 'Branded lemonades',
        path: '/branded-lemonades'
      },
      {
        ruName: 'Безалгольные напитки',
        enName: 'Alcohol-free drinks',
        path: '/alcohol-free-drinks'
      }
    ]
  },
  {
    enName: 'Beer',
    ruName: 'Пиво',
    path: '/beer',
    categories: [
      {
        ruName: 'Разливное',
        enName: 'Draft beer',
        path: '/draft-beer'
      },
      {
        ruName: 'Бутылочное',
        enName: 'Bottled beer',
        path: '/bottled-beer'
      }
    ]
  },
  {
    enName: 'Beer snacks',
    ruName: 'К пиву',
    path: '/to-beer'
  },
  {
    enName: 'Tea',
    ruName: 'Чай',
    path: '/tea'
  },
  {
    enName: 'Coffee',
    ruName: 'Кофе',
    path: '/coffee'
  },
  {
    enName: 'For tea',
    ruName: 'К чаю',
    path: '/for-tea'
  },
  {
    enName: 'Desserts',
    ruName: 'Десерты',
    path: '/desserts'
  }
];

export default filterCards;
