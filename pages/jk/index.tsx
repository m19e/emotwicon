import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { useUserAgent } from "next-useragent";
import { Stamp } from "types";
import { getJKstampByQuery } from "lib/stamp";
import { JKstampList } from "constants/stampList";
import JKpage from "components/templates/JK";

type Props = {
    stamp: Stamp;
    stamps: Stamp[];
    touchable: boolean;
};

const JK = ({ stamp, stamps, touchable }: Props) => <JKpage stamp={stamp} stamps={stamps} touchable={touchable} />;

export const getServerSideProps = ({ query, req }: GetServerSidePropsContext): GetServerSidePropsResult<Props> => {
    const stamp = getJKstampByQuery(query);
    const stamps = Object.entries(JKstampList).map(([_, v]) => v);

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

export default JK;
