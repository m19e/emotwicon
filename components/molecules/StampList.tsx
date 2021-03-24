import { Stamp } from "types";
import DefaultStampListItem from "components/molecules/StampListItem/Default";
import MobileStampListItem from "components/molecules/StampListItem/Mobile";

type Props = {
    stamps: Stamp[];
    touchable: boolean;
};

const StampList = ({ stamps, touchable }: Props) => (
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {stamps.map((s, i) => (
            <div key={i}>{touchable ? <MobileStampListItem stamp={s} /> : <DefaultStampListItem stamp={s} />}</div>
        ))}
    </div>
);

export default StampList;
