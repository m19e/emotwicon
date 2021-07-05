import { useState, useEffect } from "react";
import { Stamp } from "types";
import StampList from "components/molecules/stampListJkWithFav";

type Props = {
    stamps: Stamp[];
    touchable: boolean;
};

const StampListContainer = ({ stamps, touchable }: Props) => {
    const [rootStamps, setRootStamps] = useState<Stamp[]>([]);
    const [favStamps, setFavStamps] = useState<Stamp[]>([]);

    const [favMode, setFavMode] = useState(false);
    const [favIds, setFavIds] = useState<string[]>([]);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const data = getFavIds("emotwicon/fav/jk");
            setFavIds(data);
            setLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (loaded) {
            const root = stamps.map((s) => Object.assign(s, { fav: favIds.includes(s.name) }));
            setRootStamps(root);
            setFavStamps(root.filter((s) => s.fav));
        }
    }, [favIds]);

    const getFavIds = (key: string): string[] => {
        const res = localStorage.getItem(key);
        const data: string[] = res === null ? [] : JSON.parse(res);
        return data;
    };

    const setFavIdsStorage = (key: string, ids: string[]) => {
        const data = JSON.stringify(ids);
        localStorage.setItem(key, data);
    };

    const toggleStampFav = (s: Stamp) => {
        setFavIds((prev) => {
            const newIds = s.fav ? prev.filter((id) => id !== s.name) : [...prev, s.name];
            setFavIdsStorage("emotwicon/fav/jk", newIds);
            return newIds;
        });
    };

    return (
        <main className="flex flex-col items-center flex-1 text-center">
            <button onClick={() => setFavMode((prev) => !prev)}>お気に入り:{favMode ? "有効" : "無効"}</button>
            {favMode ? (
                <StampList stamps={favStamps} touchable={touchable} toggle={toggleStampFav} />
            ) : (
                <StampList stamps={rootStamps} touchable={touchable} toggle={toggleStampFav} />
            )}
        </main>
    );
};

export default StampListContainer;
