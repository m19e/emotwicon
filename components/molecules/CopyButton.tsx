import { ReactNode } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {
    text: string;
    children: ReactNode;
};

const CopyButton = ({ text, children }: Props) => <CopyToClipboard text={text}>{children}</CopyToClipboard>;

export default CopyButton;
