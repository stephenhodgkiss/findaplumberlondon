import { areaMapping } from '@/lib/areas'

interface AreasListProps {
  className?: string;
}

export default function AreasList({ className = '' }: AreasListProps) {
  // Group areas by their parent area
  const groupedAreas = Object.entries(areaMapping).reduce((acc, [area, parentArea]) => {
    if (!acc[parentArea]) {
      acc[parentArea] = [];
    }
    acc[parentArea].push(area);
    return acc;
  }, {} as Record<string, string[]>);

  // Sort areas within each group
  Object.keys(groupedAreas).forEach(parentArea => {
    groupedAreas[parentArea].sort();
  });

  // Parent area display names
  const areaDisplayNames: Record<string, string> = {
    'central-london': 'Central London',
    'north-london': 'North London',
    'south-london': 'South London',
    'east-london': 'East London',
    'west-london': 'West London'
  };

  // Order of parent areas
  const parentAreaOrder = [
    'central-london',
    'north-london',
    'south-london',
    'east-london',
    'west-london'
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Areas We Cover</h2>
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {parentAreaOrder.map(parentArea => (
            <div key={parentArea}>
              <h3 className="text-xl font-semibold mb-4">{areaDisplayNames[parentArea]}</h3>
              <ul className="space-y-2">
                {groupedAreas[parentArea].map(area => (
                  <li key={area} className="capitalize">
                    {area.split('-').join(' ')}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600">
          Serving homes and businesses across all London areas. Contact us to book a service in your location.
        </p>
      </div>
    </section>
  );
}
