import { Stamp } from "types";
import Default from "components/molecules/StampListItem/Default";
import Mobile from "components/molecules/StampListItem/Mobile";

type Props = {
    stamps: Stamp[];
    toggle: (s: Stamp) => void;
    touchable: boolean;
    fav: boolean;
    leftHand: boolean;
};

const StampList = ({ stamps, toggle, touchable, fav, leftHand }: Props) => (
    <div className="w-11/12 mb-2 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {stamps.length === 0 && (
            <div className={"w-44 h-44 max-w-full flex-center rounded-2xl bg-white border-2 border-gray-200 " + (fav ? "" : "opacity-0")}>
                <span className="text-gray-400 font-bold font-sans">スタンプ未登録</span>
            </div>
        )}
        {touchable ? (
            <>
                {stamps.map((s, i) => (
                    <Mobile key={i} stamp={s} toggle={toggle} leftHand={leftHand} />
                ))}
            </>
        ) : (
            <>
                {stamps.map((s, i) => (
                    <Default key={i} stamp={s} toggle={toggle} leftHand={leftHand} />
                ))}
            </>
        )}
    </div>
);

export default StampList;
