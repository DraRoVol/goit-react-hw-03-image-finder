import cssModule from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={cssModule.item}>
      <img
        className={cssModule.image}
        src={image}
        alt="img"
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
