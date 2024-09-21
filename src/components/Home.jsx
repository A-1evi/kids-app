import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <img
        src="src/assets/main.png"
        alt="Cosmic Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="z-10">
        <button className="bg-yellow-600 hover:bg-yellow-900 text-white text-4xl py-4 px-8 rounded-full transform transition duration-300 ease-in-out animate-bounce hover:scale-110"
         onClick={() => navigate('/learn')}>
          Start Learning
        </button>
      </div>
      <div className="absolute inset-0 w-20 pointer-events-none overflow-hidden">
        <img
          src="src/assets/stars.png"
          alt="Floating Stars"
          className="animate-float"
        />
      </div>
    </div>
  );
};

export default Home;
