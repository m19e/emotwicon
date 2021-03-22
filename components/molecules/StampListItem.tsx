import Img from "next/image";
import { Stamp } from "types";

type Props = {
    stamp: Stamp;
};

const StampListItem = ({ stamp }: Props) => (
    <div className="w-44 h-44 flex-center rounded-lg border border-gray-200" style={{ maxWidth: "45vw" }}>
        <div className="relative">
            <Img src={`/stamps/${stamp.fullpath}`} alt={stamp.name} width={144} height={144} />
            <div className="absolute inset-0 z-10 flex-center flex-col bg-gray-300 opacity-0 hover:opacity-100">
                <span>Twitterでつぶやく</span>
                <span>コピーする</span>
                <span>{"by {スタンプ作者}"}</span>
            </div>
        </div>
    </div>
);

export default StampListItem;
