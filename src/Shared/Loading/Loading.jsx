import { TbFidgetSpinner } from "react-icons/tb";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body text-center">
          <div className="flex flex-col items-center gap-4">
            <TbFidgetSpinner className="animate-spin h-12 w-12 text-primary" />
            <h2 className="card-title text-xl justify-center">{text}</h2>
            <div className="loading loading-spinner loading-md text-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
