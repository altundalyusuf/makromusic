import { changeNavbar, saveCreatedCampaign } from "@/redux/slices/createCampaignSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonGroup from "./ButtonGroup";
import { useRouter } from 'next/router';

const PackageCard = ({ packages }) => {
    const createdCampaign = useSelector((state) => state.createCampaign.createdCampaign);
    const [selectedPackage, setSelectedPackage] = useState(createdCampaign.package || null);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(changeNavbar("form3"));
        if (!selectedPackage && packages && packages.length > 0) {
            const mostExpensivePackage = packages.reduce((prev, current) =>
                prev.price > current.price ? prev : current
            );
            setSelectedPackage(mostExpensivePackage);
        }
    }, [packages, dispatch]);

    const handlePackageSelect = (packageItem) => {
        setSelectedPackage(packageItem);
    };

    const handleBack = () => {
        router.back()
    }
    const handleContinue = () => {
        dispatch(saveCreatedCampaign({
            ...createdCampaign,
            package: selectedPackage,
        }));
        router.push('selectDate')
    }

    return (
        <div className="container max-w-5xl">
            <div className="flex flex-col border rounded-xl py-5 px-4 mb-5 ">
                <div className="mb-3 text-headerBlack">
                    Senin için uygun olan paketi seç
                </div>
                <div className="flex flex-col gap-3">
                    {packages.map((packageItem, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-1 border hover:cursor-pointer rounded-xl p-4 text-sm ${selectedPackage?.id === packageItem?.id ? "bg-[#F9FFFF] border-primary" : ""
                                }`}
                            onClick={() => handlePackageSelect(packageItem)}
                        >

                            <p className="text-primary">{packageItem.name}</p>
                            <p className="text-headerBlack tracking-tighter text-base">
                                {packageItem.click} tıklanma
                            </p>
                            <div className="flex justify-between items-end self-stretch">
                                <p className="text-gray-500">{packageItem.description}</p>
                                <span className="text-priceColor">{packageItem.currency} &nbsp;{packageItem.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-16">
                {/* Buttons */}
                <ButtonGroup handleClick={{ handleBack, handleContinue }} isButtonDisabled={false} />
            </div>
        </div>


    );
};

export default PackageCard;