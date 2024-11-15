export interface Pet {
  id: number;
  ownerId: number;
  animal: string;
  breed: string;
  age: number;
  pictureUrl?: string;
  description: string;
}
