export type tDogsBreedsAPIData = {
  message: { [breed: string]: string[] }
  status: string;
}

export type tDogBreed = {
  displayName: string;
  breed: string;
  subBreed?: string;
}

export type tBreedImageAPIData = {
  message: string;
  status: string;
}