import Head from "next/head";

type Props = {
    title: string;
    description: string;
    ogImage: string;
    ogDescription: string;
    ogTitle: string;
    twTitle: string;
    twDescription: string;
    twImage: string;
    twUrl: string;
    twCard: "summary";
};

const MetaHeader = ({ title, description, ogTitle, ogDescription, ogImage, twTitle, twDescription, twImage, twUrl, twCard }: Props) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Clara" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="twitter:title" content={twTitle} />
        <meta property="twitter:description" content={twDescription} />
        <meta property="twitter:image" content={twImage} />
        <meta property="twitter:url" content={twUrl} />
        <meta property="twitter:card" content={twCard} />
    </Head>
);

export default MetaHeader;
