import { useEffect, useState } from "react";
import { fetchImages } from "./services/api";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [items, SetItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchImages(query, page);
        if (!response.results.length) {
          SetItems([]);
          return;
        }
        console.log(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      <ImageGallery items={items} />
    </div>
  );
};

export default App;
