import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {
    text: string;
};

const CopyButton = ({ text }: Props) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (copied) return;
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <CopyToClipboard text={text} onCopy={() => handleCopy()}>
            {copied ? (
                <span className="py-1.5 mt-1 rounded-md shadow bg-gray-100 flex-center">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1da1f2">
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            ) : (
                <span className="py-1.5 mt-1 rounded-md shadow text-black text-sm font-bold font-sans bg-gray-100 cursor-pointer">コピーする</span>
            )}
        </CopyToClipboard>
    );
};

export default CopyButton;
