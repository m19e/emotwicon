import { useState, useEffect } from "react";
import { Stamp } from "types";
import StampList from "components/molecules/JKstampList";

type Props = {
    stamps: Stamp[];
    touchable: boolean;
};

const StampListContainer = ({ stamps, touchable }: Props) => {
    const [favMode, setFavMode] = useState(false);
    const [favIds, setFavIds] = useState<string[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const res = localStorage.getItem("emotwicon/fav/jk");
            const data: string[] = res === null ? [] : JSON.parse(res);
            console.log(res, data);
            setFavIds(data);
        }
    }, []);

    const toggleStampFav = () => {};

    return (
        <main className="flex flex-col items-center justify-center flex-1 text-center">
            <button onClick={() => setFavMode((prev) => !prev)}>お気に入り:{favMode ? "有効" : "無効"}</button>
            <StampList stamps={stamps} touchable={touchable} />
        </main>
    );
};

export default StampListContainer;
