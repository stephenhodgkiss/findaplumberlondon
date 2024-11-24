export interface Location {
  lat: number;
  lng: number;
}

export interface DisplayName {
  text: string;
  languageCode: string;
}

export interface Place {
  id: string;
  name: string;
  vicinity: string;
  rating?: number;
  user_ratings_total?: number;
  review_count?: number;
  distance?: number;
  categories?: string[];
  primaryCategory?: string;
  opening_hours?: {
    open_now: boolean;
    periods?: Array<{
      open: { day: number; time: string };
      close: { day: number; time: string };
    }>;
    weekday_text?: string[];
  };
  geometry: {
    location: Location;
  };
  photos?: Array<{
    photo_reference?: string;
    height: number;
    width: number;
    html_attributions?: string[];
    url?: string;
  }>;
  place_id: string;
  types: string[];
  formatted_address?: string;
  formatted_phone_number?: string;
  website?: string;
  business_status?: string;
}

export interface Photo {
  name: string;
  widthPx: number;
  heightPx: number;
  authorAttributions: AuthorAttribution[];
}

export interface AuthorAttribution {
  displayName: DisplayName;
  uri: string;
  photoUri: string;
}

export interface OpeningHours {
  openNow: boolean;
  periods: Period[];
  weekdayDescriptions: string[];
}

export interface Period {
  open: TimeOfWeek;
  close?: TimeOfWeek;
}

export interface TimeOfWeek {
  day: number;
  hour: number;
  minute: number;
}

export interface PlacesResponse {
  places: Place[];
}

export interface PlaceDetails extends Place {
  reviews?: Array<{
    author_name: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
    profile_photo_url?: string;
  }>;
  description?: string;
  email?: string;
  services?: string[];
  amenities?: string[];
  payment_methods?: string[];
  social_media?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  hours_type?: string;
  price_level?: number;
  url?: string;
  utc_offset?: number;
  wheelchair_accessible_entrance?: boolean;
}

export interface ReviewV1 {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: TextContent;
  authorAttribution: AuthorAttribution;
  publishTime: string;
}

export interface TextContent {
  text: string;
  languageCode: string;
}
