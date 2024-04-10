import s from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ item }) => {
  return (
    <li className={s.list}>
      <img
        className={s.image}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </li>
  );
};

export default ImageCard;
