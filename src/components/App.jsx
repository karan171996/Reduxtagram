import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import PhotoGrid from "./PhotoGrid";
import Single from "./Single";

export default function App() {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>
      <Routes>
        <Route path="/" element={<PhotoGrid />} />
        <Route path="/view/:postId" element={<Single />} />
      </Routes>
    </div>
  );
}
