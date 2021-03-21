import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Link from "next/link";
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
            ogImage={`http://localhost:3000/stamps/${stamp.fullpath}`}
            twTitle={stamp.name}
            twDescription="twista - ツイッターで使える絵文字・スタンプ"
            twImage={`http://localhost:3000/stamps/${stamp.fullpath}`}
            twUrl="http://localhost:3000"
            twCard="summary"
        />
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
                Welcome to{" "}
                <a className="text-blue-600" href="https://nextjs.org">
                    Next.js!
                </a>
            </h1>

            <p className="mt-3 text-2xl">
                Get started by editing <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">pages/index.js</code>
            </p>

            <p className="mt-3 text-2xl">
                <code>{JSON.stringify(stamp)}</code>
            </p>

            {stamps.map((s, i) => (
                <Link key={i} href={`/stamps/${s.fullpath}`}>
                    <a>
                        <img src={`http://localhost:3000/stamps/${s.fullpath}`} alt={s.name} />
                    </a>
                </Link>
            ))}
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
