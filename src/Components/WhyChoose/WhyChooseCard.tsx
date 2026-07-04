type Provide = {
    image: string,
    title: string,
    description: string
}

type ChooseCardProps ={
    provide : Provide
}

function WhyChooseCard({provide}:ChooseCardProps) {
    return (
        <>
        <div className="bg-linear-to-r from-emerald-50 to-white w-80 h-80 rounded-2xl shadow-2xl text-center p-8 flex flex-col justify-center gap-3">
            <img className="w-15 mx-auto" src={provide.image} alt="" />
            <h1 className="font-bold text-2xl">{provide.title}</h1>
            <p className="font-medium text-lg tracking-wide">{provide.description}</p>
        </div>

        </>
    )
}

export default WhyChooseCard