const menu = {
  pizza: [
    {
      name: 'Маргарита',
      description: 'фирменный пицца-соус, сыр Моцарелла, томаты черри',
      image: 'margarita',
      price: 1190
    },
    {
      name: 'Пепперони',
      description: 'фирменный пицца-соус, сыр Моцарелла, пепперони',
      image: 'pepperoni',
      price: 1950
    },
    {
      name: '4 сыра',
      description: 'соус Рикотта, сыр Чеддер, сыр Моцарелла, сыр Пармезан',
      image: 'fourcheese',
      price: 1950
    },
    {
      name: 'Грибы с ветчиной',
      description: 'соус Рикотта, сыр Чеддер, сыр Моцарелла, сыр Пармезан',
      image: 'mushroomsWithHam',
      price: 2060
    },
    {
      name: 'Мясо с грибами',
      description: 'соус Альфредо, сыр Моцарелла, копченная говядина, грибы вешенки, томаты черри, сыр Пармезан',
      image: 'meatWidthMushrooms',
      price: 2320
    },
    {
      name: 'Альфредо',
      description: 'соус Альфредо, сыр Моцарелла, шампиньоны, куриное филе, томаты черри, шпинат',
      image: 'alfredo',
      price: 1850
    },
    {
      name: 'Цезарь',
      description: 'фирменный пицца-соус, сыр Моцарелла, куриное филе, томаты черри, соус Цезарь, салат Айсберг',
      image: 'caesar',
      price: 2210
    },
    {
      name: 'Грибное Ассорти',
      description: 'сыр Моцарелла, соус Альфредо, грибы вешенки, опята, микс перцев',
      image: 'mushroomAssorted',
      price: 1890
    },
    {
      name: 'Карбонара',
      description: 'сыр Моцарелла, соус Рикатта, ветчина, яйцо, перец красный, сыр Пармезан',
      image: 'carbonaro',
      price: 1800
    },
    {
      name: 'Звезда Моря',
      description: 'сыр Моцарелла, соус Рикатта, ветчина, яйцо, перец красный, сыр Пармезан',
      image: 'seaStar',
      price: 2400
    }
  ],
  firstCourses: [
    {
      name: 'Грибной крем-суп',
      description: 'крем-пюре из шампиньонов и овощей, томленные в сливках',
      image: 'mushroomSoup',
      price: 990
    },
    {
      name: 'Уха Царская',
      description: 'насыщенный рыбный бульон с семгой, судаком и овощами',
      image: 'uxaSoup',
      price: 890
    },
    {
      name: 'Окрошка Домашняя',
      description: 'говядина холодного копчения с овощами, ароматными травами и фирменной заправкой',
      image: 'okroshka',
      price: 890
    },
    {
      name: 'Суп-лапша из курицы',
      description: 'насыщенный куриный бульон с яичной лапшой и перепелиными яйцами',
      image: 'chikenSoup',
      price: 890
    },
    {
      name: 'Чечевичный крем-суп',
      description: 'крем-пюре из чечевицы на овощном бульоне со сливками',
      image: 'lentilsSoup',
      price: 690
    },
    {
      name: 'Пельмени с бульоном',
      description: 'пельмени ручной лепки с говядиной',
      image: 'pelmeni',
      price: 890
    },
    {
      name: 'Суп гулящ',
      description: 'густой суп с пекантной остротой с картофелем, говядиной, луком, морковью и чесноком',
      image: 'gulashSoup',
      price: 890
    },
    {
      name: 'Тыквенный крем-суп с моцареллой Гальбани',
      description:
        'тыква, лук порей, овощной бульон, оливковое масло, сыр моцарелла, чеснок, соль, мускатный орех, черный перец, апельсин',
      image: 'pumpkinSoup',
      price: 890
    }
  ],
  secondCourses: [
    {
      name: 'Стейк из индейки',
      description: 'филе индейки, овощи гриль с травами и соусом Барбекю',
      image: 'turkeySteak',
      price: 2500
    },
    {
      name: 'Колбаски на гриле',
      description: 'говяжьи колбаски, жаренные на гриле с соусом Барбекю и маринованным луком',
      image: 'grilledSausages',
      price: 2500
    },
    {
      name: 'Стейк РИбАЙ',
      image: 'ribaiSteak',
      price: 3900
    },
    {
      name: 'Стейк АНТРЕКОТ',
      image: 'antrekotSteak',
      price: 3500
    },
    {
      name: 'Стейк ТИБОН',
      image: 'tibonSteak',
      price: 3800
    },
    {
      name: 'Судак с вешенками',
      image: 'pikePerchWithOysterMushrooms',
      price: 2190
    },
    {
      name: 'Жареная форель с микс салатом',
      image: 'troutWithSalad',
      price: 2490
    },
    {
      name: 'Томленая говяжья щека',
      image: 'beefCheek',
      price: 2690
    },
    {
      name: 'Мясо от ШЕФА',
      image: 'chefMeat',
      price: 1990
    },
    {
      name: 'Соте из телятины',
      image: 'vealSaute',
      price: 1990
    }
  ],
  burgers: [
    {
      name: 'Гамбургер комбо',
      description: 'гамбургер, картофель фри, пепси 0.5л',
      image: 'hamburgerCombo',
      price: 1490
    },
    {
      name: 'Чизбургер комбо',
      description: 'чизбургер, картофель фри, пепси 0.5л',
      image: 'cheeseburgerCombo',
      price: 1590
    },
    {
      name: 'Двойной гамбургер',
      image: 'doubleHamburger',
      price: 1390
    },
    {
      name: 'Двойной чизбургер',
      image: 'cheeseburgerHamburger',
      price: 1590
    },
    {
      name: 'Гамбургер',
      image: 'hamburger',
      price: 890
    },
    {
      name: 'Чизбургер',
      image: 'cheeseburger',
      price: 990
    }
  ],
  salads: [
    {
      name: 'Салат Охотничий',
      description: 'ломтики говяди и брынзы, чесночные крутоны с соусом на основе дижонской горчицы',
      image: 'huntingSalad',
      price: 1290
    },
    {
      name: 'Салат Джотто',
      description: 'ломтики говяжей нарезки с овощами гриль',
      image: 'giottoSalad',
      price: 1390
    },
    {
      name: 'Салат Цезарь',
      image: 'caesarSalad',
      price: 1390
    },
    {
      name: 'Микс зелени с запеченной тыквой',
      image: 'bakedPumpkin',
      price: 1190
    },
    {
      name: 'Салат Киноа с рукколой',
      image: 'kinaoSalad',
      price: 1190
    },
    {
      name: 'Баклажаны в Азиатском стиле',
      image: 'asianStyleEggplant',
      price: 1490
    },
    {
      name: 'Салат Греческий',
      image: 'greekSalad',
      price: 1190
    },
    {
      name: 'Баклажаны с йогуртом и зернами граната',
      image: 'eggplantWithYogurt',
      price: 1490
    }
  ],
  deserts: [
    {
      name: 'Чизкейк карамельный',
      image: 'caramelCheesecake',
      price: 850
    },
    {
      name: 'Тирамису',
      image: 'tiramisu',
      price: 950
    },
    {
      name: 'Чизкейк Нью-Йорк',
      image: 'cheesecakeNY',
      price: 850
    },
    {
      name: 'Торт Красный Бархат',
      image: 'redVelvetCake',
      price: 850
    }
  ]
};

export default menu;
