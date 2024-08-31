import css from './App.module.css';

import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MagnifyingGlass } from 'react-loader-spinner';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';

import { ApiSearchResponse, PhotoType } from '../../App.types';
import { getImages } from '../../image-api';


export default function App() {
    const [query, setQuery] = useState<string>('');
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [photos, setPhotos] = useState<PhotoType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [modalImgURL, setmodalImgURL] = useState<PhotoType | null>(null);
    // const [, onPhotosClick] = useState<PhotoType[]>([]);

    
    useEffect(() => {
      async function fetchImages() {
        try {
          setLoading(true);
          setError(false);
          const list: ApiSearchResponse = await getImages(query, page)

            setPhotos((prevState: PhotoType[]) => [...prevState, ...list.results])
            setTotalPages(list.total_pages)

        } catch (error) {
          console.log(error);
          setError(true);
        } finally {
          setLoading(false);
        }
      }

        if (isMounted) {
          fetchImages();
      } else {
        setIsMounted(true);
      }
    }, [query, page]);



    //   if (searchQuery.trim() === '') {
    //     return;
    //   }

    //   const getData = async () => {
    //     try {
    //       setLoading(true);
    //       setError(false);
  
          
    //       const resonse = await getImages<Responce>(searchQuery, page);
          
    //       if (data.total_pages === 0) {
    //         return toast.error('No results!');
    //       }
  
    //       setImages(previousImages => [...previousImages, ...data.results]);
    //     } catch (error) {
    //       setError(true);
    //       toast.error('Error! Please reload the page.');
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   getData();
    // }, [searchQuery, page]);
  
    const handleSearch = async (value : string) => {
      if (query === value) {
        return toast.error('You wrote the same! 📝');
      }

      setQuery(value);
      setPage(1);
      setPhotos([]);
    }

    const handleLoadMore = async () => {
      if (page >= endOfResults) {
        return toast.error(
          'Sorry, but you have reached the end of search results!'
        );
      }
      setPage(page + 1);
    };
    
    const endOfResults = Math.ceil(photos.length / 10); // per_page: 10 
  
    // const handleSubmit = (query: string) => {
    //   if (query === searchQuery) {
    //     return toast.error('You wrote the same! 📝');
    //   }
  
    //   setPage(1);
    //   setImages([]);
    //   setSearchQuery(query);
    // };
  
  const handleModalOpen = () => {
      // setmodalImgURL(value);
      setModalIsOpen(true);
  };
  
  const handleModalClose = () => {
      setModalIsOpen(false);
  };
  
  const handleModalImg = (photo: PhotoType) => {
      setmodalImgURL(photo);
  }

  // const handlePhotoClick = () => {
  //     setPhotos(photos);
  // }



    return (
      <div className={css.container}>
        <SearchBar setSearchData={handleSearch} />
        
        {error && (
          <ErrorMessage>
            Something went wrong! Please reload the page 🚩
          </ErrorMessage>
        )}
  
        {photos.length > 0 && (<ImageGallery photos={photos} modalOpen={handleModalOpen} setModalUrl={handleModalImg}/>)}
        {photos.length > 0 && !loading && page < totalPages && <LoadMoreBtn onLoadMore={handleLoadMore}/>}
        {loading && (
          <div className={css.loader}>
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#000"
            />
          </div>
        )}
        <ImageModal photo={modalImgURL} modalIsOpen={modalIsOpen} onRequestClose={handleModalClose} />
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    );

}
