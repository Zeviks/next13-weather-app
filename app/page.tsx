import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";

const Page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 flex flex-col w-full h-screen bg-[#d7e4e9]">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default Page;
