import { Stamp } from "types";
import { DefaultJK } from "components/molecules/StampListItem/Default";
import { MobileJK } from "components/molecules/StampListItem/Mobile";

type Props = {
    stamps: Stamp[];
    touchable: boolean;
    toggle: (s: Stamp) => void;
};

const StampList = ({ stamps, touchable, toggle }: Props) => (
    <div className="w-11/12 mb-2 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {stamps.length === 0 && (
            <div className="w-44 h-44 max-w-full flex-center rounded-2xl bg-white border-2 border-gray-200">
                <span className="text-gray-400 font-bold font-sans">スタンプ未登録</span>
            </div>
        )}
        {touchable ? (
            <>
                {stamps.map((s, i) => (
                    <MobileJK key={i} stamp={s} toggle={toggle} />
                ))}
            </>
        ) : (
            <>
                {stamps.map((s, i) => (
                    <DefaultJK key={i} stamp={s} toggle={toggle} />
                ))}
            </>
        )}
    </div>
);

export default StampList;
