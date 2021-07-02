import { Stamp } from "types";
import StampList from "components/molecules/JKstampList";

type Props = {
    stamps: Stamp[];
    touchable: boolean;
};

const StampListContainer = ({ stamps, touchable }: Props) => {
    return (
        <main className="flex flex-col items-center justify-center flex-1 text-center">
            <StampList stamps={stamps} touchable={touchable} />
        </main>
    );
};

export default StampListContainer;
