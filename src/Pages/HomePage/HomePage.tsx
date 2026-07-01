import Header from "../../Components/Header/Header"
import HeroSection from "../../Components/HeroSection/HeroSection"
import PopularDomain from "../../Components/PopularDomain/PopularDomain"

function HomePage() {
    return (
        <>
            <div className="border-2 border-red-700 w-full">
                <Header />
                
                <HeroSection />

                <PopularDomain />
            </div>
        </>
    )
}

export default HomePage