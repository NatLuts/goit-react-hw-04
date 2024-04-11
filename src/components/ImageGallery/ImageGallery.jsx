import ImageCard from "../ImageCard/ImageCard";
import s from "../ImageGallery/ImageGalley.module.css";

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={s.gallery}>
      {items.map((item) => {
        return <ImageCard item={item} key={item.id} openModal={openModal} />;
      })}
    </ul>
  );
};

export default ImageGallery;
