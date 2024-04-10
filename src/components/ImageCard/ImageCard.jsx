const ImageCard = ({ item }) => {
  return (
    <li>
      <img src={item.urls.small} alt={item.alt_description} />
    </li>
  );
};

export default ImageCard;
