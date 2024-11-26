export interface Recipe {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    prepTime: number; // in minutes
    cookTime: number; // in minutes
    servings: number;
}