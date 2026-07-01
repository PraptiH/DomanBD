import Header from "../../Components/Header/Header"
import HeroSection from "../../Components/HeroSection/HeroSection"
import PopularDomain from "../../Components/PopularDomain/PopularDomain"

function HomePage() {
    return (
        <>
            <div>
                <Header />

                <HeroSection />

                <PopularDomain />
            </div>
        </>
    )
}

export default HomePage