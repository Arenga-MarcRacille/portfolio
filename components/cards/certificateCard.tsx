
type Props = {
    image: string;
    title: string;
    description: string;
}

export default function CertificateCard({ image, title, description }: Props) {
    return (
        <div className="
            relative overflow-hidden rounded-2xl p-6
            bg-neutral/75 backdrop-blur-md
            border border-white/20 shadow-lg
            transition-all duration-300
            hover:shadow-2xl hover:-translate-y-1
          ">
            <img
                src={image}
                alt={title}
                className="w-full object-cover" 
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    );
}