import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import packageJson from "D:/kids-app/package.json";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
const pdfjsVersion = packageJson.dependencies["pdfjs-dist"];
const Pdfviewer = () => (
  <div
    style={{
      border: "1px solid rgba(0, 0, 0, 0.3)",
      height: "850px",
    }}
  >
    {/* Wrap Viewer with the Worker */}
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
    >
      <Viewer fileUrl="https://ik.imagekit.io/tceymjb1w/kids-app/curiousgeorge.pdf?updatedAt=1727180281155" />
    </Worker>
  </div>
);

export default Pdfviewer;
