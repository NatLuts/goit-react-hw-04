import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <SearchBar />
      <ImageGallery />
    </div>
  );
};

export default App;
