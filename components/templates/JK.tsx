import Link from "next/link";
import { Stamp } from "types";
import MetaHeader from "foundations/MetaHeader";
import StampList from "components/molecules/JKstampList";

type Props = {
    stamp: Stamp;
    stamps: Stamp[];
    touchable: boolean;
};

const JK = ({ stamp, stamps, touchable }: Props) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <MetaHeader
            title="#emotwicon ツイッターで使える絵文字・スタンプ"
            description="#emotwicon"
            ogTitle={stamp.title}
            ogDescription="#emotwicon"
            ogImage={process.env.NEXT_PUBLIC_SITE_ROOT_URL + `/stamps/${stamp.fullpath}`}
            twTitle={stamp.title}
            twDescription="#emotwicon"
            twImage={process.env.NEXT_PUBLIC_SITE_ROOT_URL + `/stamps/${stamp.fullpath}`}
            twUrl={process.env.NEXT_PUBLIC_SITE_ROOT_URL}
            twCard="summary"
        />

        <header className="flex items-center justify-center w-full h-24 mb-2 bg-twitter border-b">
            <Link href="/">
                <a>
                    <span className="font-sans font-black text-4xl text-gray-100">#emotwicon</span>
                </a>
            </Link>
        </header>

        <main className="flex flex-col items-center justify-center flex-1 text-center">
            <StampList stamps={stamps} touchable={touchable} />
        </main>

        <footer className="flex items-center justify-center w-full h-24 mt-2 bg-twitter border-t">
            <span className="font-sans text-lg text-gray-100">
                by{" "}
                <a
                    className="border-b border-opacity-0 border-gray-100 hover:border-opacity-100"
                    href="https://github.com/m19e"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    m19e
                </a>
            </span>
        </footer>
    </div>
);

export default JK;
