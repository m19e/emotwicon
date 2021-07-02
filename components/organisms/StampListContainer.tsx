import { useState, useEffect } from "react";
import { Stamp } from "types";
import StampList from "components/molecules/stampListJkWithFav";

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

    const toggleStampFav = (s: Stamp) => {
        setFavIds((prev) => {
            const filtered = prev.filter((id) => id !== s.name);
            return filtered;
        });
    };

    return (
        <main className="flex flex-col items-center justify-center flex-1 text-center">
            <button onClick={() => setFavMode((prev) => !prev)}>お気に入り:{favMode ? "有効" : "無効"}</button>
            {favMode ? (
                <StampList
                    stamps={stamps.map((s) => Object.assign(s, { fav: favIds.includes(s.name) })).filter((s) => s.fav)}
                    touchable={touchable}
                    toggle={toggleStampFav}
                />
            ) : (
                <StampList stamps={stamps.map((s) => Object.assign(s, { fav: favIds.includes(s.name) }))} touchable={touchable} toggle={toggleStampFav} />
            )}
        </main>
    );
};

export default StampListContainer;
