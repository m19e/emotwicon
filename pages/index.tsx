import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { useUserAgent } from "next-useragent";
import { Stamp } from "types";
import { ParsedUrlQuery } from "node:querystring";
import { stampList, defaultStamp } from "constants/stampList";
import Home from "components/templates/Home";

type Props = {
    stamp: Stamp;
    stamps: Stamp[];
    touchable: boolean;
};

const Emotwicon = ({ stamp, stamps, touchable }: Props) => <Home stamp={stamp} stamps={stamps} touchable={touchable} />;

const getStampByQuery = (query: ParsedUrlQuery): Stamp => {
    const s = query.stamp || "";
    const name = Array.isArray(s) ? "" : s;
    const stamp = stampList[name] ?? defaultStamp;

    return stamp;
};

export const getServerSideProps = ({ query, req }: GetServerSidePropsContext): GetServerSidePropsResult<Props> => {
    const stamp = getStampByQuery(query);
    const stamps = Object.entries(stampList).map(([_, v]) => v);

    const { isMobile, isTablet } = useUserAgent(req.headers["user-agent"]);
    const touchable = isMobile || isTablet;

    return {
        props: {
            stamp,
            stamps,
            touchable,
        },
    };
};

export default Emotwicon;
