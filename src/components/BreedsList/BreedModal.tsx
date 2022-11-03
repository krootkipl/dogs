import React, { FC, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { fetchBreedImageUrl } from '../../services/dogs';
import './BreedModal.scss';
import { tDogBreed } from '../../types/dogs';

type tBreedModalProps = {
  show: boolean;
  breed?: tDogBreed;
  hide: () => void;
};

const BreedModal: FC<tBreedModalProps> = ({ show, breed, hide }) => {
  const [breedImageUrl, setBreedImageUrl] = useState('');

  const fetch = async () => {
    if (!!breed) {
      const url = await fetchBreedImageUrl(breed.breed, breed.subBreed);
      setBreedImageUrl(url);
    }
  }

  useEffect(() => {
    fetch();
  }, [])

  if (!breed) return null;

  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>{breed.displayName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="primary" onClick={fetch}>
          Fetch me another doggo
        </Button>
        <img src={breedImageUrl} alt={'doggo'} width="100%"/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BreedModal;
