export type Stamp = {
    title: string;
    name: string;
    ext: "png";
    fullpath: string;
};

export type StampList = {
    [key: string]: Stamp;
};
