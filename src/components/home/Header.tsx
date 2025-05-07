
import React from "react";

export const Header = () => {
  return (
    <header className="mb-10 flex flex-col gap-4 items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center drop-shadow-sm animate-fade-in">
        NeuroTech Job Board
      </h1>
      <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl animate-fade-in">
        Discover open positions at the world's most innovative neurotechnology companies — from BCI development to machine learning and neuroscience.
      </p>
      <img 
        src="/lovable-uploads/a01e9ae8-420e-4ee8-bb72-f68d7784f9f1.png" 
        alt="Digital brain connected to computer chip" 
        className="rounded-lg shadow-lg mt-4 w-full max-w-xl h-65 object-cover animate-fade-in" 
      />
    </header>
  );
};
