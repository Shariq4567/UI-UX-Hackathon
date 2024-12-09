import HeroSection from "@/components/hero-section";
import NewArrivals from "@/components/new-arrivals";
import TopSelling from "@/components/top-selling";
import BrowseByDressStyle from "@/components/browse-by-dress-style";
import OurHappyCustomers from "@/components/our-happy-customers";

export default function Home() {
  return (
    <div className="flex flex-col gap-[80px]">
      <HeroSection />
      <NewArrivals />
      <div className="w-[85%] h-[0.5px] bg-gray-300 mx-auto"></div>
      <TopSelling />
      <BrowseByDressStyle />
      <OurHappyCustomers />
    </div>
  );
}
