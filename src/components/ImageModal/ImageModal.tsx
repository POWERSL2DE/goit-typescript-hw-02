
import Modal from 'react-modal';
import { FaRegGrinHearts, FaRegUser } from 'react-icons/fa';
import css from './ImageModal.module.css';
import { ObjectType } from '../../App.types';
import { PhotoType } from '../../App.types';


interface ImageModalProps {
  modalIsOpen: boolean;
  onRequestClose: () => void;
  modalUrl: string;
  // photos: PhotoType[];
  photo: PhotoType;
  onPhotosClick: (photo: PhotoType) => void;
  

  // (modalUrl: PhotoType) : void;
  // value: {
  //   imgRegular: string;
  //   description: string;
  //   likes: number;
  //   name: string;
    
  // },


}


export default function ImageModal({ photo, modalUrl, modalIsOpen, onRequestClose, onPhotosClick}: ImageModalProps) {
  Modal.setAppElement('#root');

  const customStyles: ObjectType = {
    content: {
      maxWidth: '800px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
    },
    overlay: {
      backgroundColor: '#151516db',
    },
  };



  return (
    <Modal 
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles} 
    >

      <img 
          src={modalUrl} 
          alt={photo.description} 
          onClick={() => onPhotosClick(photo)}
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

    </Modal>

  );
  
}