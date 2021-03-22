import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { Stamp } from "types";
import { stampList, defaultStamp } from "constants/stampList";
import MetaHeader from "foundations/MetaHeader";
import StampListItem from "components/molecules/StampListItem";

type Props = {
    stamp: Stamp;
    stamps: Stamp[];
};

const Home = ({ stamp, stamps }: Props) => (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <MetaHeader
            title="twista"
            description="twista - ツイッターで使える絵文字・スタンプ"
            ogTitle={stamp.title}
            ogDescription="twista - ツイッターで使える絵文字・スタンプ"
            ogImage={process.env.NEXT_PUBLIC_SITE_ROOT_URL + `/stamps/${stamp.fullpath}`}
            twTitle={stamp.title}
            twDescription="twista - ツイッターで使える絵文字・スタンプ"
            twImage={process.env.NEXT_PUBLIC_SITE_ROOT_URL + `/stamps/${stamp.fullpath}`}
            twUrl={process.env.NEXT_PUBLIC_SITE_ROOT_URL}
            twCard="summary"
        />
        <main className="flex flex-col items-center justify-center flex-1 text-center">
            <p className="mt-3 text-2xl">{/* <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">{JSON.stringify(stamp)}</code> */}</p>

            <div className="grid grid-cols-2 gap-2">
                {stamps.map((s, i) => (
                    <StampListItem key={i} stamp={s} />
                ))}
            </div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 mt-4 border-t">
            <a
                className="flex items-center justify-center"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
            </a>
        </footer>
    </div>
);

export const getServerSideProps = ({ query }: GetServerSidePropsContext): GetServerSidePropsResult<Props> => {
    const check = query.stamp;
    const stampName = !!check && !Array.isArray(check) ? check : "";
    const stamp = stampList[stampName] ? stampList[stampName] : defaultStamp;
    const stamps = Object.entries(stampList).map(([_, v]) => v);

    return {
        props: {
            stamp,
            stamps,
        },
    };
};

export default Home;
