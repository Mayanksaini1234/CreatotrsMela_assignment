import { memo } from "react";
import { motion } from "framer-motion";
import { FiTrendingUp } from "react-icons/fi";
import { Card } from "@/components/ui/card";
import SectionEyebrow from "./SectionEyebrow";

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: "easeOut" },
  }),
};

function PerformanceMetrics({ metrics }) {
  return (
    <section aria-labelledby="performance-heading">
      <SectionEyebrow dotColor="#FFB23E">Performance metrics</SectionEyebrow>
      <h2 id="performance-heading" className="font-serif text-xl text-ink-900 mb-4">
        The numbers behind the numbers
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.id}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
          >
            <Card className="p-4 border-ink-100 hover:border-ink-200 transition-colors duration-200 h-full">
              <p className="font-mono text-xl text-ink-900 tabular-nums">{metric.value}</p>
              <div className="flex items-center justify-between mt-1.5">
                <p className="text-xs text-ink-500 leading-snug">{metric.label}</p>
                {metric.trend > 0 && (
                  <span className="inline-flex items-center gap-0.5 text-[11px] font-mono text-emerald-600 shrink-0 ml-1">
                    <FiTrendingUp className="h-3 w-3" />
                  </span>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default memo(PerformanceMetrics);