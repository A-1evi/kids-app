import React from "react";

const shapes = [
  { name: "Circle", src: "/src/assets/circle.png" },
  { name: "Square", src: "/src/assets/sqare.png" },
  { name: "Triangle", src: "/src/assets/triangle.png" },
];

const ShapesPage = () => {
  return (
    <div className="shapes-page">
      <h1 className="text-2xl font-bold mb-6">Shapes Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {shapes.map((shape, index) => (
          <div key={index} className="shape-item flex flex-col items-center">
            <img src={shape.src} alt={shape.name} className="w-32 h-32" />
            <p className="mt-2 text-lg">{shape.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapesPage;
