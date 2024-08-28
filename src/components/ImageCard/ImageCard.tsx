// import React from 'react';
import { FaRegGrinHearts, FaRegUser } from 'react-icons/fa';
import css from './ImageCard.module.css';
import { PhotoType } from '../../App.types';


interface ImageCardTypes {
  // image: {
  //    description: string;
  //    urls: string;
  //    likes: number;
  //    user: { name: string };
  // },

  photo: PhotoType;
  onPhotoClick: (photo: PhotoType) => void;
}


export default function ImageCard({onPhotoClick, photo,
  // image: {
  //   description,
  //   urls,
  //   likes,
  //   user: { name },
    
  // },
}: ImageCardTypes) {

  return (
    <div className={css.card}>
      <img
        className={css.image}
        onClick={() => onPhotoClick(photo)}
        src={photo.urls.small}
        alt={photo.description}
      />

      <div className={css.container}>
        <div className={css.info}>
          <FaRegUser className={css.icon} />
          <p className={css.description}>{photo.user.name}</p>
        </div>

        <div className={css.info}>
          <FaRegGrinHearts className={css.icon} />
          <p className={css.description}>{photo.likes}</p>
        </div>
      </div>
      
    </div>
  );

}