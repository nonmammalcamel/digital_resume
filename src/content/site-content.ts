export const siteContent = {
  identity: {
    name: 'Travis Kirby',
    role: 'Litigation Paralegal / eDiscovery / Legal Tech '
  },
  navigation: [
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Experience',
      href: '#experience'
    },
    {
      label: 'Certifications',
      href: '#certifications'
    },
    {
      label: 'Samples',
      href: '#work-samples'
    },
    {
      label: 'Education',
      href: '#education'
    },
    {
      label: 'References',
      href: '#references'
    },
    {
      label: 'Contact',
      href: '#contact'
    }
  ],
  about: {
    title: 'About Me',
    paragraphs: [
      'Welcome to my digital resume! I’m Travis.',
      'I recently completed my paralegal certification at CSULA, and once I began my job hunt in the legal field, I quickly decided I should build this website for two reasons:',
      '1. I don’t think the dominant job board culture of LinkedIn is conducive to showing anyone’s abilities, accomplishments, or personality; and…',
      '2. The same culture only lets HR evaluate candidates by keywords and longevity—not talent or ambition.',
      'After all, if I’ve dedicated the effort and energy to build this site just to sell myself to employers... imagine the level of focused, directed work I could do for you.'
    ]
  },
  experience: {
    title: 'Experience',
    items: [
      {
        id: 'cinemarket',
        role: 'Film Consultant & Technical Support',
        organization: 'CineMarket, LLC',
        dates: '2021 – Present',
        details: [
          'I provided legal perspective on several film contracts for CineMarket’s consultation business—most notably reviewing IP rights for Elmore Leonard’s Cat Chaser and right of transfer for the Highlander film franchise.',
          'I rebuilt the accounting and project databases, making expense reporting much faster and creating cloud-accessible systems for scripts, notes, and IP contract tracking.'
        ]
      },
      {
        id: 'american-soil-stone',
        role: 'Domestic Purchasing & Logistics Manager',
        organization: 'American Soil & Stone',
        dates: '2014 – 2017',
        details: [
          'I started as a sales associate and was later promoted to domestic purchasing manager, eventually also becoming the point of contact for the large-scale stone fabrication department.',
          'I was the company’s primary internal partner while developing a new PoS system, during which I completed the first full inventory check in over a decade—tracking thousands of cubic yards of soil, gravel, and mulch, as well as several thousand tons of flagstone and boulders.'
        ]
      },
      {
        id: 'kirby-cabinetry',
        role: 'Custom Cabinet Designer & Fabricator',
        organization: 'Kirby Cabinetry',
        dates: '2017 – 2020, 2021 – 2023',
        details: [
          'I helped carry roughly 25 high-end custom cabinetry projects from early design conversations through fabrication and final assembly.'
        ]
      },
      {
        id: 'film-media-composer',
        role: 'Film & Media Composer',
        organization: '',
        dates: '2016 – 2024',
        details: [
          'Across one feature film, seven short films, three podcasts, and two videogames, I composed and recorded original music, always aiming to serve each creator’s vision rather than imposing my own.'
        ]
      }
    ]
  },
  certifications: {
    title: 'Certifications',
    intro:
      'Formal training and legal-technology credentials supporting my transition into paralegal and legal support work.',
    featured: {
      id: 'cal-state-la-paralegal',
      title: 'Paralegal Certificate',
      issuer: 'Cal State LA',
      description:
        'Completed a paralegal certificate program focused on legal research, legal writing, litigation procedure, document preparation, ethics, and practical legal support skills.',
      href: '/certs/paralegal-certificate.pdf'
    },
    categories: [
      {
        id: 'ediscovery',
        title: 'eDiscovery Certifications',
        items: [
          {
            id: 'disco-data-management',
            title: 'DISCO Data Management',
            href: '/certs/disco-data-management.pdf'
          },
          {
            id: 'disco-search-review',
            title: 'DISCO Search & Review',
            href: '/certs/disco-search-review.pdf'
          }
        ]
      },
      {
        id: 'digital-forensics',
        title: 'Digital Forensics Certifications',
        items: [
          {
            id: 'blue-team-junior-analyst',
            title: 'Blue Team Junior Analyst',
            href: '/certs/blue-team-junior-analyst.pdf',
            children: [
              {
                id: 'intro-digital-forensics',
                title: 'Intro to Digital Forensics',
                href: '/certs/blue-team-digitalforensics.pdf'
              },
              {
                id: 'intro-osint',
                title: 'Intro to OSINT',
                href: '/certs/blue-team-OSINT.pdf'
              },
              {
                id: 'intro-dark-web',
                title: 'Intro to the Dark Web',
                href: '/certs/blue-team-darkweb.pdf'
              },
              {
                id: 'intro-network-analysis',
                title: 'Intro to Network Analysis',
                href: '/certs/blue-team-networkanalysis.pdf'
              },
              {
                id: 'intro-threat-hunting',
                title: 'Intro to Threat Hunting',
                href: '/certs/blue-team-threathunting.pdf'
              },
              {
                id: 'intro-vulnerability-management',
                title: 'Intro to Vulnerability Management',
                href: '/certs/blue-team-vulman.pdf'
              }
            ]
          },
          {
            id: 'digital-forensics-placeholder',
            title: 'Placeholder',
            children: [
              {
                id: 'placeholder-subdocument-01',
                title: 'Subdocument Placeholder 01'
              },
              {
                id: 'placeholder-subdocument-02',
                title: 'Subdocument Placeholder 02'
              },
              {
                id: 'placeholder-subdocument-03',
                title: 'Subdocument Placeholder 03'
              },
              {
                id: 'placeholder-subdocument-04',
                title: 'Subdocument Placeholder 04'
              }
            ]
          }
        ]
      }
    ]
  },
  workSamples: {
    title: 'Legal Work Samples',
    intro:
      'Here are some work samples I completed during the CSULA paralegal program. Please click on any of them to see examples of my legal writing, research, analysis, and document preparation skills.',
    items: [
      {
        id: 'legal-memorandum',
        title: 'Legal Memorandum',
        href: '/work-samples/legal-memorandum.pdf'
      },
      {
        id: 'complaint',
        title: 'Complaint',
        href: '/work-samples/complaint.pdf'
      },
      {
        id: 'deposition-transcript',
        title: 'Deposition Transcript',
        href: '/work-samples/deposition-transcript.pdf'
      },
      {
        id: 'contract',
        title: 'Contract',
        href: '/work-samples/contract.pdf'
      }
    ]
  },
  education: {
    title: 'Education',
    items: [
      {
        id: 'evergreen-math',
        credential: 'Bachelor of Science in Mathematics',
        institution: 'The Evergreen State College'
      },
      {
        id: 'evergreen-music-production',
        credential: 'Bachelor of Arts in Music Production',
        institution: 'The Evergreen State College'
      }
    ]
  },
  references: {
    title: 'References',
    items: [
      {
        id: 'reference-01',
        name: 'Jason Brooks',
        role: 'CalState LA Professor\nLegal Tech Professional',
        phone: '(714) 230–5204',
        email: 'jbrook18@calstatela.edu'
      },
      {
        id: 'reference-02',
        name: 'Peter D. Graves',
        role: 'President @ CineMarket, LLC',
        phone: '(310) 717-1871',
        email: 'peter@cinemarketfilm.com'
      },
      {
        id: 'reference-03',
        name: 'Jason Cole',
        role: 'CalState LA Professor\nAttorney',
        phone: '(555) 000-0003',
        email: 'jcole17@calstatela.edu'
      },
      {
        id: 'reference-04',
        name: 'Bobby T. Rimas',
        role: 'CalState LA Professor\nParalegal @ Seyfarth Shaw, LLP',
        phone: '(555) 000-0004',
        email: 'bobby.tom.rimas@gmail.com'
      },
      {
        id: 'reference-05',
        name: 'Peter Hong',
        role: 'CalState LA Professor\nAttorney',
        phone: '(555) 000-0005',
        email: 'pjshong1@gmail.com'
      }
    ]
  },
  contact: {
    title: 'Contact',
    intro:
      'I’d love to speak further about opportunities where my paralegal training, legal technology background, and work ethic could be useful.',
    items: [
      {
        id: 'contact-email',
        label: 'Email',
        value: 'thelegaltraviskirby@outlook.com',
        href: 'mailto:thelegaltraviskirby@outlook.com'
      },
      {
        id: 'contact-phone',
        label: 'Phone',
        value: '(510) 301-9265',
        href: 'tel:+15103019265'
      },
      {
        id: 'contact-location',
        label: 'Location',
        value: 'Berkeley, CA'
      }
    ]
  }
} as const;