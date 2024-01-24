import CustomButton from "./CustomButton"

const Homepage = () => {
    return (
        <>
            {/* Heading */}
            <div className="text-center text-3xl font-alata font-normal leading-normal tracking-tighter text-gray-900 border border-bottom pt-2 pb-4 mb-28
">
                makromusic Task
            </div>
            <CustomButton customProps={{ name: 'Kampanya Oluştur', className: 'text-white' }} />
        </>
    )
}

export default Homepage;
