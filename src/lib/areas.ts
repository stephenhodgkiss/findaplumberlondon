interface AreaInfo {
  name: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  lat: number;
  lng: number;
  parentArea?: string;  // Reference to parent area
}

// Main areas with their coordinates
const areaData: Record<string, AreaInfo> = {
  'central-london': {
    name: 'Central London',
    description: 'The heart of London, including areas like Westminster, City of London, and Covent Garden.',
    coordinates: {
      lat: 51.5074,
      lng: -0.1278
    },
    lat: 51.5074,
    lng: -0.1278
  },
  'north-london': {
    name: 'North London',
    description: 'Including areas like Islington, Camden, and Finsbury Park.',
    coordinates: {
      lat: 51.5504,
      lng: -0.1058
    },
    lat: 51.5504,
    lng: -0.1058
  },
  'south-london': {
    name: 'South London',
    description: 'Including areas like Southwark, Lambeth, and Greenwich.',
    coordinates: {
      lat: 51.4615,
      lng: -0.1160
    },
    lat: 51.4615,
    lng: -0.1160
  },
  'east-london': {
    name: 'East London',
    description: 'Including areas like Tower Hamlets, Hackney, and Newham.',
    coordinates: {
      lat: 51.5389,
      lng: -0.0324
    },
    lat: 51.5389,
    lng: -0.0324
  },
  'west-london': {
    name: 'West London',
    description: 'Including areas like Hammersmith, Fulham, and Ealing.',
    coordinates: {
      lat: 51.4915,
      lng: -0.2432
    },
    lat: 51.4915,
    lng: -0.2432
  }
};

// Map of specific areas to their parent areas
const areaMapping: Record<string, string> = {
  // Central London Areas
  'aldgate': 'central-london',
  'bank': 'central-london',
  'barbican': 'central-london',
  'belgravia': 'central-london',
  'blackfriars': 'central-london',
  'bloomsbury': 'central-london',
  'city-of-london': 'central-london',
  'clerkenwell': 'central-london',
  'covent-garden': 'central-london',
  'euston': 'central-london',
  'farringdon': 'central-london',
  'holborn': 'central-london',
  'kings-cross': 'central-london',
  'london-bridge': 'central-london',
  'marylebone': 'central-london',
  'mayfair': 'central-london',
  'moorgate': 'central-london',
  'paddington': 'central-london',
  'pentonville': 'central-london',
  'pimlico': 'central-london',
  'soho': 'central-london',
  'st-pauls': 'central-london',
  'temple': 'central-london',
  'tower-bridge': 'central-london',
  'tower-hill': 'central-london',
  'upper-street': 'central-london',
  'victoria': 'central-london',
  'warren-street': 'central-london',
  'waterloo': 'central-london',
  'westminster': 'central-london',

  // North London Areas
  'angel': 'north-london',
  'archway': 'north-london',
  'belsize-park': 'north-london',
  'camden': 'north-london',
  'canonbury': 'north-london',
  'chalk-farm': 'north-london',
  'colindale': 'north-london',
  'crouch-end': 'north-london',
  'east-finchley': 'north-london',
  'edmonton': 'north-london',
  'enfield': 'north-london',
  'finchley': 'north-london',
  'finsbury-park': 'north-london',
  'golders-green': 'north-london',
  'hampstead': 'north-london',
  'hendon': 'north-london',
  'highbury': 'north-london',
  'highgate': 'north-london',
  'holloway': 'north-london',
  'hornsey': 'north-london',
  'islington': 'north-london',
  'kentish-town': 'north-london',
  'manor-house': 'north-london',
  'mill-hill': 'north-london',
  'muswell-hill': 'north-london',
  'north-finchley': 'north-london',
  'southgate': 'north-london',
  'stamford-hill': 'north-london',
  'stanmore': 'north-london',
  'stoke-newington': 'north-london',
  'tottenham': 'north-london',
  'tufnell-park': 'north-london',
  'wood-green': 'north-london',

  // East London Areas
  'barking': 'east-london',
  'beckton': 'east-london',
  'bethnal-green': 'east-london',
  'bow': 'east-london',
  'canary-wharf': 'east-london',
  'canning-town': 'east-london',
  'chingford': 'east-london',
  'clapton': 'east-london',
  'dagenham': 'east-london',
  'dalston': 'east-london',
  'east-ham': 'east-london',
  'elm-park': 'east-london',
  'forest-gate': 'east-london',
  'hackney': 'east-london',
  'hoxton': 'east-london',
  'ilford': 'east-london',
  'isle-of-dogs': 'east-london',
  'leyton': 'east-london',
  'leytonstone': 'east-london',
  'limehouse': 'east-london',
  'manor-park': 'east-london',
  'mile-end': 'east-london',
  'plaistow': 'east-london',
  'poplar': 'east-london',
  'romford': 'east-london',
  'seven-sisters': 'east-london',
  'shoreditch': 'east-london',
  'stepney': 'east-london',
  'stratford': 'east-london',
  'upminster': 'east-london',
  'walthamstow': 'east-london',
  'wanstead': 'east-london',
  'wapping': 'east-london',
  'west-ham': 'east-london',
  'whitechapel': 'east-london',
  'woolwich': 'east-london',

  // South London Areas
  'balham': 'south-london',
  'battersea': 'south-london',
  'bermondsey': 'south-london',
  'blackheath': 'south-london',
  'brixton': 'south-london',
  'bromley': 'south-london',
  'camberwell': 'south-london',
  'clapham': 'south-london',
  'crystal-palace': 'south-london',
  'deptford': 'south-london',
  'dulwich': 'south-london',
  'elephant-and-castle': 'south-london',
  'forest-hill': 'south-london',
  'greenwich': 'south-london',
  'kennington': 'south-london',
  'kingston-upon-thames': 'south-london',
  'lambeth': 'south-london',
  'lewisham': 'south-london',
  'mitcham': 'south-london',
  'morden': 'south-london',
  'new-cross': 'south-london',
  'peckham': 'south-london',
  'rotherhithe': 'south-london',
  'southfields': 'south-london',
  'southwark': 'south-london',
  'stockwell': 'south-london',
  'streatham': 'south-london',
  'surrey-quays': 'south-london',
  'sydenham': 'south-london',
  'tooting': 'south-london',
  'tulse-hill': 'south-london',
  'vauxhall': 'south-london',
  'wandsworth': 'south-london',
  'wimbledon': 'south-london',

  // West London Areas
  'acton': 'west-london',
  'barnes': 'west-london',
  'bayswater': 'west-london',
  'brentford': 'west-london',
  'chelsea': 'west-london',
  'chiswick': 'west-london',
  'cricklewood': 'west-london',
  'ealing': 'west-london',
  'earls-court': 'west-london',
  'fulham': 'west-london',
  'hammersmith': 'west-london',
  'harlesden': 'west-london',
  'harrow': 'west-london',
  'hillingdon': 'west-london',
  'holland-park': 'west-london',
  'hounslow': 'west-london',
  'isleworth': 'west-london',
  'kensal-green': 'west-london',
  'kensington': 'west-london',
  'kilburn': 'west-london',
  'kingsbury': 'west-london',
  'maida-vale': 'west-london',
  'mortlake': 'west-london',
  'notting-hill': 'west-london',
  'pinner': 'west-london',
  'putney': 'west-london',
  'queens-park': 'west-london',
  'richmond': 'west-london',
  'ruislip': 'west-london',
  'shepherds-bush': 'west-london',
  'south-kensington': 'west-london',
  'st-johns-wood': 'west-london',
  'swiss-cottage': 'west-london',
  'teddington': 'west-london',
  'twickenham': 'west-london',
  'uxbridge': 'west-london',
  'walham-green': 'west-london',
  'west-brompton': 'west-london',
  'west-hampstead': 'west-london',
  'west-kensington': 'west-london',
  'willesden': 'west-london'
};

export function getAreaInfo(area: string): AreaInfo | null {
  const normalizedArea = area.toLowerCase().replace(/\s+/g, '-');
  
  // First check if it's a main area
  if (areaData[normalizedArea]) {
    return areaData[normalizedArea];
  }
  
  // If not, check if it's a specific area and get its parent's data
  const parentArea = areaMapping[normalizedArea];
  if (parentArea && areaData[parentArea]) {
    const parentInfo = areaData[parentArea];
    // Return area info with the specific area name but parent's coordinates
    return {
      name: area.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: `Part of ${parentInfo.name}, offering local plumbing services to residents and businesses.`,
      coordinates: parentInfo.coordinates,
      lat: parentInfo.lat,
      lng: parentInfo.lng,
      parentArea: parentArea
    };
  }
  
  return null;
}

export function getAllAreas(): string[] {
  return [...Object.keys(areaData), ...Object.keys(areaMapping)];
}

export function isValidArea(area: string): boolean {
  const normalizedArea = area.toLowerCase().replace(/\s+/g, '-');
  return normalizedArea in areaData || normalizedArea in areaMapping;
}
