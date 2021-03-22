import Img from "next/image";
import { Stamp } from "types";

type Props = {
    stamp: Stamp;
};

const StampListItem = ({ stamp }: Props) => (
    <div className="w-44 h-44 flex-center rounded-2xl bg-white border-2 border-gray-200" style={{ maxWidth: "45vw" }}>
        <div className="relative group">
            <div className="transition-opacity group-hover:opacity-25">
                <Img src={`/stamps/${stamp.fullpath}`} alt={stamp.name} width={144} height={144} />
            </div>
            <div className="absolute inset-0 z-10 flex-center flex-col bg-transparent transition-opacity opacity-0 group-hover:opacity-100">
                <div className="h-1/2 w-full flex flex-col justify-end">
                    <span className="py-1.5 mb-1 rounded-md shadow text-white text-sm font-bold font-sans bg-twitter">ツイートする</span>
                </div>
                <div className="h-1/2 w-full flex flex-col justify-between">
                    <span className="py-1.5 mt-1 rounded-md shadow text-black text-sm font-bold font-sans bg-gray-200">コピーする</span>
                    <span className="text-xs text-gray-700 font-bold">by @{stamp.author}</span>
                </div>
            </div>
        </div>
    </div>
);

export default StampListItem;
