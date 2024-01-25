import axios from "axios";
import Homepage from "@/components/Homepage";

export default function Home({ campaign }) {
  return (
    <>
      <main>
        <Homepage campaign={campaign} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await axios.get("https://makromusic-web-task-api.onrender.com/create-campaign");

    return {
      props: {
        campaign: response.data,
      },
    };
  } catch (error) {
    console.error(error)
  }
};

