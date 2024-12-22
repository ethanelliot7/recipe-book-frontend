import React from "react";

interface InlineFormErrorProps {
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

const InlineFormError: React.FC<InlineFormErrorProps> = ({error, setError}) => {
    return (
        <div className={'bg-bg-danger w-full h-full flex flex-row justify-between px-2 py-2.5 rounded-md '}>
            <p>
                {error}
            </p>
            <span>
                <button onClick={() => {
                    setError('')
                }}
                        className={'bg-inherit p-0'}
                >
                    &#x2715;
                </button>
            </span>
        </div>
    )
}

export default InlineFormError;