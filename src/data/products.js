const DEFAULT_IMAGE = '/assets/lens-placeholder.svg';

const PRODUCT_NAMES = [
  'لنز مورنینگ',
  'لنز آکوا',
  'لنز کریستال',
  'لنز نچرال',
  'لنز پرو',
  'لنز کلاسیک',
  'لنز فرش',
  'لنز ویژن',
  'لنز سافت',
  'لنز پریمیوم',
  'لنز لایت',
  'لنز دیلاکس',
  'لنز کامفورت',
  'لنز اکسل',
  'لنز پلاس',
  'لنز استاندارد',
];

export function getProductsForFilter(filterName) {
  return PRODUCT_NAMES.map((baseName, index) => ({
    id: `${filterName}-${index + 1}`,
    title: baseName,
    image: DEFAULT_IMAGE,
  }));
}
