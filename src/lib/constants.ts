export const propertyTypes = [
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'other', label: 'Other' },
];

export const usageFrequencies = [
  { value: 'daily', label: 'Daily Use' },
  { value: 'weekly', label: 'Weekly Use (e.g., vacation rental)' },
  { value: 'monthly', label: 'Monthly Use' },
  { value: 'occasional', label: 'Occasional Use (e.g., guest house)' },
];

export const guestUsageLevels = [
  { value: 'light', label: 'Light (Few guests, minimal use)' },
  { value: 'moderate', label: 'Moderate (Regular guests, average use)' },
  { value: 'heavy', label: 'Heavy (Frequent guests, high turnover)' },
];

export const cleaningServicesList = [
  { id: 'standard_clean', name: 'Standard Cleaning', description: 'General cleaning of all rooms.', price: 50 },
  { id: 'deep_clean', name: 'Deep Cleaning', description: 'Intensive cleaning including appliances.', price: 100 },
  { id: 'window_clean', name: 'Window Cleaning', description: 'Interior and exterior window washing.', price: 30 },
  { id: 'carpet_clean', name: 'Carpet Cleaning', description: 'Steam cleaning for carpets.', price: 40 },
];

export const resupplyItemsList = [
  { id: 'toiletries', name: 'Toiletries', description: 'Soap, shampoo, conditioner.', price: 15 },
  { id: 'linens', name: 'Linens &amp; Towels', description: 'Fresh bed linens and towels.', price: 25 },
  { id: 'kitchen_supplies', name: 'Kitchen Supplies', description: 'Coffee, tea, sugar, paper towels.', price: 20 },
];

export const addOnServicesList = [
  { id: 'oven_clean', name: 'Oven Cleaning', description: 'Detailed cleaning of oven interior.', price: 25 },
  { id: 'fridge_clean', name: 'Refrigerator Cleaning', description: 'Interior cleaning of refrigerator.', price: 20 },
  { id: 'laundry_service', name: 'Laundry Service', description: 'Wash and fold laundry.', price: 30 },
];

export const allServicesForPricing = [
  ...cleaningServicesList.map(s => ({ value: s.id, label: `${s.name} - $${s.price}` })),
  ...resupplyItemsList.map(s => ({ value: s.id, label: `${s.name} - $${s.price}` })),
  ...addOnServicesList.map(s => ({ value: s.id, label: `${s.name} - $${s.price}` })),
];


export const resupplyChecklistItems = {
  kitchen: [
    { id: 'k1', label: 'Coffee Filters' },
    { id: 'k2', label: 'Coffee Pods / Ground Coffee' },
    { id: 'k3', label: 'Tea Bags' },
    { id: 'k4', label: 'Sugar / Sweeteners' },
    { id: 'k5', label: 'Salt &amp; Pepper Shakers (filled)' },
    { id: 'k6', label: 'Dish Soap' },
    { id: 'k7', label: 'Dishwasher Detergent' },
    { id: 'k8', label: 'Sponges / Dish Cloths' },
    { id: 'k9', label: 'Paper Towels' },
    { id: 'k10', label: 'Trash Bags' },
    { id: 'k11', label: 'Napkins' },
  ],
  bathroom: [
    { id: 'b1', label: 'Toilet Paper (min. 2 rolls per bathroom)' },
    { id: 'b2', label: 'Hand Soap' },
    { id: 'b3', label: 'Shampoo' },
    { id: 'b4', label: 'Conditioner' },
    { id: 'b5', label: 'Body Wash / Bar Soap' },
    { id: 'b6', label: 'Tissues' },
    { id: 'b7', label: 'Air Freshener' },
  ],
  bedroom: [
    { id: 'bd1', label: 'Extra Blankets (if applicable)' },
    { id: 'bd2', label: 'Hangers in Closet' },
  ],
  general: [
    { id: 'g1', label: 'Laundry Detergent (if washer/dryer available)' },
    { id: 'g2', label: 'Cleaning Supplies (all-purpose, glass cleaner)' },
    { id: 'g3', label: 'Welcome Basket Items (if applicable)' },
  ],
};
