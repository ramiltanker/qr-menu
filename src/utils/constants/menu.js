// Images
import burger from '../../assets/images/testImages/burger.jpg';
import antrekot from '../../assets/images/testImages/антрекот.jpg';
import beftroganov from '../../assets/images/testImages/Бефтроганов.jfif';
import forelMixSalad from '../../assets/images/testImages/жареная форель с микс салатом.jpg';
import chikenShnicel from '../../assets/images/testImages/куриный шницель в кунжуте.jfif';
import ossobuko from '../../assets/images/testImages/оссобуко.JPG';
import ribai from '../../assets/images/testImages/рибай.jpg';
import skumbriaOrange from '../../assets/images/testImages/скумбрия в апельсиново-свекольной сальсе.JPG';
import indeikaSteak from '../../assets/images/testImages/стейк из индейки.jfif';
import lososNorvegia from '../../assets/images/testImages/стейк из норвежского лосося в апельсиновой глазури.jfif';
import sudakVeshenkami from '../../assets/images/testImages/судак с вешенками.jfif';
import tibon from '../../assets/images/testImages/тибон.jpg';
import beefCheek from '../../assets/images/testImages/томленая говяжья щека.jfif';
import meatBallsSause from '../../assets/images/testImages/фрикадельки в пикантном соусе.jpg';
import wings from '../../assets/images/testImages/крылья.jpg';
import eggplantHumus from '../../assets/images/testImages/обугленные баклажаны с хумусом.JPG';
import cheeseSticks from '../../assets/images/testImages/сырные палочки.jpg';
import springRolls from '../../assets/images/testImages/хрустящие спринг роллы.jpg';
import mocarellaBread from '../../assets/images/testImages/чесночный хлеб с сыром Моцарелла.jpg';
import pastaBolonyes from '../../assets/images/testImages/Болоньез.jfif';
import lingviniBaklazhan from '../../assets/images/testImages/лингвини с баклажанами.jfif';
import nyokkiSause from '../../assets/images/testImages/ньокки в пикантном соусе.JPG';
import orsoShrimp from '../../assets/images/testImages/орзо с креветками.JPG';
import pastaShrimp from '../../assets/images/testImages/спагетти с креветками и рукколой.jpg';
import fettuchiniBeef from '../../assets/images/testImages/фетучини с говяжьей щекой.jfif';
// import  from '../../assets/images/testImages/.JFIF';
// import  from '../../assets/images/testImages/.JFIF';
// import  from '../../assets/images/testImages/.JFIF';
// import  from '../../assets/images/testImages/.JFIF';
// Images

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
      image: pastaBolonyes,
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
      image: springRolls,
      price: 1290
    },
    {
      name: 'Сырные палочки Моцарелла с клюквенным соусом',
      description: '',
      image: cheeseSticks,
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
      image: eggplantHumus,
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
      image: mocarellaBread,
      price: 1590
    },
    {
      name: 'Крылья Баскет L (20шт)',
      description: '',
      image: wings,
      price: 3550
    },
    {
      name: 'Крылья Баскет M (15шт)',
      description: '',
      image: wings,
      price: 2650
    },
    {
      name: 'Крылья Баскет S (5шт)',
      description: '',
      image: wings,
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
  pasta: [
    {
      name: 'Фетучини с говяжей щекой',
      description: '',
      image: fettuchiniBeef,
      price: 1690
    },
    {
      name: 'Орзо с креветками',
      description: '',
      image: orsoShrimp,
      price: 1990
    },
    {
      name: 'Лингвини с баклажанами',
      description: '',
      image: lingviniBaklazhan,
      price: 1100
    },
    {
      name: 'Паста Альфредо',
      description: 'Феттучини со сливочным соусом, нежным курином филе и шампиньонами',
      image: lingviniBaklazhan,
      price: 1690
    },
    {
      name: 'Паста Болоньез',
      description: 'Спагетти с говяжьим рагу и томатным соусом',
      image: nyokkiSause,
      price: 1590
    },
    {
      name: 'Спагетти с креветками и рукколой',
      description: '',
      image: pastaShrimp,
      price: 1590
    },
    {
      name: 'Фарфалле с семгой в сливочном соусе',
      description: '',
      image: orsoShrimp,
      price: 1890
    },
    {
      name: 'Ньоки в пикантном соусе с говядиной х/к',
      description: '',
      image: nyokkiSause,
      price: 1390
    },
    {
      name: 'Карбонара с колбасками',
      description: 'Феттучини в сливочном соусе и говяжьими колбасками',
      image: fettuchiniBeef,
      price: 1390
    }
  ],
  sideDishes: [
    {
      name: 'Овощи на гриле',
      description: '',
      image: '',
      price: 750
    },
    {
      name: 'Овощи на пару',
      description: '',
      image: '',
      price: 690
    },
    {
      name: 'Картофельное пюре',
      description: '',
      image: '',
      price: 300
    },
    {
      name: 'Рис отварной',
      description: '',
      image: '',
      price: 300
    },
    {
      name: 'Картофель Фри',
      description: '',
      image: '',
      price: 450
    },
    {
      name: 'Картофельные дольки',
      description: '',
      image: '',
      price: 500
    },
    {
      name: 'Хумус',
      description: '',
      image: '',
      price: 690
    },
    {
      name: 'Микс салата',
      description: '',
      image: '',
      price: 590
    },
    {
      name: 'Картофель по-деревенски',
      description: '',
      image: '',
      price: 400
    },
    {
      name: 'Шампиньоны на гриле',
      description: '',
      image: '',
      price: 690
    }
  ],
  coctails: [
    {
      name: 'Голубые Гавайи',
      description: '',
      image: '',
      price: 1600
    },
    {
      name: 'Дайкири',
      description: '',
      image: '',
      price: 800
    },
    {
      name: 'Космополитен',
      description: '',
      image: '',
      price: 790
    },
    {
      name: 'Кровавая Мэри',
      description: '',
      image: '',
      price: 790
    },
    {
      name: 'Куба Либра',
      description: '',
      image: '',
      price: 1590
    },
    {
      name: 'Лонг Айленд',
      description: '',
      image: '',
      price: 1390
    },
    {
      name: 'Май-Тай',
      description: '',
      image: '',
      price: 1850
    },
    {
      name: 'Маргарита',
      description: '',
      image: '',
      price: 1790
    },
    {
      name: 'Мохито',
      description: '',
      image: '',
      price: 990
    },
    {
      name: 'Отвертка',
      description: '',
      image: '',
      price: 690
    },
    {
      name: 'Пино Калада',
      description: '',
      image: '',
      price: 1390
    },
    {
      name: 'Секс на пляже',
      description: '',
      image: '',
      price: 1090
    },
    {
      name: 'Текила Санрайз',
      description: '',
      image: '',
      price: 1090
    },
    {
      name: 'Черная Кровь',
      description: '',
      image: '',
      price: 1350
    },
    {
      name: 'Егермонстр',
      description: '',
      image: '',
      price: 850
    }
  ],
  mulledWine: [
    {
      name: 'Глинтвейн',
      description: '',
      image: '',
      price: 700
    }
  ],
  homemadeWine: [
    {
      name: 'Белое сухое',
      description: '',
      image: '',
      price: 500
    },
    {
      name: 'Красное сухое',
      description: '',
      image: '',
      price: 500
    },
    {
      name: 'Красное полусладкое',
      description: '',
      image: '',
      price: 500
    },
    {
      name: 'Белое полусладкое',
      description: '',
      image: '',
      price: 500
    }
  ],
  sparklingWines: [
    {
      name: 'CHANTEL Волшебная Жемчужина, п/сладкое',
      description: '',
      image: '',
      price: 5990
    },
    {
      name: 'CHANTEL Волшебный Синий, п/сладкое',
      description: '',
      image: '',
      price: 5990
    },
    {
      name: 'CHANTEL Волшебный Поцелуй, п/сладкое',
      description: '',
      image: '',
      price: 5990
    },
    {
      name: 'CHANTEL Волшебный Розовый, п/сладкое',
      description: '',
      image: '',
      price: 5990
    },
    {
      name: 'Oreanda ASTI, сладкое',
      description: '',
      image: '',
      price: 4000
    },
    {
      name: 'Amarsi VELVETI, сладкое',
      description: '',
      image: '',
      price: 2500
    },
    {
      name: 'Amarsi MUSCATI, сладкое',
      description: '',
      image: '',
      price: 2500
    },
    {
      name: 'Amarsi ROSATI, сладкое',
      description: '',
      image: '',
      price: 2500
    }
  ],
  georgiaKartuliMarani: [
    {
      name: 'Алазанская Долина, белое полусладкое',
      description: '',
      image: '',
      price: 3500
    },
    {
      name: 'Алазанская Долина, красное полусладкое',
      description: '',
      image: '',
      price: 3500
    },
    {
      name: 'Киндзмараули, красное полусладкое',
      description: '',
      image: '',
      price: 5500
    },
    {
      name: 'Твиши, белое полусладкое',
      description: '',
      image: '',
      price: 6000
    },
    {
      name: 'Саперави, красное сухое',
      description: '',
      image: '',
      price: 4000
    },
    {
      name: 'Пиросмани, красное полусладкое',
      description: '',
      image: '',
      price: 3500
    },
    {
      name: 'Пиросмани, белое полусладкое',
      description: '',
      image: '',
      price: 3500
    },
    {
      name: 'Цинандали, белое сухое',
      description: '',
      image: '',
      price: 5000
    }
  ],
  fruitWines: [
    {
      name: 'МИКАДО клубника, красное',
      description: '',
      image: '',
      price: 2990
    },
    {
      name: 'МИКАДО вишня, красное',
      description: '',
      image: '',
      price: 2990
    },
    {
      name: 'МИКАДО черная смородина, красное',
      description: '',
      image: '',
      price: 0
    },
    {
      name: 'МИКАДО слива красная, красное',
      description: '',
      image: '',
      price: 0
    },
    {
      name: 'МИКАДО слива белая, белое',
      description: '',
      image: '',
      price: 0
    }
  ],
  vodka: [
    {
      name: 'Beluga Nobl',
      description: '',
      image: '',
      price: 14000
    },
    {
      name: 'Царская золотая',
      description: '',
      image: '',
      price: 7000
    },
    {
      name: 'Absolut Blue',
      description: '',
      image: '',
      price: '700/6000'
    },
    {
      name: 'Finlandia',
      description: '',
      image: '',
      price: '750/6000'
    },
    {
      name: 'Finlandia Granberry',
      description: '',
      image: '',
      price: '750/5900'
    },
    {
      name: 'Squadra Russa',
      description: '',
      image: '',
      price: '650/5500'
    },
    {
      name: 'Хортиця Абсолютна',
      description: '',
      image: '',
      price: '650/5000'
    },
    {
      name: 'Хорция Айс',
      description: '',
      image: '',
      price: '650/4500'
    },
    {
      name: 'SHUSTOFF N1',
      description: '',
      image: '',
      price: '450/4000'
    },
    {
      name: 'Morosha Sinevir',
      description: '',
      image: '',
      price: '450/4000'
    },
    {
      name: 'МЯГКОВ клюквенная',
      description: '',
      image: '',
      price: '400/3700'
    }
  ],
  whiskey: [
    {
      name: 'Jameson',
      description: '',
      image: '',
      price: '1000/10000'
    },
    {
      name: 'Jack Daniels Bourbor',
      description: '',
      image: '',
      price: '1200/12000'
    },
    {
      name: 'Chivas Regal',
      description: '',
      image: '',
      price: '1700/16500'
    },
    {
      name: 'Kinahans LL',
      description: '',
      image: '',
      price: 1000
    },
    {
      name: 'Clan MacGregor',
      description: '',
      image: '',
      price: 500
    },
    {
      name: 'The Claymore',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'McLain blended scotch whiski',
      description: '',
      image: '',
      price: 500
    },
    {
      name: 'Maccalister',
      description: '',
      image: '',
      price: '450/4500'
    }
  ],
  rum: [
    {
      name: 'Bacardi Black',
      description: '',
      image: '',
      price: 1000
    },
    {
      name: 'Bacardi Blanca',
      description: '',
      image: '',
      price: 800
    },
    {
      name: 'Bacardi Gold',
      description: '',
      image: '',
      price: 850
    },
    {
      name: 'Malibu',
      description: '',
      image: '',
      price: 1100
    }
  ],
  martini: [
    {
      name: 'Bianco',
      description: '',
      image: '',
      price: 990
    },
    {
      name: 'Extra Dry',
      description: '',
      image: '',
      price: 990
    },
    {
      name: 'Rosso',
      description: '',
      image: '',
      price: 990
    }
  ],
  tequilla: [
    {
      name: 'Olmega Blanco',
      description: '',
      image: '',
      price: 1000
    },
    {
      name: 'Olmega Gold',
      description: '',
      image: '',
      price: 1100
    }
  ],
  other: [
    {
      name: 'ШАМПАНСКОЕ СОВЕТСКОЕ, 750 мл',
      description: '',
      image: '',
      price: 1858
    },
    {
      name: 'КОНЬЯК КАЗАХСТАН, 50 мл',
      description: '',
      image: '',
      price: 300
    },
    {
      name: 'ДЖИН BEEFFEATER, 50 мл',
      description: '',
      image: '',
      price: 700
    },
    {
      name: 'АБСЕНТ, 50 мл',
      description: '',
      image: '',
      price: 1400
    }
  ],
  nonAlcoholicCoctails: [
    {
      name: 'Пина Колада',
      description: 'сок, молоко, сироп',
      image: '',
      price: 800
    },
    {
      name: 'Вкусное облако',
      description: 'мороженое, сироп, банан, молоко',
      image: '',
      price: 800
    },
    {
      name: 'Манговое безумие',
      description: 'сок, молоко, сироп',
      image: '',
      price: 700
    },
    {
      name: 'Мохито клубничный',
      description: 'мята, лайм, лимон, сироп клубничный, газированная вода',
      image: '',
      price: 800
    },
    {
      name: 'Мохито классический',
      description: 'мята, лайм, лимон, сироп, газированная вода',
      image: '',
      price: 700
    },
    {
      name: 'Вишнёвый поцелуй',
      description: 'сок, сироп, вишня',
      image: '',
      price: 400
    }
  ],
  smoothie: [
    {
      name: 'Банан и киви',
      description: 'банан, киви, мороженое, молоко',
      image: '',
      price: 850
    },
    {
      name: 'Розовый фламинго',
      description: 'банан, клубника, мороженое, молоко',
      image: '',
      price: 850
    },
    {
      name: 'Яблоко и апельсин',
      description: 'апельсин, яблоко, мороженое, молоко',
      image: '',
      price: 850
    },
    {
      name: 'Апельсин и банан',
      description: 'апельсин, банан, мед, мороженое, молоко',
      image: '',
      price: 850
    },
    {
      name: 'Банан и малина',
      description: 'банан, малина, мед, мороженое, молоко',
      image: '',
      price: 850
    }
  ],
  homemadeDrinks: [
    {
      name: 'Фруктовый компот',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Ягодный морс',
      description: '',
      image: '',
      price: 600
    }
  ],
  milkshakes: [
    {
      name: 'Сливочный коктейль',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Шокоадный коктейль',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Клубничный коктейль',
      description: '',
      image: '',
      price: 600
    }
  ],
  freshlySqueezedJuices: [
    {
      name: 'Апельсин',
      description: '',
      image: '',
      price: 1000
    },
    {
      name: 'Яблоко',
      description: '',
      image: '',
      price: 1000
    },
    {
      name: 'Апельсин, яблоко',
      description: '',
      image: '',
      price: 1000
    },
    {
      name: 'Яблоко, морковь',
      description: '',
      image: '',
      price: 1000
    }
  ],
  brandedLemonades: [
    {
      name: 'Классический',
      description: 'тархун, дюшес, арбуз, дыня',
      image: '',
      price: 890
    },
    {
      name: 'Манго-маракуйя',
      description: '',
      image: '',
      price: 890
    },
    {
      name: 'Цитрус',
      description: '',
      image: '',
      price: 890
    },
    {
      name: 'Киви-банан',
      description: '',
      image: '',
      price: 890
    },
    {
      name: 'Барбарис-лимон',
      description: '',
      image: '',
      price: 890
    },
    {
      name: 'Тропический',
      description: '',
      image: '',
      price: 890
    },
    {
      name: 'Кленовый',
      description: '',
      image: '',
      price: 890
    },
    {
      name: 'Ягодный',
      description: '',
      image: '',
      price: 890
    },
    {
      name: 'Ананас-руккола',
      description: '',
      image: '',
      price: 890
    },
    {
      name: 'Огуречный',
      description: '',
      image: '',
      price: 890
    },
    {
      name: 'Лайм',
      description: '',
      image: '',
      price: 890
    },
    {
      name: 'Black star',
      description: '',
      image: '',
      price: 890
    }
  ],
  alcoholDreeDrinks: [
    {
      name: 'Pepsi, Mirinda, 7up (0,5 л/1 л)',
      description: '',
      image: '',
      price: '280/500'
    },
    {
      name: 'Дада-дей напиток (0,5)',
      description: '',
      image: '',
      price: 280
    },
    {
      name: 'Сок ДА-ДА (0,2 л/1 л)',
      description: '',
      image: '',
      price: '220/600'
    },
    {
      name: 'Липтон чай (0,5 л/1 л)',
      description: '',
      image: '',
      price: '250/400'
    },
    {
      name: 'Вода Asu (0,5 л/1 л)',
      description: '',
      image: '',
      price: '200/250'
    },
    {
      name: 'Диззи энерджи',
      description: '',
      image: '',
      price: 450
    }
  ],
  draftBeer: [
    {
      name: 'Пиво РАЗЛИВНОЕ ПРАГА 330/500 мл',
      description: '',
      image: '',
      price: '250/350'
    }
  ],
  bottledBeer: [
    {
      name: 'Amsterdam светлое',
      description: '',
      image: '',
      price: 450
    },
    {
      name: 'Старый Мельник светлое',
      description: '',
      image: '',
      price: 500
    },
    {
      name: 'Велкопоповицкий Козел',
      description: '',
      image: '',
      price: 400
    },
    {
      name: 'Bavaria безалкогольное',
      description: '',
      image: '',
      price: 550
    },
    {
      name: 'Bavaria светлое',
      description: '',
      image: '',
      price: 450
    },
    {
      name: 'Миллер светлое',
      description: '',
      image: '',
      price: '500/600'
    }
  ],
  beerSnacks: [
    {
      name: 'Гарлики',
      description: 'из бородинского хлеба с соусом Тартар',
      image: '',
      price: 690
    },
    {
      name: 'Пивная корзина',
      description: 'бастурма, домашние чипсы, арахис, солёная соломка, сыр, чечил',
      image: '',
      price: 1890
    },
    {
      name: 'Креветки пивные',
      description: '',
      image: '',
      price: 2090
    },
    {
      name: 'Сыр Чечил',
      description: '',
      image: '',
      price: 490
    },
    {
      name: 'Домашние картофельные чипсы',
      description: '',
      image: '',
      price: 590
    }
  ],
  tea: [
    {
      name: 'Чёрный чай 200мл/ 800 мл',
      description: '',
      image: '',
      price: '200/500'
    },
    {
      name: 'Чёрный чай с молоком 200мл/ 800 мл',
      description: '',
      image: '',
      price: '200/600'
    },
    {
      name: 'Чай с лимоном 200мл/ 800 мл',
      description: '',
      image: '',
      price: '200/600'
    },
    {
      name: 'Чёрный чай листовой 800 мл',
      description: '',
      image: '',
      price: 700
    },
    {
      name: 'Зелёный листовой 800 мл',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Ташкентский чай 800 мл',
      description: '',
      image: '',
      price: 800
    },
    {
      name: 'Облепиховый 800 мл',
      description: '',
      image: '',
      price: 800
    },
    {
      name: 'Золотая груша 800 мл',
      description: '',
      image: '',
      price: 800
    },
    {
      name: 'Имбирный 800 мл',
      description: '',
      image: '',
      price: 800
    }
  ],
  coffee: [
    {
      name: 'Латте классический',
      description: '',
      image: '',
      price: 500
    },
    {
      name: 'Латте карамель',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Латте шоколад',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Латте тирамису',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Латте с халвой',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Латте лесной орех',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Капучино',
      description: '',
      image: '',
      price: 500
    },
    {
      name: 'Американо с молоком',
      description: '',
      image: '',
      price: 400
    },
    {
      name: 'Американо без молока',
      description: '',
      image: '',
      price: 300
    },
    {
      name: 'Эспрессо',
      description: '',
      image: '',
      price: 400
    },
    {
      name: 'Горячий шоколад',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Айс кофе',
      description: '',
      image: '',
      price: 500
    }
  ],
  forTea: [
    {
      name: 'Шоколад КАЗАХСТАН',
      description: '',
      image: '',
      price: 600
    },
    {
      name: 'Лимон',
      description: '',
      image: '',
      price: 250
    },
    {
      name: 'Сливки',
      description: '',
      image: '',
      price: 200
    },
    {
      name: 'Мед',
      description: '',
      image: '',
      price: 300
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
      image: ribai,
      price: 3900
    },
    {
      name: 'Стейк АНТРЕКОТ',
      description: 'Стейк, овощи гриль, шампиньоны, приправленные ароматные маслом и прованскими травами',
      image: antrekot,
      price: 3500
    },
    {
      name: 'Стейк ТИБОН',
      description: 'Стейк, овощи гриль, шампиньоны, приправленные ароматные маслом и прованскими травами',
      image: tibon,
      price: 3800
    },
    {
      name: 'Стейк из индейки',
      description: 'филе индейки, овощи гриль с травами и соусом Барбекю',
      image: indeikaSteak,
      price: 2500
    }
  ],
  fishDishes: [
    {
      name: 'Судак с вешенками',
      image: sudakVeshenkami,
      price: 2190
    },
    {
      name: 'Жареная форель с микс салатом',
      image: 'troutWithSalad',
      price: 2490
    },
    {
      name: 'Стейк из норвежского лосося в апельсиновой глазури',
      image: lososNorvegia,
      price: 3490
    },
    {
      name: 'Скумбрия в апельсиново-свекольной сальсе',
      image: skumbriaOrange,
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
      image: ossobuko,
      price: 3490
    },
    {
      name: 'Томленая говяжья щека',
      image: beefCheek,
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
      image: meatBallsSause,
      price: 1890
    },
    {
      name: 'Бефстроганов с вялеными томатами и грибами',
      image: beftroganov,
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
      image: chikenShnicel,
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
      image: burger,
      price: 1490
    },
    {
      name: 'Чизбургер комбо',
      description: 'чизбургер, картофель фри, пепси 0.5л',
      image: burger,
      price: 1590
    },
    {
      name: 'Двойной гамбургер',
      image: burger,
      price: 1390
    },
    {
      name: 'Двойной чизбургер',
      image: burger,
      price: 1590
    },
    {
      name: 'Гамбургер',
      image: burger,
      price: 890
    },
    {
      name: 'Чизбургер',
      image: burger,
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
      image: forelMixSalad,
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
  desserts: [
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
