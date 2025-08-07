export interface Food {
  id: string;
  name: string;
  type:
    | "Frutas"
    | "Proteinas"
    | "Verduras"
    | "Leguminosas"
    | "Cereais"
    | "Graos"
    | "Laticinios"
    | "Oleaginosas"
    | "Chas";
  kcal: number; 
  imageUrl?: string;
}
