import { API_URL } from '../../utils/consts';
import axios, { AxiosResponse } from 'axios';
import { tBreedImageAPIData, tDogsBreedsAPIData } from '../../types/dogs';

export class ApiDogsService {
  static async getAllBreeds(): Promise<tDogsBreedsAPIData> {
    const url = API_URL + 'breeds/list/all';
    let response: unknown;

    try {
      response = await axios.get<tDogsBreedsAPIData>(url);
    } catch (e) {
      console.error(e)
    }

    return (response as AxiosResponse<tDogsBreedsAPIData>).data;
  }

  static async getRandomBreedImage(breed: string, subBreed?: string): Promise<tBreedImageAPIData> {
    let url = `${API_URL}breed/${breed}/`;
    if (!!subBreed) url += `${subBreed}/`;
    url += 'images/random'
    let response: unknown;

    try {
      response = await axios.get<tBreedImageAPIData>(url);
    } catch (e) {
      console.error(e)
    }

    return (response as AxiosResponse<tBreedImageAPIData>).data;
  }
}
