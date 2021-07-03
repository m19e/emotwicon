import { Stamp } from "types";
import { DefaultJkWithFav } from "components/molecules/StampListItem/Default";
import { MobileJkWithFav } from "components/molecules/StampListItem/Mobile";

type Props = {
    stamps: Stamp[];
    touchable: boolean;
    toggle: (s: Stamp) => void;
};

const StampList = ({ stamps, touchable, toggle }: Props) => (
    <div className="w-11/12 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {touchable ? (
            <>
                {stamps.map((s, i) => (
                    <MobileJkWithFav key={i} stamp={s} toggle={toggle} />
                ))}
            </>
        ) : (
            <>
                {stamps.map((s, i) => (
                    <DefaultJkWithFav key={i} stamp={s} toggle={toggle} />
                ))}
            </>
        )}
    </div>
);

export default StampList;
