export type Hammock = {
  name: string;
  images: string[];
};

export type HammockCategory = {
  category: string;
  price: number;
  weight: string;
  size: string;
  hammocks: Hammock[];
};
