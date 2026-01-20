
import { AppConfig, ServiceStatus, ContentType } from './types';

export const INITIAL_DATA: AppConfig = {
  theme: {
    primaryColor: '#dc2626',
    radius: '0.75rem',
  },
  navItems: [
    { id: '1', label: 'Home', path: '/' },
    { id: '2', label: 'Releases', path: '/releases' },
    { id: '3', label: 'Guides', path: '/guides' },
    { id: '4', label: 'FAQ', path: '/faq' },
    { id: '5', label: 'Blog', path: '/blog' },
    { id: '6', label: 'Status', path: '/status' },
  ],
  hero: {
    headline: 'Experience Premium Entertainment',
    subheadline: 'The ultimate streaming portal for requested content. High quality, zero ads, community driven.',
    primaryCTA: 'Open Overseerr',
    secondaryCTA: 'How to Join',
  },
  features: [
    { id: '1', title: 'Plex Access', description: 'Enjoy our massive library on any device with the Plex app.', icon: '📺' },
    { id: '2', title: 'Overseerr Requests', description: 'Find a title you like? Request it instantly via our web portal.', icon: '✉️' },
    { id: '3', title: '4K/HDR Quality', description: 'The best bitrates and quality profiles for the cinematic experience.', icon: '✨' },
  ],
  releases: [
    { 
      id: 'r1', 
      type: ContentType.MOVIE, 
      title: 'Neon Horizon', 
      year: 2024, 
      synopsis: 'A journey into the futuristic world of cybernetics and AI.', 
      tags: ['Sci-Fi', 'Action'], 
      recommended: true, 
      posterUrl: 'https://picsum.photos/400/600?random=1' 
    },
    { 
      id: 'r2', 
      type: ContentType.SERIES, 
      title: 'Midnight Echoes', 
      year: 2023, 
      synopsis: 'A detective uncovers secrets in a town that never sleeps.', 
      tags: ['Thriller', 'Crime'], 
      recommended: false, 
      posterUrl: 'https://picsum.photos/400/600?random=2' 
    }
  ],
  services: [
    { id: 's1', name: 'Plex Server', status: ServiceStatus.OPERATIONAL, note: 'Running smoothly' },
    { id: 's2', name: 'Overseerr', status: ServiceStatus.OPERATIONAL, note: 'All requests processing' },
    { id: 's3', name: 'VPN Gateway', status: ServiceStatus.DEGRADED, note: 'Slight latency increase' },
  ],
  blog: [
    { 
      id: 'b1', 
      title: 'New Infrastructure Updates', 
      excerpt: 'We have upgraded our storage nodes to support higher bitrates.', 
      content: 'Detailed post content here...', 
      category: 'Update', 
      date: '2024-05-20', 
      imageUrl: 'https://picsum.photos/800/400?random=10' 
    }
  ],
  faq: [
    { id: 'f1', question: 'How do I request a movie?', answer: 'Login to Overseerr and click the Request button.' },
    { id: 'f2', question: 'What devices are supported?', answer: 'Plex supports almost everything: Smart TVs, Mobiles, Consoles, and Web.' }
  ]
};
