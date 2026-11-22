export interface SliderItem {
    id: number;
    image: string
}

export interface SliderPaginationProps {
    total: number;
    activeIndex: number;
    onChange: (index: number) => void;
}