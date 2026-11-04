export interface HeaderItem {
    id: number;
    image: string;
    title: string;
    description: string;
}
export interface HeaderMenu {
    id: number;
    title: string;
    moreTitle?: {
        id: number;
        title: string;
        subTitle: string[];
    }[];
}

export interface MoreMenuTitle {
    id: number;
    title: string;
    subTitle: string[];
}
export interface headerMobile {
    title:string
    href:string
}