const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'nicheProducts.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Add imagePlaceholder to interface
content = content.replace(
  '  badge?: string;\n}',
  '  badge?: string;\n  imagePlaceholder: string;\n}'
);

// Add imagePlaceholder to each product object
const products = [
  'ecommerce-multivendor-saas',
  'hotel-hostel-pms',
  'restaurant-pos-ordering',
  'hospital-clinic-emr',
  'real-estate-portal',
  'school-college-lms',
  'travel-tour-booking',
  'logistics-courier-tracker',
  'gym-salon-booking',
  'fintech-micro-lending',
  'inventory-warehouse-erp',
  'on-demand-service-app',
  'enterprise-ai-chatbot',
  'car-rental-fleet',
  'job-board-recruitment-ats',
  'pharmacy-medical-pos',
  'event-qr-ticketing',
  'crowdfunding-donation-platform'
];

products.forEach(id => {
  const target = `id: "${id}",`;
  const replacement = `id: "${id}",\n    imagePlaceholder: "/images/solutions/${id}.svg",`;
  content = content.replace(target, replacement);
});

fs.writeFileSync(filePath, content);
console.log('Successfully updated nicheProducts.ts with imagePlaceholder fields');
