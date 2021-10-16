const menu = {
  pizza: [
    {
      name: 'Маргарита',
      description: 'фирменный пицца-соус, сыр Моцарелла, томаты черри',
      image: 'margarita',
      price: 1190
    },
    {
      name: 'Мясное ассорти с халапенью',
      description:
        'фирменный пицца-соус, сыр Моцарелла, говядина копчёная, фарш говяжий, ветчина, оливки, колбаса Пепперони, перец халапеньо',
      image: 'cold cuts with jalapeno',
      price: 2490
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
      name: 'С ветчиной',
      description: 'фирменный пицца-соус, сыр Моцарелла, ветчина, микс печеных перцов',
      image: 'with ham',
      price: 2060
    },
    {
      name: 'Курица Барбекю',
      description:
        'сыр Моцарелла, соус Рикотта, курица копчённая, говядина холодного копчения, красный лук, грибы вешенки, соус Барбекю',
      image: 'barbecue Chicken',
      price: 1890
    },
    {
      name: 'Курица, песто',
      description: 'фирменный пицца соус, сыр Моцарелла, куриное филе, соус Песто',
      image: 'chicken, pesto',
      price: 1650
    },
    {
      name: 'Охотничья с халапенью',
      description: 'фирменный пицца соус, сыр Моцарелла, колбаски охотничьи, перец халапеньо(по желанию)',
      image: 'hunting with jalapeno',
      price: 1790
    },
    {
      name: 'Звезда моря',
      description: 'соус Рикотта, сыр Моцарелла, креветки, семга, вяленые черри',
      image: 'star of the Sea',
      price: 2400
    },
    {
      name: 'Десертная маршмэллоу',
      description: 'сыр Моцарелла, банан, киви, мороженое, маршмэллоу, сахарная пудра',
      image: 'marshmallow dessert',
      price: 1800
    },
    {
      name: 'Тино, фирменная',
      description:
        'соус Альфредо, сыр Моцарелла, говядина компченая, томаты черри, сыр Пармезан, шампиньоны, микс печенных перцев',
      image: 'tino, branded',
      price: 2490
    },
    {
      name: 'Мясо с грибами',
      description: 'соус Альфредо, сыр Моцарелла, копченная говядина, грибы вешенки, томаты черри, сыр Пармезан',
      image: 'meatWidthMushrooms',
      price: 2320
    },
    {
      name: 'Ассорти',
      description: 'фирменный пицца-соус, сыр Моцарелла, фарш говяжий, красный лук, шампиньоны, микс перцев, пепперони',
      image: 'assorted',
      price: 2450
    },
    {
      name: 'Альфредо',
      description: 'соус Альфредо, сыр Моцарелла, шампиньоны, куриное филе, томаты черри, шпинат',
      image: 'alfredo',
      price: 1850
    },
    {
      name: 'Грибное Ассорти',
      description: 'сыр Моцарелла, соус Альфредо, грибы вешенки, опята, микс перцев',
      image: 'mushroomAssorted',
      price: 1890
    },
    {
      name: 'Пицца Цезарь',
      description: 'фирменный пицца-соус, сыр Моцарелла, куриное филе, томаты черри, соус Цезарь, салат Айсберг',
      image: 'pizza Caesar',
      price: 2210
    },

    {
      name: 'Карбонара',
      description: 'сыр Моцарелла, соус Рикатта, ветчина, яйцо, перец красный, сыр Пармезан',
      image: 'carbonaro',
      price: 1800
    },
    {
      name: 'Тоскана',
      description: 'фирменный пицца-соус, сыр Моцарелла Гальбани, томаты черри, соус Песто',
      image: 'tuscany',
      price: 2500
    },
    {
      name: 'Шашлычная',
      description:
        'фирменный пицца-соус, сыр Моцарелла, шашлык из баранины, помидоры черри, маринованый репчатый лук, халапеньо, соус барбекю',
      image: 'kebab pizza',
      price: 2250
    },
    {
      name: 'Гавайская',
      description: 'соус Рикотта, сыр Моцарелла, курица барбекю, ананас',
      image: 'hawaiian',
      price: 1800
    },
    {
      name: 'Болоньезе',
      description: 'фирменный пицца-соус, сыр Моцарелла, фарш говяжий, помидоры черри, сыр Пармезан',
      image: 'Bolognese',
      price: 1980
    },
    {
      name: 'Кальцоне с курицей и шпинатом',
      description: '',
      image: '',
      price: 1550
    },
    {
      name: 'Кальцоне 3 сыра',
      description: '',
      image: '',
      price: 1300
    },
    {
      name: 'Кальцоне мясная с халапеньо',
      description: '',
      image: '',
      price: 1650
    }
  ],
  italianPies: [
    {
      name: 'Итальянский пирог с курицей, грибами и шпинатом',
      description: 'шампиньоны, куриное филе, лук красеый, шпинат, микс перцев, сыр моцарелла',
      image: '',
      price: 2900
    },
    {
      name: 'Итальянский пирог АССОРТИ',
      description:
        'пепперони, фарш говяжий, шампиньоны, микс перцев, фирменный пицца-соус, лук красный, кунжут, сыр моцарелла',
      image: '',
      price: 2900
    }
  ],
  focaccia: [
    {
      name: 'с сыром Пармезан',
      description: '',
      image: '',
      price: 300
    },
    {
      name: 'с соусом Песто',
      description: '',
      image: '',
      price: 300
    },
    {
      name: 'с розмарином',
      description: '',
      image: '',
      price: 250
    },
    {
      name: 'Альо с чесноком',
      description: '',
      image: '',
      price: 250
    }
  ],
  bread: [
    {
      name: 'Хлебная корзина',
      description: '',
      image: '',
      price: 690
    }
  ],
  snacks: [
    {
      name: 'Хрустящие спринт-роллы с сыром',
      description: '',
      image: '',
      price: 1290
    },
    {
      name: 'Сырные палочки Моцарелла с клюквенным соусом',
      description: '',
      image: '',
      price: 1390
    },
    {
      name: 'Чебупели',
      description: 'мини чебуречки с говяжим мясом, соус ранч и барбекю',
      image: '',
      price: 1390
    },
    {
      name: 'Обугленные баклажаны с хумусом',
      description: '',
      image: '',
      price: 1980
    },
    {
      name: 'Обугленные баклажаны с маринованными перцами',
      description: '',
      image: '',
      price: 1780
    },
    {
      name: 'Хрустящие куриные палочки с пикантным соусом',
      description: '',
      image: '',
      price: 1590
    },
    {
      name: 'Чесночный хлеб с сыром Моцарелла',
      description: '',
      image: '',
      price: 1590
    },
    {
      name: 'Крылья Баскет L (20шт)',
      description: '',
      image: '',
      price: 3550
    },
    {
      name: 'Крылья Баскет M (15шт)',
      description: '',
      image: '',
      price: 2650
    },
    {
      name: 'Крылья Баскет S (5шт)',
      description: '',
      image: '',
      price: 990
    }
  ],
  fries: [
    {
      name: 'Картофель фри',
      description: '',
      image: '',
      price: 450
    },
    {
      name: 'Картофельные дольки',
      description: '',
      image: '',
      price: 500
    }
  ],
  sauces: [
    {
      name: 'Чили',
      description: '',
      image: '',
      price: 150
    },
    {
      name: 'Ранч',
      description: '',
      image: '',
      price: 150
    },
    {
      name: 'Барбекю',
      description: '',
      image: '',
      price: 150
    },
    {
      name: 'Сладкий чили',
      description: '',
      image: '',
      price: 200
    },
    {
      name: 'Сырный',
      description: '',
      image: '',
      price: 150
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
      name: 'Суп гуляш',
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
  steaks: [
    {
      name: 'Стейк РИБАЙ',
      description: 'Стейк, овощи гриль, шампиньоны, приправленные ароматные маслом и прованскими травами',
      image: 'ribaiSteak',
      price: 3900
    },
    {
      name: 'Стейк АНТРЕКОТ',
      description: 'Стейк, овощи гриль, шампиньоны, приправленные ароматные маслом и прованскими травами',
      image: 'antrekotSteak',
      price: 3500
    },
    {
      name: 'Стейк ТИБОН',
      description: 'Стейк, овощи гриль, шампиньоны, приправленные ароматные маслом и прованскими травами',
      image: 'tibonSteak',
      price: 3800
    },
    {
      name: 'Стейк из индейки',
      description: 'филе индейки, овощи гриль с травами и соусом Барбекю',
      image: 'turkeySteak',
      price: 2500
    }
  ],
  fishDishes: [
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
      name: 'Стейк из норвежского лосося в апельсиновой глазури',
      image: '',
      price: 3490
    },
    {
      name: 'Скумбрия в апельсиново-свекольной сальсе',
      image: '',
      price: 1890
    }
  ],
  lambDishes: [
    {
      name: 'Каре ягненка в медово-ягодном соусе',
      image: '',
      price: 3490
    }
  ],
  beefDishes: [
    {
      name: 'Оссобуко',
      image: '',
      price: 3490
    },
    {
      name: 'Томленая говяжья щека',
      image: 'beefCheek',
      price: 2690
    },
    {
      name: 'Мясо от ШЕФА',
      description: 'жареная говядина и куриное филе, дополненное шампиньонами в нежном сливочном соусе',
      image: 'chefMeat',
      price: 1990
    },
    {
      name: 'Фрикадельки в икантном соусе',
      description: 'молочные говяжьи фрикадельки в пикантном соусе с пастой лингвини',
      image: '',
      price: 1890
    },
    {
      name: 'Бефстроганов с вялеными томатами и грибами',
      image: '',
      price: 2490
    },
    {
      name: 'Говядина с овощами в пикантном соусе',
      image: '',
      price: 1490
    },
    {
      name: 'Соте из телятины',
      image: 'vealSaute',
      price: 1990
    }
  ],
  chickenDishes: [
    {
      name: 'Куриный шницель в кунжуте',
      image: '',
      price: 1390
    },
    {
      name: 'Куриное бедро с сухофруктами',
      image: '',
      price: 1490
    }
  ],
  grilledSausages: [
    {
      name: 'Колбаски на гриле',
      description: 'говяжьи колбаски, жаренные на гриле с соусом Барбекю и маринованным луком',
      image: 'grilledSausages',
      price: 2500
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
      name: 'Баклажаны с йогуртом и зернами граната',
      description: '',
      image: '',
      price: 1490
    },
    {
      name: 'Салат Охотничий',
      description: 'ломтики говяди и брынзы, чесночные крутоны с соусом на основе дижонской горчицы',
      image: 'huntingSalad',
      price: 1290
    },
    {
      name: 'Салат Тальята',
      description:
        'обжаренная говяжья вырезка с ломтиками картофеля, шампиньонов и микс салата, заправленная гранатовым соусом и Пармезан',
      image: '',
      price: 1590
    },
    {
      name: 'Салат Греческий с сыром Фета',
      description: '',
      image: '',
      price: 1190
    },
    {
      name: 'Салат Греческий с сыром Фета',
      description: '',
      image: '',
      price: 1190
    },
    {
      name: 'Салат Цезарь с курицей',
      description: '',
      image: '',
      price: 1390
    },
    {
      name: 'Салат Цезарь с сёмгой',
      description: '',
      image: '',
      price: 1690
    },
    {
      name: 'Салат из цветной капусты с зернами граната',
      description: '',
      image: '',
      price: 1190
    },
    {
      name: 'Микс зелени с картофелем и копченой семгой',
      description: '',
      image: '',
      price: 1920
    },
    {
      name: 'Салат Киноа с рукколой',
      image: 'kinaoSalad',
      price: 1190
    },
    {
      name: 'Микс зелени с запеченной тыквой',
      image: 'bakedPumpkin',
      price: 1190
    }
  ],
  warmSalads: [
    {
      name: 'Тёплый салат из курочки',
      description: 'кусочки обжаренной в соевом соусе куриной грудки, свежие овощи с добавлением медового соуса',
      image: '',
      price: 990
    },
    {
      name: 'Салат Джотто',
      description: 'ломтики говяжей нарезки с овощами гриль',
      image: 'giottoSalad',
      price: 1390
    },
    {
      name: 'Баклажаны в Азиатском стиле',
      description: '',
      image: 'asianStyleEggplant',
      price: 1490
    },
    {
      name: 'Фруктовая нарезка',
      description: 'яблоко зелёное и красное, апельсин, мандарин, банан, киви, ананас, виноград',
      image: '',
      price: 2500
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
