import Img from "next/image";
import { Stamp } from "types";

type Props = {
    stamp: Stamp;
};

const StampListItem = ({ stamp }: Props) => (
    <div className="w-44 h-44 flex-center rounded-lg border border-gray-200" style={{ maxWidth: "45vw" }}>
        <Img src={`/stamps/${stamp.fullpath}`} alt={stamp.name} width={144} height={144} />
    </div>
);

export default StampListItem;
