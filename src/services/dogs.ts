import { ApiDogsService } from './api/dogs';
import { tBreedImageAPIData, tDogBreed, tDogsBreedsAPIData } from '../types/dogs';
import capitalize from 'lodash/capitalize';

export const fetchDogsBreeds = async () => {
  return await ApiDogsService.getAllBreeds().then(((r: tDogsBreedsAPIData) => {
    const breeds: tDogBreed[] = [];
    
    Object.entries(r.message).forEach(([breed, subBreeds]) => {
      if (subBreeds.length === 0) {
        breeds.push({
          breed: breed,
          displayName: capitalize(breed)
        });
      } else {
        subBreeds.forEach((subBreed: string) => {
          breeds.push({
            displayName: capitalize(`${subBreed} ${breed}`),
            breed,
            subBreed
          });
        });
      }
    })

    return breeds
  }))
}

export const fetchBreedImageUrl = async (breed: string, subBreed?: string) => await ApiDogsService.getRandomBreedImage(breed, subBreed).then((r: tBreedImageAPIData) => r.message);