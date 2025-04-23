export interface Bike {
  id: number;
  title: string;
  serial: string;
  manufacturer_name: string | null;
  frame_model: string | null;
  year: number | null;
  stolen: boolean;
  stolen_location: string | null;
  thumb: string | null;
  large_img: string | null;
  description: string | null;
}

export interface BikeSearchResponse {
  bikes: Bike[];
} 