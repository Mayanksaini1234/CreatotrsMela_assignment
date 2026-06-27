import { memo } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import SectionEyebrow from "./SectionEyebrow";

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" },
  }),
};

function BrandCollaborations({ collaborations }) {
  return (
    <section aria-labelledby="collabs-heading">
      <SectionEyebrow dotColor="#14171F">Previous collaborations</SectionEyebrow>
      <h2 id="collabs-heading" className="font-serif text-xl text-ink-900 mb-4">
        Brands that came back
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {collaborations.map((collab, i) => (
          <motion.div
            key={collab.id}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
            whileHover={{ y: -2 }}
          >
            <Card className="p-4 border-ink-100 hover:shadow-md transition-shadow duration-200 h-full flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-ink-900 text-paper-50 flex items-center justify-center font-mono text-sm shrink-0">
                {collab.mark}
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-ink-900 truncate">{collab.brand}</p>
                  <span className="text-[11px] text-ink-400 font-mono shrink-0">{collab.year}</span>
                </div>
                <p className="text-xs text-ink-500 mt-0.5">{collab.type}</p>
                <p className="text-xs text-teal-700 mt-1 font-mono">{collab.result}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default memo(BrandCollaborations);