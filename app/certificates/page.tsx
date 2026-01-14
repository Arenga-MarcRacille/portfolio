import { AnimatedGradient } from "@/components/backgrounds/animatedGradient";
import Image from "next/image";

export const metadata = {
  title: "Projects",
};

export default function Certificates() {
    return (
        <main className="relative font-sans min-h-screen">
            <AnimatedGradient />

            <section className="relative z-10 flex justify-center">
                <div className="w-full max-w-7xl px-6 py-12 md:px-12">
                    <h1 className="text-3xl font-bold mb-10 text-[var(--color-highlight)]">
                        Certificates
                    </h1>
                </div>

                <div>
                    <Image src="/images/Leaderstaff.jpg" alt="Leaderstaff" width={600} height={400} />
                </div>
                <div>
                    <Image src="/images/Japanese Class.jpg" alt="Japanese Class" width={600} height={400} />
                </div>
                <div>
                    <Image src="/images/PHP - Laravel.jpg" alt="PHP - Laravel" width={600} height={400} />
                </div>
            </section>
        </main>
    );
}