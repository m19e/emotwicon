export type Stamp = {
    name: string;
    ext: string;
    fullpath: string;
};

export type StampList = {
    [stamp: string]: Stamp;
};
