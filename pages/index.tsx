import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Link from "next/link";
import Image from "next/image";
import { Stamp } from "types";
import MetaHeader from "foundations/MetaHeader";
import { stampList, defaultStamp } from "constants/stampList";

type Props = {
    stamp: Stamp;
    stamps: Stamp[];
};

const Home = ({ stamp, stamps }: Props) => (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <MetaHeader
            title="twista"
            description="twista - ツイッターで使える絵文字・スタンプ"
            ogTitle={stamp.name}
            ogDescription="twista - ツイッターで使える絵文字・スタンプ"
            ogImage={process.env.NEXT_PUBLIC_SITE_ROOT_URL + `/stamps/${stamp.fullpath}`}
            twTitle={stamp.name}
            twDescription="twista - ツイッターで使える絵文字・スタンプ"
            twImage={process.env.NEXT_PUBLIC_SITE_ROOT_URL + `/stamps/${stamp.fullpath}`}
            twUrl="http://localhost:3000"
            twCard="summary"
        />
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
            <p className="mt-3 text-2xl">{/* <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">{JSON.stringify(stamp)}</code> */}</p>

            <div className="flex flex-wrap justify-center">
                {stamps.map((s, i) => (
                    <div key={i}>
                        <Image src={`/stamps/${s.fullpath}`} alt={s.name} width={144} height={144} />
                    </div>
                ))}
                <div className="w-36"></div>
            </div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
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
