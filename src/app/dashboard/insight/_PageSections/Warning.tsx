import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Warning = () => {
  const [showBox, setShowBox] = useState(true);

  const handleCloseClick = () => {
    setShowBox(false);
  };

  return (
    <>
      {showBox && (
        <div className="mb-4  border rounded-md p-4 flex justify-between">
          <p className="text-orange-500">
            Please upload documents containing employee governance policies guidelines for a better assessment.
          </p>
          {/* <button
            onClick={handleCloseClick}
            className="mt-2 w-4 orange-button bg-red-500 text-white px-8 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button> */}
        </div>
      )}
    </>
  );
};

export default Warning;
