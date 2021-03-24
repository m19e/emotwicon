import { Stamp } from "types";
import { ParsedUrlQuery } from "node:querystring";
import { stampList, JKstampList, defaultStamp } from "constants/stampList";

export const getStampByQuery = (query: ParsedUrlQuery): Stamp => {
    const s = query.stamp || "";
    const name = Array.isArray(s) ? "" : s;
    const stamp = stampList[name] ?? defaultStamp;

    return stamp;
};

export const getJKstampByQuery = (query: ParsedUrlQuery): Stamp => {
    const s = query.stamp || "";
    const name = Array.isArray(s) ? "" : s;
    const stamp = JKstampList[name] ?? defaultStamp;

    return stamp;
};
