export interface TrendingItem {
    id: number;
    title: string;
    badge: string;
    image: string;
    href: string;
}
export interface CarditemsProps {
    item: TrendingItem;
}