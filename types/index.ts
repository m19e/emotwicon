export type Stamp = {
    title: string;
    name: string;
    ext: "png" | "PNG" | "jpg";
    fullpath: string;
    author: string;
};

export type StampList = {
    [key: string]: Stamp;
};
