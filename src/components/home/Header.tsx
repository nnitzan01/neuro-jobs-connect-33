
import React from "react";

export const Header = () => {
  return (
    <header className="mb-10 flex flex-col gap-4 items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center drop-shadow-sm animate-fade-in">
        NeuroTech Job Board
      </h1>
      <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl animate-fade-in">
        Discover open positions at the world's most innovative neurotechnology startups — from BCI development to machine learning and neuroscience.
      </p>
      <img 
        src="/lovable-uploads/9e0caaad-f9fa-40d7-ac07-80c5a54e4b3d.png" 
        alt="Glowing blue brain on computer chip" 
        className="rounded-lg shadow-lg mt-4 w-full max-w-xl h-56 object-cover animate-fade-in" 
      />
    </header>
  );
};
