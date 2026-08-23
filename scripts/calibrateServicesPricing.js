const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'config', 'siteData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const updatedPricingMap = {
  'custom-software': {
    usd: '$615 – $1,870',
    npr: 'NPR 95,000 – 2,90,000',
    model: 'Milestone Sprint',
    turnaround: '3 – 6 Weeks',
  },
  'web-apps-platforms': {
    usd: '$420 – $1,260',
    npr: 'NPR 65,000 – 1,95,000',
    model: 'Agile Delivery',
    turnaround: '2 – 5 Weeks',
  },
  'website-design-dev': {
    usd: '$160 – $420',
    npr: 'NPR 25,000 – 65,000',
    model: 'Fixed Turnkey Setup',
    turnaround: '1 – 2 Weeks',
  },
  'mobile-app-dev': {
    usd: '$550 – $1,680',
    npr: 'NPR 85,000 – 2,60,000',
    model: 'Cross-Platform Sprint',
    turnaround: '3 – 6 Weeks',
  },
  'subscription-software': {
    usd: '$225 – $615 setup + $25–$80/mo',
    npr: 'NPR 35,000 – 95,000 setup',
    model: 'Monthly / Annual SaaS',
    turnaround: '1 – 2 Weeks',
  },
  'digital-marketing-branding': {
    usd: '$120 – $355/mo',
    npr: 'NPR 18,000 – 55,000/mo',
    model: 'Monthly Growth Retainer',
    turnaround: 'Ongoing Campaign',
  },
  'content-creation-mgmt': {
    usd: '$100 – $290/mo',
    npr: 'NPR 15,000 – 45,000/mo',
    model: 'Monthly Editorial Retainer',
    turnaround: 'Weekly Publishing',
  },
  'it-support-maintenance': {
    usd: '$100 – $270/mo',
    npr: 'NPR 15,000 – 42,000/mo',
    model: '24/7 SLA Helpdesk Retainer',
    turnaround: 'Sub-15m Emergency SLA',
  },
  'domain-hosting-services': {
    usd: '$50 – $180/yr',
    npr: 'NPR 8,000 – 28,000/yr',
    model: 'Managed Annual Infrastructure',
    turnaround: '24 – 48 Hours',
  },
  'deployment-cloud-support': {
    usd: '$260 – $805',
    npr: 'NPR 40,000 – 1,25,000',
    model: 'DevOps Cloud Sprint',
    turnaround: '1 – 3 Weeks',
  },
  'annual-subscription-maintenance': {
    usd: '$225 – $710/yr',
    npr: 'NPR 35,000 – 1,10,000/yr',
    model: 'Annual Master AMC Agreement',
    turnaround: 'Annual 365-Day SLA',
  },
  'social-media-management': {
    usd: '$105 – $310/mo',
    npr: 'NPR 16,000 – 48,000/mo',
    model: 'Monthly Channel Retainer',
    turnaround: 'Ongoing Growth',
  },
  'seo-analytics-services': {
    usd: '$130 – $390/mo',
    npr: 'NPR 20,000 – 60,000/mo',
    model: 'Quarterly Performance SOW',
    turnaround: 'Monthly Reporting',
  },
  'consulting-advisory': {
    usd: '$225 – $740',
    npr: 'NPR 35,000 – 1,15,000',
    model: 'Advisory / Due Diligence',
    turnaround: '1 – 2 Weeks',
  },
};

Object.entries(updatedPricingMap).forEach(([id, price]) => {
  const regex = new RegExp(`id:\\s*"${id}"[\\s\\S]*?priceRange:\\s*\\{[\\s\\S]*?\\},`, 'g');
  content = content.replace(regex, (match) => {
    return match.replace(/priceRange:\s*\{[\s\S]*?\},/, `priceRange: {\n        usd: "${price.usd}",\n        npr: "${price.npr}",\n        model: "${price.model}",\n        turnaround: "${price.turnaround}",\n      },`);
  });
});

fs.writeFileSync(filePath, content);
console.log('Successfully calibrated siteData.ts service pricing');
