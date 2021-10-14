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
    enName: 'Snacks',
    ruName: 'Закуски',
    path: '/snacks'
  },
  {
    enName: 'Warm salads',
    ruName: 'Тёплые салаты',
    path: '/warm-salads'
  },
  {
    enName: 'Beer snacks',
    ruName: 'К пиву',
    path: '/to-beer'
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
    path: '/alcoholic-menu',
    categories: [
      {
        ruName: 'Коктели',
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
  }
];

export default filterCards;
