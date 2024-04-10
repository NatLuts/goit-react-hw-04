import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";

const App = () => {
  const [items, SetItems] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchImages(query, page);
        console.log(response);
        SetItems(response);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query, page]);

  return (
    <div>
      <SearchBar />
      <ImageGallery items={items} />
    </div>
  );
};

export default App;
