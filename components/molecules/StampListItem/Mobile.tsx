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
                        <div className="h-1/2 w-full flex flex-col justify-between">
                            <CopyButton text={"#emotwicon " + process.env.NEXT_PUBLIC_SITE_ROOT_URL + "/jk?stamp=" + stamp.name} />
                            {/* <span className="text-xs text-gray-700 font-bold">by @{stamp.author}</span> */}
                            <div className="inline-flex justify-end">
                                <button onClick={() => toggle(stamp)}>
                                    {stamp.fav ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Mobile;
