export interface Book {
  isbn: string;
  title: string;
  description: string;
  // authors: string[];
  price: number;
  rating: number;
}

// Argumente für Interface statt Klasse für Datenmodell
// - Serialisierbarkeit
// - Immutability / Klonbarkeit
