import { IncomingMessage } from "node:http";
import { parse } from "url";

export const parseRequest = (req: IncomingMessage): string => {
    console.log("HTTP " + req.url);
    const { query } = parse(req.url || "/", true);
    const { stamp } = query || {};

    if (Array.isArray(stamp)) {
        throw new Error("Expected a single stamp");
    }

    return stamp;
};
