import type {SliderPaginationProps} from "@/features/client/HomePage/sliderBanner/types/slider.types";


export default function SliderPagination({total, activeIndex, onChange,}: SliderPaginationProps) {
    return (
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-3">
            {Array.from({ length: total }, (_, index) => {
                const isActive = activeIndex === index;

                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => onChange(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`
                       
              h-3 rounded-full
              transition-all duration-500 ease-in-out
              ${isActive
                            ? "w-8 bg-blue-600"
                            : "w-3 bg-gray-300 hover:bg-blue-400"
                        }
            `}
                    />
                );
            })}
        </div>
    );
}
