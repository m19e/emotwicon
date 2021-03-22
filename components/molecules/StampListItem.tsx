import Img from "next/image";
import { Stamp } from "types";

type Props = {
    stamp: Stamp;
};

const StampListItem = ({ stamp }: Props) => (
    <div className="w-44 h-44 flex-center rounded-lg border border-gray-200" style={{ maxWidth: "45vw" }}>
        <div className="relative group">
            <div className="transition-opacity group-hover:opacity-50">
                <Img src={`/stamps/${stamp.fullpath}`} alt={stamp.name} width={144} height={144} />
            </div>
            <div className="absolute inset-0 z-10 flex-center flex-col bg-transparent transition-opacity opacity-0 group-hover:opacity-100">
                <div className="h-1/2 flex flex-col justify-end">
                    <span className="bg-blue-300 hover:bg-blue-400">ツイートする</span>
                </div>
                <div className="h-1/2 flex flex-col justify-between">
                    <span className="bg-gray-200 hover:bg-gray-300">コピーする</span>
                    <span className="text-xs">by @{stamp.author}</span>
                </div>
            </div>
        </div>
    </div>
);

export default StampListItem;
