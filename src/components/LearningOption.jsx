import { useNavigate } from "react-router-dom";

const LearningOptions = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black ">
      <img
        src="https://ik.imagekit.io/tceymjb1w/kids-app/learinigOption.png?updatedAt=1726935958189"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <h1 className="text-white text-5xl font-bold mb-10">
        Choose What to Learn!
      </h1>
      <div className="grid grid-cols-2 gap-10 absolute">
        <button
          className="bg-yellow-500 text-3xl text-white py-4 px-8 rounded-lg hover:bg-yellow-600 transition duration-300"
          onClick={() => navigate("/learn/alphabet")}
        >
          Alphabets
        </button>
        <button className="bg-pink-500 text-3xl text-white py-4 px-8 rounded-lg hover:bg-pink-600 transition duration-300">
          Numbers
        </button>
        <button className="bg-purple-500 text-3xl text-white py-4 px-8 rounded-lg hover:bg-purple-600 transition duration-300">
          Poems
        </button>
        <button className="bg-red-500 text-3xl text-white py-4 px-8 rounded-lg hover:bg-red-600 transition duration-300">
          Shapes
        </button>
      </div>
    </div>
  );
};

export default LearningOptions;
