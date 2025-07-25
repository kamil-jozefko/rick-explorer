import React from "react";

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900 dark:border-gray-300"></div>
        </div>
    );
};

export default LoadingSpinner;
