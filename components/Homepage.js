import { useRouter } from "next/router";
import CustomButton from "./CustomButton"
import { useDispatch } from "react-redux";
import { saveCreatedCampaign } from "@/redux/slices/createCampaignSlice";

const Homepage = ({ campaign }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(saveCreatedCampaign(campaign));
        router.push('selectPiece');
    }
    return (
        <>
            {/* Heading */}
            <div className="text-center text-3xl font-alata font-normal leading-normal tracking-tighter text-gray-900 border border-bottom pt-2 pb-4 mb-28
">
                makromusic Task
            </div>
            <CustomButton customProps={{ name: 'Kampanya Oluştur', textColor: 'text-white' }} onClick={handleClick} />
        </>
    )
}

export default Homepage;