import { motion } from "motion/react";
export const AnimatedPara = ({ content }: { content: string }) => {
  const paraArray = content.split(" ");
  return (
    <div className="flex gap-[6px] flex-wrap w-full  ">
      {paraArray.map((word, index) => {
        return (
          <motion.p
            className="w-fit"
            initial={{ opacity: 0.15 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.04, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {word}
          </motion.p>
        );
      })}
    </div>
  );
};
