export type Stamp = {
    title: string;
    name: string;
    ext: "png" | "PNG" | "jpg";
    fullpath: string;
    author: string;
    fav?: boolean;
};

export type StampList = {
    [key: string]: Stamp;
};
