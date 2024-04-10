import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ImageCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
