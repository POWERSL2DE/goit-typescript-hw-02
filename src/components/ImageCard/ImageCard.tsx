import css from './ImageCard.module.css';
import { FaRegGrinHearts, FaRegUser } from 'react-icons/fa';
// import { Link } from "../App/App.types";


interface ImageCardProps {
  // imgRegular: Link;
  image: {
    description: string;
    urls: string;
    likes: number;
    user: { name: string };
  },
  onOpenModal: (imgRegular: string, description: string, likes: number, name: string, src: string) => void;
}


export default function ImageCard({
  image: {
    description,
    urls,
    likes,
    user: { name },
    
  },
  onOpenModal,
}: ImageCardProps) {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        onClick={() =>
          onOpenModal({
            imgRegular: urls.regular,
            description,
            likes,
            name,
          })
        }
        src={urls.small}
        alt={description}
      />

      <div className={css.container}>
        <div className={css.info}>
          <FaRegUser className={css.icon} />
          <p className={css.description}>{name}</p>
        </div>

        <div className={css.info}>
          <FaRegGrinHearts className={css.icon} />
          <p className={css.description}>{likes}</p>
        </div>
        
      </div>
    </div>
  );

}