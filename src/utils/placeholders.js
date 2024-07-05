import feature1 from '../assets/images/feature-1.svg';
import feature2 from '../assets/images/feature-2.svg';
import feature3 from '../assets/images/feature-3.svg';

export const MAIN_NAV_LINKS = [
  { name: 'Главная', path: '#' },
  { name: 'Тарифы', path: '#' },
  { name: 'FAQ', path: '#' },
];

export const TARIFFS = [
  {
    title: 'Beginner',
    subtitle: 'Для небольшого исследования',
    price: 799,
    oldPrice: 1200,
    creditPrice: 150,
    description: [
      'Безлимитная история запросов',
      'Безопасная сделка',
      'Поддержка 24/7',
    ],
  },
  {
    title: 'Pro',
    subtitle: 'Для HR и фрилансеров',
    price: 1299,
    oldPrice: 2600,
    creditPrice: 279,
    description: [
      'Все пункты тарифа Beginner',
      'Экспорт истории',
      'Рекомендации по приоритетам',
    ],
  },
  {
    title: 'Business',
    subtitle: 'Для корпоративных клиентов',
    price: 2379,
    oldPrice: 3700,
    description: [
      'Все пункты тарифа Pro',
      'Безлимитное количество запросов',
      'Приоритетная поддержка',
    ],
  },
];

export const FEATURES = [
  {
    id: 'f1',
    icon: feature1,
    desc: 'Высокая и оперативная скорость обработки заявки',
  },
  {
    id: 'f2',
    icon: feature2,
    desc: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
  },
  {
    id: 'f3',
    icon: feature3,
    desc: 'Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству',
  },
  {
    id: 'f4',
    icon: feature1,
    desc: 'Скорость обработки заявки',
  },
  {
    id: 'f5',
    icon: feature2,
    desc: 'Огромная комплексная база данных',
  },
];
