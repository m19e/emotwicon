export type Stamp = {
    name: string;
    ext: "png";
    fullpath: string;
};

export type StampList = {
    [key: string]: Stamp;
};
