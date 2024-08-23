import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

import { Image } from "../App/App.types";
import { Link } from "../App/App.types";

interface ImageGalleryProps {
  images: Image[];
  onOpenModal: (slug: string) => void;
}


const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onOpenModal }) => {
  return (
    <ul className={css.container}>
      {images.map(( { id, urls, slug }) => (
        <li key={id}>
          <ImageCard images={urls} imgSlug={slug} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;