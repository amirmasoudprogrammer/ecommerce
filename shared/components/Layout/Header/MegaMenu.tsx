import React from "react";
import Image from "next/image";
import type {MoreMenuTitle} from "@/types/headerData";
import Link from "next/link";

interface MegaMenuProps {
    menuItems: MoreMenuTitle[];
    idH: number;
}

function MegaMenu({menuItems, idH}: MegaMenuProps) {

    const oneColumn = menuItems;
    const fourColumns = Array.from({length: 4}, (_, columnIndex) =>
        menuItems.filter((_, index) => index % 4 === columnIndex)
    );

    const renderColumns = (columns: MoreMenuTitle[][], gridClass: string) => (
        <div className={`grid ${gridClass} items-start`}>
            {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex min-w-0 flex-col gap-7">
                    {column.map((item) => (
                        <div key={item.id} className="min-w-0">
                            <h3 className="mb-3 font-semibold text-[12px]">
                                {item.title}
                            </h3>

                            <ul className="flex flex-col gap-2">
                                {item.subTitle.map((subTitle, index) => (
                                    <li key={index} className="text-[12px] text-gray-600">
                                        <Link href="@/shared/components/Layout/Header/MegaMenu">{subTitle}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

    return (
        <div className="grid grid-cols-1  min-[640px]:grid-cols-1  xl:grid-cols-5 gap-0  p-3  sm:p-4 xl:p-5">

            {/* Narrow screens: one column */}
            <div className="min-[640px]:hidden">
                {renderColumns(oneColumn.map(item => [item]), "grid-cols-1")}
            </div>

            {/* Tablets: three categories per row */}
            <div className="hidden min-[640px]:block xl:hidden">
                {renderColumns(
                    menuItems.map(item => [item]),
                    "grid-cols-3 gap-x-5 gap-y-7"
                )}
            </div>

            {/* Desktop: four columns */}
            <div className="hidden xl:block xl:col-span-4">
                {renderColumns(fourColumns, "grid-cols-4 gap-x-4")}
            </div>

            {/* Desktop banner */}
            <div className="hidden xl:block xl:col-span-1 relative min-h-[350px] overflow-hidden">
                <Image
                    src={
                        idH === 1
                            ? "/image/header/MegaMenuImage/image-363.png"
                            : idH === 2
                                ? "/image/header/MegaMenuImage/Thoughtful Portrait in Blue Florals.png"
                                : "/image/header/MegaMenuImage/Minimalist Laptop Workspace with Plant and Mug.png"
                    }
                    alt="Mega menu banner"
                    width={278}
                    height={340}
                    className="object-cover w-full h-[340px] rounded-lg"
                />
            </div>

        </div>
    );
}

export default MegaMenu;
