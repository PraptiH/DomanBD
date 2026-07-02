import Header from "../../Components/Header/Header"
import HeroSection from "../../Components/HeroSection/HeroSection"
import PopularDomain from "../../Components/PopularDomain/PopularDomain"
import ServiceSection from "../../Components/ServiceSection/ServiceSection"

function HomePage() {
    return (
        <>
            <div>
                <Header />

                <HeroSection />

                <PopularDomain />

                <ServiceSection/>
            </div>
        </>
    )
}

export default HomePage