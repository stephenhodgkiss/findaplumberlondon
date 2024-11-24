import Image from 'next/image';
import { Place } from '@/types';
import { convertDistance } from '@/lib/config';

interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <div 
      key={place.id} 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-100 hover:border-blue-300 transform hover:-translate-y-1"
    >
      {place.photos && place.photos.length > 0 && (
        <div className="relative w-full h-48 mb-4">
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
          <Image
            src={place.photos[0].url || '/images/placeholder.jpg'}
            alt={`${place.name} photo`}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              console.error('Image failed to load:', place.photos?.[0].url);
              const imgElement = e.target as HTMLImageElement;
              const parent = imgElement.parentElement;
              if (parent) {
                parent.style.display = 'none';
              }
              // Try next photo if available
              if (place.photos && place.photos.length > 1) {
                imgElement.src = place.photos[1].url || '/images/placeholder.jpg';
              }
            }}
            onLoad={(e) => {
              const imgElement = e.target as HTMLImageElement;
              imgElement.style.opacity = '1';
              const parent = imgElement.parentElement;
              if (parent) {
                const placeholder = parent.querySelector('.animate-pulse');
                if (placeholder) {
                  placeholder.remove();
                }
              }
            }}
            style={{ opacity: 0 }}
            priority={true}
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{place.name}</h3>
        
        {/* Category */}
        {place.primaryCategory && (
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span className="text-gray-600">{place.primaryCategory}</span>
          </div>
        )}
        
        {/* Rating */}
        {typeof place.rating === 'number' && (
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(place.rating || 0)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              {place.rating.toFixed(1)} ({place.user_ratings_total || 0} reviews)
            </span>
          </div>
        )}

        {/* Address */}
        {(place.formatted_address || place.vicinity) && (
          <div className="flex items-start mb-2">
            <svg className="w-5 h-5 text-gray-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600">{place.formatted_address || place.vicinity}</span>
          </div>
        )}

        {/* Phone */}
        {place.formatted_phone_number && (
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a 
              href={`tel:${place.formatted_phone_number}`} 
              className="px-3 py-1 bg-[rgb(6,144,196)] hover:bg-[rgb(5,129,176)] text-white rounded-lg transition-colors duration-200 flex items-center"
            >
              <span>{place.formatted_phone_number}</span>
            </a>
          </div>
        )}

        {/* Website */}
        {place.website && !place.website.includes('business.data.gov.uk') && !place.website.includes('blogspot.com') && (
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <a 
              href={place.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
            >
              <span>Visit Website</span>
            </a>
          </div>
        )}

        {/* Distance */}
        {place.distance !== undefined && (
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            {(() => {
              const { value, unit } = convertDistance(place.distance);
              return <span className="text-gray-600">{value.toFixed(1)} {unit} away</span>;
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
