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
            const data = getFavIds("emotwicon/fav/jk");
            console.log(data);
            setFavIds(data);
        }
    }, []);

    const getFavIds = (key: string): string[] => {
        const res = localStorage.getItem(key);
        const data: string[] = res === null ? [] : JSON.parse(res);
        return data;
    };

    const toggleStampFav = (s: Stamp) => {
        setFavIds((prev) => (s.fav ? prev.filter((id) => id !== s.name) : [...prev, s.name]));
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
