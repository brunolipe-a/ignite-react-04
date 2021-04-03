export type FoodType = {
  id: number;
  image: string;
  name: string;
  description: string;
  available: boolean;
  price: string;
};

export type FoodSchema = Omit<FoodType, "id" | "available">;
