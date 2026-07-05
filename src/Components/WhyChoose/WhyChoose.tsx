import flag from '../../assets/flag.jpg'
import payment from '../../assets/payment.png'
import headphone from '../../assets/headphone.png'
import lightning from '../../assets/lightningjpg.png'
import secure from '../../assets/secure.png'
import WhyChooseCard from './WhyChooseCard'

function WhyChoose() {

    type Provide = {
        image: string,
        title: string,
        description: string
    }

    const provides: Provide[] = [
        {
            image: flag,
            title: 'Made for Bangladesh',
            description: 'Local support and services tailored for Bangladeshi customers'
        },
        {
            image: payment,
            title: 'Easy Payments',
            description: 'Pay with bKash, Nagad, Rocket or any local payment method'
        },
        {
            image: headphone,
            title: '24/7 Local Support',
            description: 'Our expert team is always here to help you successed'
        },
        {
            image: lightning,
            title: 'Instant Activation',
            description: 'Get your domain activated instantly after payment'
        },
        {
            image: secure,
            title: 'Secure and Reliable',
            description: 'Your domain ins safe with enterprise-grade security'
        },
    ]

    return (
        <>
            <div className="bg-blue-50 rounded-2xl m-8 lg:m-15 md:m-15 py-5">
                <div className="text-center py-8 space-y-2">
                    <h1 className="font-bold text-4xl">Why Choose DomainBD?</h1>
                    <p className="font-medium text-lg text-gray-700 tracking-wide">We are more then just a domain register</p>
                </div>

                <div className="gap-5 flex flex-wrap items-center justify-center">
                    {
                        provides.map((provide) => (
                            <WhyChooseCard key={provide.title} provide={provide} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default WhyChoose