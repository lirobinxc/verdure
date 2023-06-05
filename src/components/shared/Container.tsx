import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex w-full justify-center">
      <div
        className="mx-4 w-full max-w-7xl
          sm:mx-8
          md:mx-10
          lg:mx-12
          2xl:mx-16"
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
