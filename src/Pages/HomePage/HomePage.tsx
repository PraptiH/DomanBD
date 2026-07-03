import Header from "../../Components/Header/Header"
import HeroSection from "../../Components/HeroSection/HeroSection"
import PopularDomain from "../../Components/PopularDomain/PopularDomain"
import ServiceSection from "../../Components/ServiceSection/ServiceSection"
import WhyChoose from "../../Components/WhyChoose/WhyChoose"

function HomePage() {
    return (
        <>
            <div>
                <Header />

                <HeroSection />

                <PopularDomain />

                <ServiceSection/>

                <WhyChoose/>
            </div>
        </>
    )
}

export default HomePage