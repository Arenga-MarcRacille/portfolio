import { AnimatedGradient } from "@/components/backgrounds/animatedGradient";
import CertificateCard from "@/components/cards/certificateCard";
import Image from "next/image";

export const metadata = {
  title: "Projects",
};

const certificates = [
    {
        image: "/images/Leaderstaff.jpg",
        title: "Leaderstaff",
        description: "I received this award for the creation of the Robotic Process Automation I was able to deploy.",
    },
    {
        image: "/images/Japanese Class.jpg",
        title: "Japanese Class",
        description: "This is a certificate that I received for my Japanese class level 1. I enrolled just for fun and to learn the language.",
    },
    {
        image: "/images/PHP - Laravel.jpg",
        title: "PHP - Laravel",
        description: "As the companies way to show commitment to it's associates I was trained and completed the PHP - Laravel course.",
    }
];

export default function Certificates() {
    return (
        <main className="relative font-sans min-h-screen">
            <AnimatedGradient />

            <section className="relative z-10 flex justify-center">
                <div className="w-full max-w-7xl px-6 py-12 md:px-12">
                    <h1 className="text-3xl font-bold mb-10 text-highlight">
                        Certificates
                    </h1>

                    <div className="flex flex-col gap-8">
                        {certificates.map((certificate) => (
                            CertificateCard(certificate)
                        ))}
                    </div>
                </div>

                
            </section>
        </main>
    );
}