
import Indexslider from "@/features/client/HomePage/sliderBanner/Indexslider";
import IndexBanners from "@/features/client/HomePage/slideBannerMobile/IndexBanners";
import Products from "@/features/client/HomePage/Products/components/Products";
import Trending from "@/features/client/HomePage/TrendingM/Trending";
import Top from "@/features/client/HomePage/Top100/Top";
import Mag from "@/features/client/HomePage/MagSafe/Mag";
import ScrollReveal from "@/shared/components/ScrollRevea/ScrollReveal";

function HomePage() {
    return (
        <section>
            <div className="hidden tablet:block">
                <Indexslider />
            </div>

            <div className="block tablet:hidden">
                <IndexBanners
                    image1="/image/homePage/bannerMobile/Never-Ending Summer Fashion.webp"
                    image2="/image/homePage/bannerMobile/Best Sellers_ Poolside Glam.webp"
                />
            </div>

            <ScrollReveal delay={0.4}>
                <Products />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
                <Trending />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
                <Top />
            </ScrollReveal>

            <ScrollReveal>
                <div className="hidden tablet:block">
                    <IndexBanners
                        image1="/image/homePage/bannerMobile/Never-Ending Summer Fashion.webp"
                        image2="/image/homePage/bannerMobile/Tea.webp"
                    />
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
                <Mag />
            </ScrollReveal>

            <ScrollReveal>
                <div className="hidden tablet:block">
                    <IndexBanners
                        image1="/image/homePage/bannerMobile/The Pinky Barbie Fashion Edition.webp"
                        image2="/image/homePage/bannerMobile/Best Sellers_ Poolside Glam.webp"
                    />
                </div>
            </ScrollReveal>
        </section>
    );
}

export default HomePage;
