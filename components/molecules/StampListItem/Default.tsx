import Img from "next/image";
import { Stamp } from "types";
import CopyButton from "components/molecules/CopyButton";

type Props = {
    stamp: Stamp;
};

const Default = ({ stamp }: Props) => (
    <div className="w-44 h-44 flex-center rounded-2xl bg-white border-2 border-gray-200" style={{ maxWidth: "45vw" }}>
        <div className="relative group">
            <div className="flex-center transition-opacity group-hover:opacity-25">
                <Img src={`/stamps/${stamp.fullpath}`} alt={stamp.name} width={144} height={144} />
            </div>
            <div className="absolute inset-0 z-10 flex-center flex-col bg-transparent transition-opacity opacity-0 group-hover:opacity-100">
                <div className="h-1/2 w-full flex flex-col justify-end">
                    <a
                        className="py-1.5 mb-1 rounded-md shadow text-white text-sm font-bold font-sans bg-twitter"
                        href={
                            "https://twitter.com/intent/tweet?text=" +
                            encodeURIComponent("#emotwicon " + process.env.NEXT_PUBLIC_SITE_ROOT_URL + "/?stamp=" + stamp.name)
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ツイートする
                    </a>
                </div>
                <div className="h-1/2 w-full flex flex-col justify-start">
                    <CopyButton text={"#emotwicon " + process.env.NEXT_PUBLIC_SITE_ROOT_URL + "/?stamp=" + stamp.name} />
                    {/* <span className="text-xs text-gray-700 font-bold">by @{stamp.author}</span> */}
                </div>
            </div>
        </div>
    </div>
);

export default Default;
