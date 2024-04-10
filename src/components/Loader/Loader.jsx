import { DNA } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <DNA
        visible={true}
        height="50"
        width="50"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
