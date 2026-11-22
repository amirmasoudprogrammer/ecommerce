import Link from "next/link";
import Image from "next/image";
import {IndexBannersProps} from "@/features/client/HomePage/slideBannerMobile/types/Index.types";



function IndexBanners({ image1, image2 }: IndexBannersProps) {
    return (
        <div className="container mt-5 lg:mt-0 flex flex-col sm:mb-0 tablet:mb-16 lg:flex-row items-center sm:justify-center lg:justify-around">
            <Link href="/">
                <Image
                    className="sm:w-[438px] sm:h-[280px] tablet:w-[620px] tablet:h-[393px] rounded-lg"
                    src={image1}
                    width={438}
                    height={280}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 620px, 438px"
                    alt="image"
                />
            </Link>

            <Link className="mt-5 lg:mt-0" href="/">
                <Image
                    className="sm:w-[438px] sm:h-[280px] tablet:w-[620px] tablet:h-[393px] rounded-lg"
                    src={image2}
                    width={438}
                    height={280}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 620px, 438px"
                    alt="image"
                />
            </Link>
        </div>
    );
}

export default IndexBanners;