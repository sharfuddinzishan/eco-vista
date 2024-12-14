const Loader = ({ title }) => {
  return (
    <>
      <button
        type="button"
        className="bg-indigo-500 disabled flex items-center"
      >
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
        Processing
        <span className="fw-bold text-2xl text-lime-400">{title}</span>...
      </button>
    </>
  );
};

export default Loader;
