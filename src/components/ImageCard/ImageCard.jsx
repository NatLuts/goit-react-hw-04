import s from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ item, openModal }) => {
  return (
    <li
      className={s.list}
      onClick={() => {
        openModal(item.urls.regular);
      }}
    >
      <img
        className={s.image}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </li>
  );
};

export default ImageCard;
