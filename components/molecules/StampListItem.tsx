import Img from "next/image";
import { Stamp } from "types";

type Props = {
    stamp: Stamp;
};

const StampListItem = ({ stamp }: Props) => (
    <div>
        <Img src={`/stamps/${stamp.fullpath}`} alt={stamp.name} width={144} height={144} />
    </div>
);

export default StampListItem;
