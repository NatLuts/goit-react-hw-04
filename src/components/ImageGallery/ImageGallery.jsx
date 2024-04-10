import ImageCard from "../ImageCard/ImageCard";
import s from "../ImageGallery/ImageGalley.module.css";

const ImageGallery = ({ items }) => {
  return (
    <ul className={s.gallery}>
      {items.map((item) => {
        return <ImageCard item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default ImageGallery;
