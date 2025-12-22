import { motion, AnimatePresence } from "framer-motion";

type Experience = {
  title: string;
  period: string;
  description: string[];
  image: string | null;
};


type Props = {
  experience: Experience | null;
  onClose: () => void;
};

export const ExperienceModal = ({ experience, onClose }: Props) => {
  if (!experience) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="
            relative w-full max-w-lg mx-4
            rounded-2xl p-6
            bg-[var(--color-neutral)]
            shadow-2xl
            max-h-[85dvh]
            overflow-y-auto
            md:max-h-[75dvh]
          "
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >

          <div className="text-end mb-2">
            <button
              onClick={onClose}
              className="font-semibold text-xl text-[var(--color-highlight)] hover:scale-110 transition cursor-pointer"
            >
              ✕
            </button>
          </div>
          
          <div className="w-full flex justify-center mb-4 ">
            <img
              src={experience.image || ""}
              alt={experience.title}
              className="rounded-2xl w-50"
            />
          </div>
          

          <h3 className="text-2xl font-bold text-[var(--color-highlight)]">
            {experience.title}
          </h3>

          <small className="italic text-[var(--color-primary)] block mb-4">
            {experience.period}
          </small>

          <div className="text-[var(--color-highlight2)] leading-relaxed space-y-4 mt-4">
            {experience.description.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
