import s from "../LoadMoreBtn/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={s.btnL}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
