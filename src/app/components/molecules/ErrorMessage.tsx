import React from "react";

type ErrorMessageProps = {
    message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-red-600 dark:text-red-400 mb-4">
                Error
            </h1>
            <p className="text-center text-gray-700 dark:text-gray-300">
                {message}
            </p>
        </div>
    );
};

export default ErrorMessage;
