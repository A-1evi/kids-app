import React from "react";

const shapes = [
  {
    name: "Circle",
    src: "https://ik.imagekit.io/tceymjb1w/kids-app/circle.png?updatedAt=1727167790295",
  },
  {
    name: "Square",
    src: "https://ik.imagekit.io/tceymjb1w/kids-app/sqare.png?updatedAt=1727167790275",
  },
  {
    name: "Triangle",
    src: "https://ik.imagekit.io/tceymjb1w/kids-app/images.png?updatedAt=1727167790057",
  },
  {
    name: "Rectangle",
    src: "https://ik.imagekit.io/tceymjb1w/kids-app/vector-yellow-rectangle-character-cute-geometric-figure-with-face-blush-hair-cute-funny-smiling-shape-character-kids-children-design-rectangle-poster-school-kindergarten_616756-1818%20(1).avif?updatedAt=1727167790251",
  },
];

const ShapesPage = () => {
  return (
    <div className="shapes-page h-screen  bg-gradient-to-b from-white to-fuchsia-300">
      <h1 className="text-2xl font-bold mb-6">Shapes Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {shapes.map((shape, index) => (
          <div key={index} className="shape-item flex flex-col items-center">
            <img src={shape.src} alt={shape.name} className="w-52 h-52 mix-blend-multiply" />
            <p className="mt-2 text-lg">{shape.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapesPage;
