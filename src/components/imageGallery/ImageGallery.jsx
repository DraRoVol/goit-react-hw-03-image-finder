import { Component } from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import cssModule from './ImageGallery.module.css';

class ImageGallery extends Component {
  handleClick = (selectedImage) => {
    this.props.openModal(selectedImage);
  };
  render() {
      return (
          <ul className={cssModule.gallery}>
            {this.props.hits.map(e => (
              <ImageGalleryItem key={e.id} image={e.webformatURL} onClick={() => this.handleClick(e.largeImageURL)} />
            ))}
          </ul>
      );
  }
}

export default ImageGallery;
