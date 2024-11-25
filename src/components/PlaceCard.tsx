import Image from 'next/image';
import { Place } from '@/types';
import { convertDistance } from '@/lib/config';

interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <article 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-100 hover:border-blue-300 transform hover:-translate-y-1"
    >
      {place.photos?.[0] && (
        <figure className="relative w-full h-48 mb-4">
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
          <Image
            src={place.photos[0].url || '/images/placeholder.jpg'}
            alt={`${place.name}`}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              const imgElement = e.target as HTMLImageElement;
              const parent = imgElement.parentElement;
              if (parent) parent.style.display = 'none';
              if (place.photos && place.photos.length > 1) {
                imgElement.src = place.photos[1].url || '/images/placeholder.jpg';
              } else {
                imgElement.src = '/images/placeholder.jpg';
              }
            }}
            onLoad={(e) => {
              const imgElement = e.target as HTMLImageElement;
              imgElement.style.opacity = '1';
              const placeholder = imgElement.parentElement?.querySelector('.animate-pulse');
              placeholder?.remove();
            }}
            style={{ opacity: 0 }}
            priority={true}
          />
        </figure>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{place.name}</h3>
        
        <dl className="space-y-2">
          {place.primaryCategory && (
            <div className="flex items-center">
              <dt className="sr-only">Category</dt>
              <dd className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-gray-600">{place.primaryCategory}</span>
              </dd>
            </div>
          )}
          
          {typeof place.rating === 'number' && (
            <div className="flex items-center">
              <dt className="sr-only">Rating</dt>
              <dd className="flex items-center">
                <div className="flex" aria-label={`Rating: ${place.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < (place.rating ? Math.round(place.rating) : 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{place.rating ? `${place.rating.toFixed(1)} stars` : 'No rating'}</span>
              </dd>
            </div>
          )}

          {(place.formatted_address || place.vicinity) && (
            <div className="flex items-start">
              <dt className="sr-only">Address</dt>
              <dd className="flex items-start">
                <svg className="w-5 h-5 text-gray-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">{place.formatted_address || place.vicinity}</span>
              </dd>
            </div>
          )}

          {place.formatted_phone_number && (
            <div className="mt-4">
              <a
                href={`tel:${place.formatted_phone_number}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[rgb(33,95,144)] hover:bg-[rgb(28,81,123)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(33,95,144)]"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {place.formatted_phone_number}
              </a>
            </div>
          )}

          {place.website && !place.website.includes('business.data.gov.uk') && !place.website.includes('blogspot.com') && (
            <div className="mt-4">
              <a
                href={place.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Visit Website
              </a>
            </div>
          )}

          {place.distance !== undefined && (
            <div className="flex items-center">
              <dt className="sr-only">Distance</dt>
              <dd className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {(() => {
                  const { value, unit } = convertDistance(place.distance);
                  return `${value.toFixed(1)} ${unit} away`;
                })()}
              </dd>
            </div>
          )}

        </dl>
      </div>
    </article>
  );
}
