import Link from "next/link";
import { useState } from "react";

type Props = {
    href: string;
};

const HiddenLinkTitle = ({ href }: Props) => {
    const [count, setCount] = useState(0);

    return (
        <div className="inline-flex font-sans font-black text-4xl text-white">
            {count > 4 ? (
                <Link href={href}>
                    <a className="border-b border-white border-opacity-0 hover:border-opacity-100">#emotwicon_JK</a>
                </Link>
            ) : (
                <>
                    <span
                        className={"border-b border-white border-opacity-0 hover:border-opacity-100 cursor-pointer " + (count > 0 ? "border-opacity-100" : "")}
                        onClick={() => setCount((prev) => prev + 1)}
                    >
                        #
                    </span>
                    <span className={count > 1 ? "border-b border-white" : ""}>em</span>
                    <span className={count > 2 ? "border-b border-white" : ""}>otw</span>
                    <span className={count > 3 ? "border-b border-white" : ""}>icon</span>
                </>
            )}
        </div>
    );
};

export default HiddenLinkTitle;
