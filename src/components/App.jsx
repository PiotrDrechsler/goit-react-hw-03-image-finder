import { Component } from 'react';
import axios from 'axios';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      image: [
        {
          id: 'id-1',
          webformatURL: 'Rosie Simpson',
          largeImageURL: '459-12-56',
        },
        {
          id: 'id-2',
          webformatURL: 'Hermione Kline',
          largeImageURL: '443-89-12',
        },
      ],
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevState) {}

  render() {
    const { image } = this.state;

    return (
      <section>
        <h1>Hello there Paula!</h1>
        <Searchbar></Searchbar>
        <ImageGallery image={image}></ImageGallery>
        <Button></Button>
        <Loader></Loader>
        <Modal></Modal>
      </section>
    );
  }
}
