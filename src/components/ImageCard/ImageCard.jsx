const ImageCard = ({ items }) => {
  return (
    <div>
      <img src={items.urls.small} alt={items.alt_description} />
    </div>
  );
};

export default ImageCard;
