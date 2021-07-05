import { useState, useEffect } from "react";
import { Stamp } from "types";
import StampList from "components/molecules/StampList";
import StampListJK from "components/molecules/StampListJK";

type Props = {
    stamps: Stamp[];
    touchable: boolean;
    page: "default" | "jk";
};

const StampListContainer = ({ stamps, touchable, page }: Props) => {
    const [rootStamps, setRootStamps] = useState<Stamp[]>([]);
    const [favStamps, setFavStamps] = useState<Stamp[]>([]);

    const [favMode, setFavMode] = useState(false);
    const [favIds, setFavIds] = useState<string[]>([]);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const data = getFavIds(`emotwicon/fav/${page}`);
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
            setFavIdsStorage(`emotwicon/fav/${page}`, newIds);
            return newIds;
        });
    };

    return (
        <main className="flex flex-col items-center flex-1 text-center">
            <div className="w-11/12 mb-2 inline-flex justify-end items-center">
                <button className="relative cursor-pointer" onClick={() => setFavMode((prev) => !prev)}>
                    <span className={"block w-14 h-8 bg-gray-200 rounded-full shadow-inner transition-colors " + (favMode ? "bg-yellow-300" : "")}></span>
                    <span
                        className={
                            "absolute block w-6 h-6 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out " +
                            (favMode ? "transform translate-x-full" : "")
                        }
                    ></span>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1.5 stroke-current fill-current text-yellow-300" viewBox="0 0 24 24" fill="none">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                </svg>
            </div>
            {page === "default" && <StampList stamps={favMode ? favStamps : rootStamps} touchable={touchable} toggle={toggleStampFav} />}
            {page === "jk" && <StampListJK stamps={favMode ? favStamps : rootStamps} touchable={touchable} toggle={toggleStampFav} />}
        </main>
    );
};

export default StampListContainer;
