import Img from "next/image";
import { useState } from "react";
import { Stamp } from "types";
import CopyButton from "components/molecules/CopyButton";

type Props = {
    stamp: Stamp;
    toggle?: (s: Stamp) => void;
};

const Mobile = ({ stamp }: Props) => {
    const [active, setActive] = useState(false);

    return (
        <div className="w-44 h-44 max-w-full flex-center rounded-2xl bg-white border-2 border-gray-200">
            <div className="relative" onClick={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                <div className={"flex-center transition-opacity " + (active ? "opacity-25" : "")}>
                    <Img src={`/stamps/${stamp.fullpath}`} alt={stamp.name} width={144} height={144} />
                </div>
                {active && (
                    <div className="absolute inset-0 z-10 flex-center flex-col bg-transparent transition-all">
                        <div className="h-1/2 w-full flex flex-col justify-end">
                            <a
                                className="py-1.5 mb-1 rounded-md shadow text-white text-sm font-bold font-sans bg-twitter"
                                href={
                                    "https://twitter.com/intent/tweet?text=" +
                                    encodeURIComponent("#emotwicon " + process.env.NEXT_PUBLIC_SITE_ROOT_URL + "?stamp=" + stamp.name)
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ツイートする
                            </a>
                        </div>
                        <div className="h-1/2 w-full flex flex-col justify-start">
                            <CopyButton text={"#emotwicon " + process.env.NEXT_PUBLIC_SITE_ROOT_URL + "?stamp=" + stamp.name} />
                            {/* <span className="text-xs text-gray-700 font-bold">by @{stamp.author}</span> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export const MobileJK = ({ stamp }: Props) => {
    const [active, setActive] = useState(false);

    return (
        <div className="w-44 h-44 max-w-full flex-center rounded-2xl bg-white border-2 border-gray-200">
            <div className="relative" onClick={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                <div className={"flex-center transition-opacity " + (active ? "opacity-25" : "")}>
                    <Img src={`/stamps/${stamp.fullpath}`} alt={stamp.name} width={144} height={144} />
                </div>
                {active && (
                    <div className="absolute inset-0 z-10 flex-center flex-col bg-transparent transition-all">
                        <div className="h-1/2 w-full flex flex-col justify-end">
                            <a
                                className="py-1.5 mb-1 rounded-md shadow text-white text-sm font-bold font-sans bg-twitter"
                                href={
                                    "https://twitter.com/intent/tweet?text=" +
                                    encodeURIComponent("#emotwicon " + process.env.NEXT_PUBLIC_SITE_ROOT_URL + "/jk?stamp=" + stamp.name)
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ツイートする
                            </a>
                        </div>
                        <div className="h-1/2 w-full flex flex-col justify-start">
                            <CopyButton text={"#emotwicon " + process.env.NEXT_PUBLIC_SITE_ROOT_URL + "/jk?stamp=" + stamp.name} />
                            {/* <span className="text-xs text-gray-700 font-bold">by @{stamp.author}</span> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export const MobileJkWithFav = ({ stamp, toggle }: Props) => {
    const [active, setActive] = useState(false);

    return (
        <div className="w-44 h-44 max-w-full flex-center rounded-2xl bg-white border-2 border-gray-200">
            <div className="relative" onClick={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                <div className={"flex-center transition-opacity " + (active ? "opacity-25" : "")}>
                    <Img src={`/stamps/${stamp.fullpath}`} alt={stamp.name} width={144} height={144} />
                </div>
                {active && (
                    <div className="absolute inset-0 z-10 flex-center flex-col bg-transparent transition-all">
                        <div className="h-1/2 w-full flex flex-col justify-end">
                            <button onClick={() => toggle(stamp)}>{stamp.fav ? "*" : "x"}</button>
                            <a
                                className="py-1.5 mb-1 rounded-md shadow text-white text-sm font-bold font-sans bg-twitter"
                                href={
                                    "https://twitter.com/intent/tweet?text=" +
                                    encodeURIComponent("#emotwicon " + process.env.NEXT_PUBLIC_SITE_ROOT_URL + "/jk?stamp=" + stamp.name)
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ツイートする
                            </a>
                        </div>
                        <div className="h-1/2 w-full flex flex-col justify-start">
                            <CopyButton text={"#emotwicon " + process.env.NEXT_PUBLIC_SITE_ROOT_URL + "/jk?stamp=" + stamp.name} />
                            {/* <span className="text-xs text-gray-700 font-bold">by @{stamp.author}</span> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Mobile;
