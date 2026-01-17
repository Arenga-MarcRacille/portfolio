import { motion } from "framer-motion";

type Experience = {
  title: string;
  period: string;
  description: string[]; // 👈 array, not string
  image: string | null;
};


type Props = {
  data: Experience;
  onClick: (data: Experience) => void;
};

export const ExperienceCard = ({ data, onClick }: Props) => {
  return (
    <motion.div
      onClick={() => onClick(data)}
      className="
        min-w-[85%] snap-center
        md:min-w-0
        relative overflow-hidden
        rounded-2xl p-6
        bg-neutral/75
        backdrop-blur-md
        border border-white/20
        shadow-lg
        transition-all duration-300
        hover:shadow-2xl hover:-translate-y-1
        md:max-w-[400px]
        cursor-pointer
        md:h-full
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={data.image || ""}
        alt={data.title}
        className="rounded-xl object-cover mb-6"
      />

      <h5 className="text-highlight text-2xl font-semibold">
        {data.title}
      </h5>

      <small className="italic text-primary block mb-3">
        {data.period}
      </small>

      <p className="text-highlight2 leading-relaxed line-clamp-3">
        {data.description[0]}
      </p>
    </motion.div>
  );
};
