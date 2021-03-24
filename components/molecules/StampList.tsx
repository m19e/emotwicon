import { Stamp } from "types";
import DefaultStamp from "components/molecules/StampListItem/Default";
import MobileStamp from "components/molecules/StampListItem/Mobile";

type Props = {
    stamps: Stamp[];
    touchable: boolean;
};

const StampList = ({ stamps, touchable }: Props) => (
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {touchable ? (
            <>
                {stamps.map((s, i) => (
                    <MobileStamp key={i} stamp={s} />
                ))}
            </>
        ) : (
            <>
                {stamps.map((s, i) => (
                    <DefaultStamp key={i} stamp={s} />
                ))}
            </>
        )}
    </div>
);

export default StampList;
