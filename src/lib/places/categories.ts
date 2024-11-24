// Categories for Foursquare and HERE APIs

export const FOURSQUARE_CATEGORIES = {
  primary: [
    '11096',  // Plumber
    '11086',  // General Contractor (Home Service)
    '17090',  // Hardware Store - adding back to increase results
  ],
  secondary: []  // No secondary categories to avoid getting supply stores
};

export const HERE_CATEGORIES = {
  primary: [
    '700-7400-0117',  // Plumber
    '700-7400-0000',  // Home Service & Maintenance
    '700-7400-0116',  // Hardware Store - adding back to increase results
  ],
  secondary: []  // No secondary categories to avoid getting supply stores
};

// Terms that indicate a business is not a direct plumbing service
export const excludedTerms = [
  'supplies',
  'supply',
  'wholesale',
  'merchant',
  'merchants',
  'retail',
  'showroom',
  'bathroom',
  'kitchen',
  'warehouse',
  // 'heating',  // Removing as some plumbers specialize in heating
  'hardware',
  'store',
  'shop'
];
