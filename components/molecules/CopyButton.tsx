import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {
    text: string;
};

const CopyButton = ({ text }: Props) => {
    return <CopyToClipboard text={text}>コピーする</CopyToClipboard>;
};

export default CopyButton;
