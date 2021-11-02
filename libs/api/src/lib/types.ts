export type Gender = 'male' | 'female';
export type GeoZone = 'eu' | 'us' | 'jp' | 'br' | 'cn';

export interface TrendQuery {
  gender?: Gender;
  geozone?: GeoZone;
  sort_by?: 'gender' | 'geozone' | 'page_size' | 'name' | 'growth';
  page_size?: string;
  page?: string;
}

export interface Trend {
  id: string;
  name: string;
  gender: Gender;
  geozone: GeoZone;
  image: string;
  growth: number;
  is_favorite?: boolean;
  creation_date?: string;
}

export type Trends = Array<Trend>;

export interface TrendsPayload {
  total?: number;
  trends?: Trends;
}

export interface MoodboardPayload {
  images: string[];
}

export interface ResponseMessage {
  [key: string]: boolean;
}
