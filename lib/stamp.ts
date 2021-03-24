import { Stamp } from "types";
import { ParsedUrlQuery } from "node:querystring";
import { stampList, defaultStamp } from "constants/stampList";

export const getStampByQuery = (query: ParsedUrlQuery): Stamp => {
    const s = query.stamp || "";
    const name = Array.isArray(s) ? "" : s;
    const stamp = stampList[name] ?? defaultStamp;

    return stamp;
};
