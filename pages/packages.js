import axios from "axios";
import PackageCard from "@/components/PackageCard";

const Packages = ({ packages }) => {

    return (
        <PackageCard packages={packages} />
    );
};

export default Packages;

export const getServerSideProps = async () => {
    try {
        const response = await axios.get(
            "https://makromusic-web-task-api.onrender.com/get-packages"
        );
        return {
            props: {
                packages: response.data,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                packages: [],
            },
        };
    }
};