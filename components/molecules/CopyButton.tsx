import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {
    text: string;
};

const CopyButton = ({ text }: Props) => {
    const [copied, setCopied] = useState(false);

    return (
        <CopyToClipboard text={text}>
            {copied ? null : (
                <span className="py-1.5 mt-1 rounded-md shadow text-black text-sm font-bold font-sans bg-gray-200 cursor-pointer">コピーする</span>
            )}
        </CopyToClipboard>
    );
};

export default CopyButton;
