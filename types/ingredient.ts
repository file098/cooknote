export interface Ingredient {
    name: string,
    quantity: Quantity
}

export type Quantity = {
    amount: number;
    unit: Unit;
  };
  
export type Unit = 'grams' | 'pieces' | 'liters' | 'milliliters' | 'as needed';
