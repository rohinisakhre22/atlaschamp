import {
  ArrowUpCircle,
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Code,
  Link,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Settings,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import type { ContactInfoItem, NavItem, Service, Stat } from '../types/site';

export const SITE = {
  name: 'AtlasChamp',
  tagline: 'Expert Atlassian Solutions for Your Business',
  description:
    'AtlasChamp delivers comprehensive Atlassian services—from migrations and upgrades to custom development and consulting—for teams that want to maximize Jira and Confluence.',
  url: 'https://atlaschamp.com',
  email: 'support@atlaschamp.com',
  phone: '+91 84212 44897',
  phoneTel: '+918421244897',
  address:
    'Lane No 13, Green Park, Lohegaon, Pune, Maharashtra, India',
  copyrightYear: new Date().getFullYear(),
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export const HERO_FEATURES = [
  'Certified Atlassian Partners',
  '500+ Successful Projects',
  '24/7 Expert Support',
] as const;

export const HERO_HIGHLIGHTS = [
  {
    id: 'jira-admin',
    icon: Settings,
    title: 'Jira Administration',
    description: 'Complete setup & optimization',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 'migration',
    icon: CheckCircle,
    title: 'Migration Services',
    description: 'Seamless data transitions',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    id: 'custom-dev',
    icon: ArrowRight,
    title: 'Custom Development',
    description: 'Tailored solutions',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
] as const;

export const SERVICES: Service[] = [
  {
    id: 'upgrades',
    icon: ArrowUpCircle,
    title: 'Upgrades & Updates',
    description:
      'Keep your Atlassian tools current with seamless version upgrades and feature updates.',
    features: [
      'Version compatibility checks',
      'Zero-downtime upgrades',
      'Performance optimization',
      'Post-upgrade testing',
    ],
    color: 'blue',
    overview: [
      'Staying current on Atlassian releases keeps your teams secure, supported, and able to use the latest capabilities. We plan and execute upgrades with a focus on compatibility, downtime risk, and rollback safety.',
      'Whether you run Data Center or Cloud, we validate apps, workflows, and integrations before go-live so production surprises are rare.',
    ],
    benefits: [
      'Reduced upgrade risk with structured test plans',
      'Minimal disruption to active projects',
      'Documentation and handover for your admins',
    ],
  },
  {
    id: 'migration',
    icon: RefreshCw,
    title: 'Migration Services',
    description:
      'Move your data safely between platforms or migrate to cloud with complete data integrity.',
    features: [
      'Server to Cloud migration',
      'Data mapping & validation',
      'User account migration',
      'Configuration transfer',
    ],
    color: 'green',
    overview: [
      'Moving from Server or Data Center to Cloud—or between environments—requires careful mapping of projects, users, permissions, and history. We treat migration as a product delivery, not a one-off export.',
      'Our team handles discovery, pilot migrations, cutover planning, and hypercare so your organization lands on a stable target platform.',
    ],
    benefits: [
      'Validated data with reconciliation reports',
      'Phased cutover options for large instances',
      'Post-migration optimization and training',
    ],
  },
  {
    id: 'development',
    icon: Code,
    title: 'Custom Development',
    description:
      'Build custom apps, workflows, and integrations tailored to your unique business needs.',
    features: [
      'Custom Jira apps',
      'Confluence macros',
      'Workflow automation',
      'API development',
      'Scripting & Automation',
      'Marketplace app support',
    ],
    color: 'purple',
    overview: [
      'When out-of-the-box Atlassian tools need to match your unique processes, custom apps, scripts, and macros bridge the gap. We build maintainable solutions on Forge, Connect, and REST APIs.',
      'From workflow validators to Confluence experiences, we align technical design with how your teams actually work.',
    ],
    benefits: [
      'Solutions that follow Atlassian platform guidelines',
      'Clear ownership, code review, and deployment pipelines',
      'Ongoing support and enhancement options',
    ],
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automation',
    description:
      'Streamline your processes with intelligent automation rules and workflows.',
    features: [
      'Workflow automation',
      'Rule configuration',
      'Process optimization',
      'Error handling',
    ],
    color: 'orange',
    overview: [
      'Manual handoffs between Jira, Confluence, and other systems slow delivery. We design automation rules, Jira automation, and scripted workflows that remove repetitive work while keeping auditability.',
      'We balance speed with guardrails—clear error handling, permissions, and logging so automations stay trustworthy as you scale.',
    ],
    benefits: [
      'Faster cycle times on repeatable processes',
      'Fewer human errors in handoffs and approvals',
      'Governed automation with documented ownership',
    ],
  },
  {
    id: 'integrations',
    icon: Link,
    title: 'Integrations',
    description:
      'Connect Atlassian tools with your existing systems for seamless data flow.',
    features: [
      'Third-party integrations',
      'API connections',
      'Data synchronization',
      'Custom connectors',
    ],
    color: 'teal',
    overview: [
      'Your Atlassian stack should connect cleanly to CRM, DevOps, HR, and internal tools. We design integrations with reliable authentication, retries, and monitoring.',
      'Whether you need a marketplace app configured or a bespoke connector, we focus on data consistency and operational support.',
    ],
    benefits: [
      'Single source of truth across teams',
      'Observable sync jobs with alerting',
      'Security-reviewed connection patterns',
    ],
  },
  {
    id: 'consulting',
    icon: Users,
    title: 'Consulting Services',
    description:
      'Expert guidance on best practices, architecture, and strategic implementation.',
    features: [
      'Strategy consultation',
      'Best practices training',
      'Performance audits',
      'Team coaching',
    ],
    color: 'indigo',
    overview: [
      'Strategic guidance helps you avoid costly rework. Our consultants assess architecture, licensing, governance, and team practices across the Atlassian portfolio.',
      'We deliver actionable roadmaps, workshops, and coaching so your internal champions can sustain improvements long after the engagement.',
    ],
    benefits: [
      'Aligned tooling with business outcomes',
      'Practical recommendations—not shelfware reports',
      'Enablement for admins and team leads',
    ],
  },
];

export function getServiceById(id: string) {
  return SERVICES.find((s) => s.id === id);
}

export function getServicePath(id: string) {
  return `/services/${id}`;
}

export const ABOUT_BULLETS = [
  'Atlassian Solution Partner',
  'Enterprise-Grade Support',
  'Global Team, Local Expertise',
] as const;

export const STATS: Stat[] = [
  { id: 'projects', icon: Users, value: '50+', label: 'Projects Completed' },
  { id: 'experience', icon: Clock, value: '5+', label: 'Years Experience' },
  { id: 'experts', icon: Award, value: '10+', label: 'Certified Experts' },
  {
    id: 'satisfaction',
    icon: TrendingUp,
    value: '100%',
    label: 'Client Satisfaction',
  },
];

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    id: 'email',
    icon: Mail,
    title: 'Email Us',
    value: SITE.email,
    link: `mailto:${SITE.email}`,
  },
  {
    id: 'phone',
    icon: Phone,
    title: 'Call Us',
    value: SITE.phone,
    link: `tel:${SITE.phoneTel}`,
  },
  {
    id: 'address',
    icon: MapPin,
    title: 'Visit Us',
    value: SITE.address,
    link: '#contact',
  },
];

export const WHY_CHOOSE_US = [
  'Free initial consultation',
  'Transparent pricing',
  'Certified Atlassian experts',
  '24/7 support available',
  'Proven track record',
] as const;

export const FOOTER_SERVICE_LINKS = SERVICES.map((s) => ({
  id: s.id,
  label: s.title,
  href: getServicePath(s.id),
}));

export const FOOTER_COMPANY_LINKS = [
  { id: 'about', label: 'About Us', href: '/#about' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { id: 'privacy', label: 'Privacy Policy', href: '#contact' },
  { id: 'terms', label: 'Terms of Service', href: '#contact' },
  { id: 'cookies', label: 'Cookie Policy', href: '#contact' },
] as const;
