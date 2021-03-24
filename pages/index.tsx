import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { useUserAgent } from "next-useragent";
import { Stamp } from "types";
import { stampList, defaultStamp } from "constants/stampList";
import MetaHeader from "foundations/MetaHeader";
import StampList from "components/molecules/StampList";
import Home from "components/templates/Home";

type Props = {
    stamp: Stamp;
    stamps: Stamp[];
    touchable: boolean;
};

const Emotwicon = ({ stamp, stamps, touchable }: Props) => <Home stamp={stamp} stamps={stamps} touchable={touchable} />;

export const getServerSideProps = ({ query, req }: GetServerSidePropsContext): GetServerSidePropsResult<Props> => {
    const check = query.stamp;
    const stampName = !!check && !Array.isArray(check) ? check : "";
    const stamp = stampList[stampName] ? stampList[stampName] : defaultStamp;
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
