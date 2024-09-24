import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";

const AlphabetPage = () => {
  const { alphabet: letter } = useParams(); // Get the letter from the URL
  console.log(letter);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);

  // You can create a mapping of YouTube video links to letters
  const videoUrl = `https://www.youtube.com/watch?v=C7oebqj3PCY}`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.strokeStyle = "#FF5733"; // Set stroke color
    ctx.lineWidth = 10; // Set stroke width

    // Draw the letter in light gray as a background for tracing
    ctx.font = "bold 300px Arial";
    ctx.fillStyle = "rgba(200, 200, 200, 0.8)";
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
    ctx.fillText(
      letter.toUpperCase(),
      canvas.width / 4,
      canvas.height / 2 + 100
    ); // Center the letter

    setContext(ctx);
  }, [letter]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    context.closePath();
    setIsDrawing(false);
  };

  return (
    <div className="max-h-screen  flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-blue-500">
      <h1 className="text-white text-6xl font-bold mb-5">
        Letter {letter.toUpperCase()}
      </h1>

      {/* Video Player */}
      <ReactPlayer

        url={videoUrl} // Dynamically load video URL
        width="800px"
        height="480px"

        controls
      />

      {/* Tracing Canvas */}
      <div className="mt-10">
        <h2 className="text-white text-3xl mb-5">
          Trace the letter {letter.toUpperCase()} below!
        </h2>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw} 
          onTouchEnd={stopDrawing}
          width={500}
          height={400}
          className="border-2 border-gray-500 mb-3"
        />
      </div>
    </div>
  );
};

export default AlphabetPage;
