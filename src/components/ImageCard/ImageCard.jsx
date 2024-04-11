import s from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ item, openModal }) => {
  return (
    <li className={s.list}>
      <img
        className={s.image}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => {
          openModal(item.urls.regular);
        }}
      />
    </li>
  );
};

export default ImageCard;
