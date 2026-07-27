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
    'I recently completed my paralegal certification at Cal State LA before immediately packing up and transplanting myself back to my hometown of Berkeley this July.',
    'Once I began my job hunt in the Bay, I quickly decided I would build this website for two reasons:',
    '1. I don’t think the dominant culture of LinkedIn and Indeed.com are conducive to displaying anybody’s real abilities or personality; and…',
    '2. That same culture only lets HR evaluate candidates by keywords and longevity—not talent or ambition.',
    'I excelled in the paralegal program because I had the opportunity for face-to-face interaction with my professors and fellow students—you can ask them about it! They came to know that I would thrive in the paralegal world because of who I am, not because they read a bullet list of work experience.',
    'Because, while I haven’t worked at a law firm yet, I have spent years doing work that required careful documentation, technical troubleshooting, client communication, research, and managing large volumes of data. These are the skills that drew me to legal and legal tech worlds, and I’ve pursued training in these areas because that’s exactly where I’m aiming my career.',
    'So, if you still want a boring normal resume, here you go. Otherwise, you can see the certifications I’ve earned and some work samples from my time at Cal State down below!'
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
      description:
        'At CineMarket, I supported film-development projects by collecting, organizing, and reviewing contracts, copyright records, transfer documents, correspondence, and other rights materials. My work included identifying gaps and inconsistencies in chain-of-title documentation, coordinating research and information requests, and building cloud-based systems for tracking contracts, scripts, project notes, and financial information across multiple active projects.',
      appliedSkills:
        'Rights research, document organization, issue identification, database development, systems administration, and stakeholder support.'
    },
    {
      id: 'american-soil-stone',
      role: 'Domestic Purchasing & Logistics Manager',
      organization: 'American Soil & Stone',
      dates: '2014 – 2017',
      description:
        'At American Soil & Stone, I advanced from sales associate to domestic purchasing and logistics manager, serving as a central point of coordination among customers, suppliers, internal teams, and fabrication partners. I managed purchasing records, order status, scheduling, vendor communications, and issue resolution, led the company’s first inventory audit in more than a decade, and contributed to the implementation of a new point-of-sale system.',
      appliedSkills:
        'Vendor coordination, purchasing operations, records accuracy, inventory auditing, systems implementation, and operational problem-solving.'
    },
    {
      id: 'kirby-cabinetry',
      role: 'Custom Cabinet Designer & Fabricator',
      organization: 'Kirby Cabinetry',
      dates: '2017 – 2020, 2021 – 2023',
      description:
        'Through Kirby Cabinetry, I managed approximately 25 custom projects from initial client discussions and project scoping through design, purchasing, fabrication, scheduling, installation, and final approval. Each engagement required careful documentation, coordination with vendors and clients, management of changing requirements, technical problem-solving, and accountability for delivering a finished result.',
      appliedSkills:
        'Project scoping, workflow management, purchasing, client communication, vendor coordination, technical problem-solving, and end-to-end accountability.'
    },
    {
      id: 'film-media-composer',
      role: 'Film & Media Composer',
      organization: '',
      dates: '2016 – 2024',
      description:
        'As a freelance music supervisor and composer, I managed music-clearance workflows from initial rights-holder research through licensing discussions and execution. I maintained records of negotiations, ownership information, approvals, cue sheets, deliverables, and unresolved clearance issues while coordinating with publishers, producers, rights holders, and creative teams across concurrent productions.',
      appliedSkills:
        'Rights clearance, contract tracking, records management, deadline coordination, stakeholder communication, and issue resolution.'
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
        phone: '(310) 427-5838',
        email: 'jcole17@calstatela.edu'
      },
      {
        id: 'reference-04',
        name: 'Bobby T. Rimas',
        role: 'CalState LA Professor\nParalegal @ Seyfarth Shaw, LLP',
        phone: '(213) 952-9914',
        email: 'bobby.tom.rimas@gmail.com'
      },
      {
        id: 'reference-05',
        name: 'Peter Hong',
        role: 'CalState LA Professor\nAttorney',
        phone: '(323) 578-0544',
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