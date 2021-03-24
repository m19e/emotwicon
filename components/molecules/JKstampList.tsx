import { Stamp } from "types";
import { DefaultJK } from "components/molecules/StampListItem/Default";
import { MobileJK } from "components/molecules/StampListItem/Mobile";

type Props = {
    stamps: Stamp[];
    touchable: boolean;
};

const StampList = ({ stamps, touchable }: Props) => (
    <div className="w-11/12 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {touchable ? (
            <>
                {stamps.map((s, i) => (
                    <MobileJK key={i} stamp={s} />
                ))}
            </>
        ) : (
            <>
                {stamps.map((s, i) => (
                    <DefaultJK key={i} stamp={s} />
                ))}
            </>
        )}
    </div>
);

export default StampList;
