import { useEffect, useState } from "react";
import { fetchImages } from "./services/api";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalImages, setTotalImages] = useState(0);
  const [imgUrl, setImgUrl] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchImages(query, page);
        if (!response.results.length) return;
        setItems(response.results);
        setTotalImages(response.total);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleChangeQuery = (queryStr) => {
    setQuery(queryStr);
    setPage(1);
    setItems([]);
  };

  const emptyField = () => {
    toast.error("Field is empty..."),
      {
        duration: 3000,
        position: "right",
      };
  };

  const openModal = (imgUrl) => {
    setIsOpen(true);
    setImgUrl(imgUrl);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <SearchBar onSearch={handleChangeQuery} emptyField={emptyField} />
      {isError && <ErrorMessage />}
      <Toaster />
      {items.length > 0 && <ImageGallery items={items} openModal={openModal} />}
      {isLoading && !isError && <Loader />}
      {items.length > 0 && page < totalImages && !isError && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      <ImageModal closeModal={closeModal} imgUrl={imgUrl} isOpen={isOpen} />
    </div>
  );
};

export default App;
