const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'config', 'siteData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Update ServiceItem interface
const interfaceTarget = `  features: string[];\n  metrics: string;\n}`;
const interfaceReplacement = `  features: string[];\n  metrics: string;\n  priceRange: {\n    usd: string;\n    npr: string;\n    model: string;\n    turnaround: string;\n  };\n}`;

content = content.replace(interfaceTarget, interfaceReplacement);

// Pricing data mapping
const pricingMap = {
  'custom-software': {
    usd: '$1,500 – $4,500',
    npr: 'NPR 2,32,500 – 6,97,500',
    model: 'Milestone-Based Custom Sprint',
    turnaround: '3 – 6 Weeks',
  },
  'web-apps-platforms': {
    usd: '$1,200 – $3,800',
    npr: 'NPR 1,86,000 – 5,89,000',
    model: 'Full-Cycle Agile Delivery',
    turnaround: '2 – 5 Weeks',
  },
  'website-design-dev': {
    usd: '$450 – $1,400',
    npr: 'NPR 69,750 – 2,17,000',
    model: 'Fixed Turnkey Setup',
    turnaround: '1 – 2 Weeks',
  },
  'mobile-app-dev': {
    usd: '$1,400 – $4,000',
    npr: 'NPR 2,17,000 – 6,20,000',
    model: 'Cross-Platform Sprint',
    turnaround: '3 – 6 Weeks',
  },
  'subscription-software': {
    usd: '$600 – $2,000 + $50–$250/mo',
    npr: 'NPR 93,000 – 3,10,000 setup',
    model: 'Monthly / Annual SaaS',
    turnaround: '1 – 2 Weeks',
  },
  'digital-marketing-branding': {
    usd: '$350 – $1,200/mo',
    npr: 'NPR 54,250 – 1,86,000/mo',
    model: 'Monthly Growth Retainer',
    turnaround: 'Ongoing Campaign',
  },
  'content-creation-mgmt': {
    usd: '$300 – $900/mo',
    npr: 'NPR 46,500 – 1,39,500/mo',
    model: 'Monthly Editorial Retainer',
    turnaround: 'Weekly Publishing',
  },
  'it-support-maintenance': {
    usd: '$250 – $800/mo',
    npr: 'NPR 38,750 – 1,24,000/mo',
    model: '24/7 SLA Helpdesk Retainer',
    turnaround: 'Sub-15m Emergency SLA',
  },
  'domain-hosting-services': {
    usd: '$150 – $600/yr',
    npr: 'NPR 23,250 – 93,000/yr',
    model: 'Managed Annual Infrastructure',
    turnaround: '24 – 48 Hours',
  },
  'deployment-cloud-support': {
    usd: '$800 – $2,500',
    npr: 'NPR 1,24,000 – 3,87,500',
    model: 'DevOps Cloud Sprint',
    turnaround: '1 – 3 Weeks',
  },
  'annual-subscription-maintenance': {
    usd: '$1,000 – $3,500/yr',
    npr: 'NPR 1,55,000 – 5,42,500/yr',
    model: 'Annual Master AMC Agreement',
    turnaround: 'Annual 365-Day SLA',
  },
  'social-media-management': {
    usd: '$280 – $850/mo',
    npr: 'NPR 43,400 – 1,31,750/mo',
    model: 'Monthly Channel Retainer',
    turnaround: 'Ongoing Growth',
  },
  'seo-analytics-services': {
    usd: '$350 – $1,100/mo',
    npr: 'NPR 54,250 – 1,70,500/mo',
    model: 'Quarterly Performance SOW',
    turnaround: 'Monthly Reporting',
  },
  'consulting-advisory': {
    usd: '$700 – $2,200',
    npr: 'NPR 1,08,500 – 3,41,000',
    model: 'Advisory / Project Due Diligence',
    turnaround: '1 – 2 Weeks',
  },
};

Object.entries(pricingMap).forEach(([id, price]) => {
  const serviceRegex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?metrics:\\s*"[^"]*",)`, 'g');
  content = content.replace(serviceRegex, (match) => {
    return `${match}\n      priceRange: {\n        usd: "${price.usd}",\n        npr: "${price.npr}",\n        model: "${price.model}",\n        turnaround: "${price.turnaround}",\n      },`;
  });
});

fs.writeFileSync(filePath, content);
console.log('Successfully updated siteData.ts with service pricing data');
