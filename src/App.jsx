import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App = () => {
  return (
    <div>
      <SearchBar />
      <ImageGallery />
    </div>
  );
};

export default App;
