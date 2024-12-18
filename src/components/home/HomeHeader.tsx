import React from 'react';

const HomeHeader = () => {
  return (
    <div className="w-full bg-white shadow-sm p-4">
      <div className="max-w-md mx-auto">
        <div className="rounded-2xl overflow-hidden h-32 bg-white shadow-inner">
          <img
            src="/lovable-uploads/d4749458-d86c-4d38-95a2-026321a6fce2.png"
            alt="Botswana Flag with Confetti"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;