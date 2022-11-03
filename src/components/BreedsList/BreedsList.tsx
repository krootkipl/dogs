import React, { FC, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { fetchDogsBreeds } from '../../services/dogs';
import BreedModal from './BreedModal';
import './BreedsList.scss';
import { tDogBreed } from '../../types/dogs';

type tListProps = {};

const BreedsList: FC<tListProps> = () => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breedsList, setBreedsList] = useState<tDogBreed[]>([]);
  const [showModal, setShowModal] = useState(false);

  const getBreed = (displayName: string): tDogBreed | undefined => breedsList.find((element) => element.displayName === displayName);

  useEffect(() => {
    const request = async () => {
      await fetchDogsBreeds().then(((r: tDogBreed[]) => {
        setBreedsList(r);
        setSelectedBreed(r[0].displayName);
      }));
    };

    request();
  }, [])

  return (
    <>
      <div className="list">
        <p>Breeds list</p>
        <Form.Select value={selectedBreed} onChange={(e) => {
          setSelectedBreed(e.target.value)
          setShowModal(true)
        }}>
          {breedsList.map(({ breed, subBreed, displayName }, index) => {
            return <option value={displayName} key={`${breed}-${index}`}>{displayName}</option>
          })}
        </Form.Select>
        <Button onClick={() => {
          setShowModal(true)
        }}>Show me doggo</Button>
      </div>
      {showModal && <BreedModal breed={getBreed(selectedBreed)} show={showModal} hide={() => setShowModal(false)}/>}
    </>
  );
}

export default BreedsList;
