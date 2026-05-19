import { Movie, Series, SubscriptionPlan } from '@/types';

export const MOCK_MOVIES: Movie[] = [
  {
    id: 'm1',
    type: 'movie',
    title: 'Neon Horizon',
    description: 'In a rain-soaked futuristic city, a rogue android hunter discovers a conspiracy that threatens the very fabric of reality.',
    year: 2024,
    genres: ['Sci-Fi', 'Thriller', 'Action'],
    ageRating: '16+',
    rating: 8.9,
    isDemo: true,
    duration: 7200,
    media: {
      posterUrl: 'https://picsum.photos/seed/m1p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m1b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: [
      { id: 'c1', name: 'Elena Vance', role: 'Detective Jax' },
      { id: 'c2', name: 'Marcus Thorne', role: 'The Architect' }
    ]
  },
  {
    id: 'm2',
    type: 'movie',
    title: 'Shadow Protocol',
    description: 'A former intelligence officer is forced back into the field when his family is targeted by a mysterious global syndicate.',
    year: 2023,
    genres: ['Action', 'Thriller'],
    ageRating: '16+',
    rating: 7.5,
    isDemo: true,
    duration: 6300,
    media: {
      posterUrl: 'https://picsum.photos/seed/m2p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m2b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: [{ id: 'c3', name: 'John Smith', role: 'Agent Echo' }]
  },
  {
    id: 'm3',
    type: 'movie',
    title: 'The Silent Forest',
    description: 'A young botanist discovers a species of plants that can communicate with humans, but the message they bring is a warning.',
    year: 2024,
    genres: ['Sci-Fi', 'Drama', 'Mystery'],
    ageRating: '12+',
    rating: 8.2,
    isDemo: true,
    duration: 5800,
    media: {
      posterUrl: 'https://picsum.photos/seed/m3p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m3b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: [{ id: 'c4', name: 'Sarah Green', role: 'Dr. Aris' }]
  },
  {
    id: 'm4',
    type: 'movie',
    title: 'Velocity X',
    description: 'High-stakes underground racing in the megacities of Mars. Speed isn\'t just a thrill; it\'s a currency.',
    year: 2024,
    genres: ['Action', 'Sci-Fi'],
    ageRating: '12+',
    rating: 6.9,
    isDemo: true,
    duration: 5400,
    media: {
      posterUrl: 'https://picsum.photos/seed/m4p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m4b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm5',
    type: 'movie',
    title: 'Midnight in Venice',
    description: 'A romantic mystery unfolds across the canals of Venice as two strangers find themselves entangled in an art heist.',
    year: 2023,
    genres: ['Romance', 'Mystery', 'Crime'],
    ageRating: '12+',
    rating: 7.8,
    isDemo: true,
    duration: 6000,
    media: {
      posterUrl: 'https://picsum.photos/seed/m5p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m5b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm6',
    type: 'movie',
    title: 'Code Red',
    description: 'A tech-thriller about a programmer who accidentally creates a sentient virus that begins to take control of the city infrastructure.',
    year: 2024,
    genres: ['Thriller', 'Sci-Fi'],
    ageRating: '16+',
    rating: 8.4,
    isDemo: true,
    duration: 6600,
    media: {
      posterUrl: 'https://picsum.photos/seed/m6p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m6b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm7',
    type: 'movie',
    title: 'Last Breath',
    description: 'A survival drama set in the aftermath of a global oxygen crisis. One family fights to reach the last remaining sanctuary.',
    year: 2022,
    genres: ['Drama', 'Sci-Fi'],
    ageRating: '16+',
    rating: 7.2,
    isDemo: true,
    duration: 7200,
    media: {
      posterUrl: 'https://picsum.photos/seed/m7p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m7b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm8',
    type: 'movie',
    title: 'The Alchemist\'s Tale',
    description: 'In an alternate 18th century, a young girl discovers her family\'s secret legacy of turning lead into gold—and the price it carries.',
    year: 2023,
    genres: ['Fantasy', 'Drama'],
    ageRating: '6+',
    rating: 8.1,
    isDemo: true,
    duration: 6900,
    media: {
      posterUrl: 'https://picsum.photos/seed/m8p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m8b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm9',
    type: 'movie',
    title: 'Starlight Express',
    description: 'A crew of intergalactic couriers must deliver a vital package through a territory controlled by space pirates.',
    year: 2024,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    ageRating: '12+',
    rating: 7.4,
    isDemo: true,
    duration: 5700,
    media: {
      posterUrl: 'https://picsum.photos/seed/m9p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m9b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm10',
    type: 'movie',
    title: 'Below Zero',
    description: 'An arctic expedition uncovers something frozen in the ice that should have stayed buried.',
    year: 2024,
    genres: ['Horror', 'Sci-Fi', 'Thriller'],
    ageRating: '18+',
    rating: 7.9,
    isDemo: true,
    duration: 6300,
    media: {
      posterUrl: 'https://picsum.photos/seed/m10p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m10b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm11',
    type: 'movie',
    title: 'The Great Heist',
    description: 'A crew of professional thieves plans the most ambitious bank robbery in history, only to find themselves betrayed from within.',
    year: 2023,
    genres: ['Crime', 'Action'],
    ageRating: '16+',
    rating: 8.0,
    isDemo: true,
    duration: 7200,
    media: {
      posterUrl: 'https://picsum.photos/seed/m11p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m11b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm12',
    type: 'movie',
    title: 'Project Genesis',
    description: 'Scientists successfully clone a prehistoric creature, but the ethics of their discovery soon spiral out of control.',
    year: 2024,
    genres: ['Sci-Fi', 'Thriller'],
    ageRating: '12+',
    rating: 7.6,
    isDemo: true,
    duration: 6800,
    media: {
      posterUrl: 'https://picsum.photos/seed/m12p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m12b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm13',
    type: 'movie',
    title: 'Urban Legends',
    description: 'A documentary filmmaker investigates several famous urban legends, only to find that some of them are very real.',
    year: 2024,
    genres: ['Horror', 'Mystery'],
    ageRating: '16+',
    rating: 6.8,
    isDemo: true,
    duration: 5400,
    media: {
      posterUrl: 'https://picsum.photos/seed/m13p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m13b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm14',
    type: 'movie',
    title: 'The Last Frontier',
    description: 'As Earth becomes uninhabitable, a group of explorers travels through a wormhole in search of a new home for humanity.',
    year: 2024,
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    ageRating: '12+',
    rating: 8.5,
    isDemo: true,
    duration: 9000,
    media: {
      posterUrl: 'https://picsum.photos/seed/m14p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m14b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm15',
    type: 'movie',
    title: 'Chasing Sunsets',
    description: 'An uplifting drama about an elderly man who decides to travel the world after a lifetime of hard work.',
    year: 2023,
    genres: ['Drama', 'Adventure'],
    ageRating: '0+',
    rating: 8.3,
    isDemo: true,
    duration: 6600,
    media: {
      posterUrl: 'https://picsum.photos/seed/m15p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m15b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm16',
    type: 'movie',
    title: 'Virtual Reality',
    description: 'A gamer finds himself trapped inside a hyper-realistic VR game where the stakes are life and death.',
    year: 2024,
    genres: ['Action', 'Sci-Fi'],
    ageRating: '12+',
    rating: 7.1,
    isDemo: true,
    duration: 6000,
    media: {
      posterUrl: 'https://picsum.photos/seed/m16p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m16b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm17',
    type: 'movie',
    title: 'The Secret Agent',
    description: 'A lighthearted action-comedy about a bumbling accountant who is mistaken for a top-tier secret agent.',
    year: 2024,
    genres: ['Action', 'Comedy'],
    ageRating: '12+',
    rating: 6.5,
    isDemo: true,
    duration: 5700,
    media: {
      posterUrl: 'https://picsum.photos/seed/m17p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m17b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm18',
    type: 'movie',
    title: 'Echoes of War',
    description: 'A historical drama following several families during a fictional 20th-century conflict.',
    year: 2022,
    genres: ['Drama', 'History'],
    ageRating: '16+',
    rating: 7.7,
    isDemo: true,
    duration: 7800,
    media: {
      posterUrl: 'https://picsum.photos/seed/m18p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m18b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm19',
    type: 'movie',
    title: 'The Martian Colony',
    description: 'Life in the first human settlement on Mars is anything but easy as the colonists face unforeseen challenges.',
    year: 2024,
    genres: ['Sci-Fi', 'Drama'],
    ageRating: '12+',
    rating: 8.0,
    isDemo: true,
    duration: 7500,
    media: {
      posterUrl: 'https://picsum.photos/seed/m19p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m19b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  },
  {
    id: 'm20',
    type: 'movie',
    title: 'Summer Dreams',
    description: 'A coming-of-age story about a group of friends spending their last summer together before heading to college.',
    year: 2023,
    genres: ['Drama', 'Romance'],
    ageRating: '12+',
    rating: 7.4,
    isDemo: true,
    duration: 6300,
    media: {
      posterUrl: 'https://picsum.photos/seed/m20p/300/450',
      backdropUrl: 'https://picsum.photos/seed/m20b/1920/1080',
      videoUrl: '/media/videos/sample.mp4'
    },
    cast: []
  }
];

export const MOCK_SERIES: Series[] = [
  {
    id: 's1',
    type: 'series',
    title: 'Aetheria',
    description: 'In a world where magic and steam-tech coexist, a group of misfits must stop a celestial event that could end their world.',
    year: 2024,
    genres: ['Fantasy', 'Adventure', 'Sci-Fi'],
    ageRating: '12+',
    rating: 9.2,
    isDemo: true,
    media: {
      posterUrl: 'https://picsum.photos/seed/s1p/300/450',
      backdropUrl: 'https://picsum.photos/seed/s1b/1920/1080'
    },
    cast: [{ id: 'c10', name: 'Lyra Belacqua', role: 'Sky Pirate' }],
    seasons: [
      {
        id: 's1-s1',
        number: 1,
        episodes: [
          {
            id: 's1-s1-e1',
            number: 1,
            title: 'The Crystal Core',
            description: 'Discovery of the ancient power source.',
            duration: 3600,
            thumbnailUrl: 'https://picsum.photos/seed/s1e1/400/225',
            videoUrl: '/media/videos/sample.mp4'
          }
        ]
      }
    ]
  },
  {
    id: 's2',
    type: 'series',
    title: 'The Grid',
    description: 'A dark thriller about a underground network of hackers fighting against a global surveillance state.',
    year: 2023,
    genres: ['Crime', 'Thriller', 'Drama'],
    ageRating: '18+',
    rating: 8.7,
    isDemo: true,
    media: {
      posterUrl: 'https://picsum.photos/seed/s2p/300/450',
      backdropUrl: 'https://picsum.photos/seed/s2b/1920/1080'
    },
    cast: [],
    seasons: []
  },
  {
    id: 's3',
    type: 'series',
    title: 'Lost in Time',
    description: 'A family accidentally travels back to various historical eras and must find their way home without altering history.',
    year: 2024,
    genres: ['Sci-Fi', 'Adventure', 'Family'],
    ageRating: '6+',
    rating: 7.9,
    isDemo: true,
    media: {
      posterUrl: 'https://picsum.photos/seed/s3p/300/450',
      backdropUrl: 'https://picsum.photos/seed/s3b/1920/1080'
    },
    cast: [],
    seasons: []
  },
  {
    id: 's4',
    type: 'series',
    title: 'Ocean Deep',
    description: 'A breathtaking nature documentary series exploring the mysteries of the world\'s oceans.',
    year: 2023,
    genres: ['Documentary'],
    ageRating: '0+',
    rating: 9.5,
    isDemo: true,
    media: {
      posterUrl: 'https://picsum.photos/seed/s4p/300/450',
      backdropUrl: 'https://picsum.photos/seed/s4b/1920/1080'
    },
    cast: [],
    seasons: []
  },
  {
    id: 's5',
    type: 'series',
    title: 'Metropolis',
    description: 'Political drama set in a futuristic megacity where the divide between the rich and poor has reached a breaking point.',
    year: 2024,
    genres: ['Drama', 'Sci-Fi'],
    ageRating: '16+',
    rating: 8.4,
    isDemo: true,
    media: {
      posterUrl: 'https://picsum.photos/seed/s5p/300/450',
      backdropUrl: 'https://picsum.photos/seed/s5b/1920/1080'
    },
    cast: [],
    seasons: []
  },
  {
    id: 's6',
    type: 'series',
    title: 'Galaxy Quest',
    description: 'An animated comedy series about a dysfunctional crew on a low-budget exploration vessel.',
    year: 2024,
    genres: ['Animation', 'Comedy', 'Sci-Fi'],
    ageRating: '12+',
    rating: 8.1,
    isDemo: true,
    media: {
      posterUrl: 'https://picsum.photos/seed/s6p/300/450',
      backdropUrl: 'https://picsum.photos/seed/s6b/1920/1080'
    },
    cast: [],
    seasons: []
  },
  {
    id: 's7',
    type: 'series',
    title: 'The Last Stand',
    description: 'A post-apocalyptic drama where the remaining human colonies fight for resources and survival.',
    year: 2023,
    genres: ['Drama', 'Action', 'Sci-Fi'],
    ageRating: '16+',
    rating: 7.8,
    isDemo: true,
    media: {
      posterUrl: 'https://picsum.photos/seed/s7p/300/450',
      backdropUrl: 'https://picsum.photos/seed/s7b/1920/1080'
    },
    cast: [],
    seasons: []
  },
  {
    id: 's8',
    type: 'series',
    title: 'Mind Games',
    description: 'Psychological thriller about a detective who can enter the dreams of suspects to find clues.',
    year: 2024,
    genres: ['Thriller', 'Crime', 'Mystery'],
    ageRating: '18+',
    rating: 8.9,
    isDemo: true,
    media: {
      posterUrl: 'https://picsum.photos/seed/s8p/300/450',
      backdropUrl: 'https://picsum.photos/seed/s8b/1920/1080'
    },
    cast: [],
    seasons: []
  },
  {
    id: 's9',
    type: 'series',
    title: 'Cooking with Fire',
    description: 'Competitive cooking show where chefs must prepare meals using only open flames and primitive tools.',
    year: 2024,
    genres: ['Reality-TV'],
    ageRating: '6+',
    rating: 7.2,
    isDemo: true,
    media: {
      posterUrl: 'https://picsum.photos/seed/s9p/300/450',
      backdropUrl: 'https://picsum.photos/seed/s9b/1920/1080'
    },
    cast: [],
    seasons: []
  },
  {
    id: 's10',
    type: 'series',
    title: 'The Great Outdoors',
    description: 'Travel series showcasing the most beautiful and remote wilderness areas on the planet.',
    year: 2023,
    genres: ['Documentary', 'Adventure'],
    ageRating: '0+',
    rating: 8.6,
    isDemo: true,
    media: {
      posterUrl: 'https://picsum.photos/seed/s10p/300/450',
      backdropUrl: 'https://picsum.photos/seed/s10b/1920/1080'
    },
    cast: [],
    seasons: []
  }
];

export const MOCK_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan-basic',
    name: 'Basic',
    price: 9.99,
    features: ['720p resolution', '1 screen at a time', 'Ad-supported']
  },
  {
    id: 'plan-standard',
    name: 'Standard',
    price: 15.99,
    features: ['1080p resolution', '2 screens at a time', 'No ads'],
    isPopular: true
  },
  {
    id: 'plan-premium',
    name: 'Premium',
    price: 19.99,
    features: ['4K + HDR resolution', '4 screens at a time', 'No ads', 'Spatial audio']
  }
];
