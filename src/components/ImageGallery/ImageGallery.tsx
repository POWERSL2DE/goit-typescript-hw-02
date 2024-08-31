import { PhotoType } from '../../App.types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';


interface IImageGallery {
  photos: PhotoType[];
  modalOpen: () => void;
  setModalUrl: (photo: PhotoType) => void;
}


const ImageGallery: React.FC <IImageGallery> = ({ photos, modalOpen, setModalUrl }) =>  {

const handlePhotoClick = (photo: PhotoType) => {
  setModalUrl(photo);
  modalOpen();
};

return (
  <ul className={css.container}>
    {photos.map((photo) => (
      <li key={photo.id} >
        <ImageCard photo={photo} onPhotoClick={handlePhotoClick} />
      </li>
    ))}
  </ul>
  );

}

export default ImageGallery