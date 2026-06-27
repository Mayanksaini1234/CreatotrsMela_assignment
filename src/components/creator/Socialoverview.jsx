import { memo } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import SectionEyebrow from "./Sectioneyebrow";
import { formatCompactNumber, formatSigned } from "@/lib/format";

const PLATFORM_ICON = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: FaTiktok,
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

function SocialOverview({ platforms }) {
  return (
    <section aria-labelledby="social-overview-heading">
      <SectionEyebrow dotColor="#16505A">Social media overview</SectionEyebrow>
      <h2 id="social-overview-heading" className="font-serif text-xl text-ink-900 mb-4">
        Where the audience lives
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {platforms.map((platform, i) => (
          <PlatformCard key={platform.id} platform={platform} index={i} />
        ))}
      </div>
    </section>
  );
}

function PlatformCard({ platform, index }) {
  const Icon = PLATFORM_ICON[platform.id] ?? FaInstagram;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
    >
      <Card className="p-5 border-ink-100 hover:border-ink-200 hover:shadow-md transition-all duration-200 h-full">
        <div className="flex items-center justify-between">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${platform.color}1A` }}
          >
            <Icon className="h-[18px] w-[18px]" style={{ color: platform.color }} />
          </div>
          <span className="text-xs font-mono text-emerald-600">
            {formatSigned(platform.growth90d)}
          </span>
        </div>

        <p className="mt-4 font-mono text-2xl text-ink-900 tabular-nums">
          {formatCompactNumber(platform.followers)}
        </p>
        <p className="text-xs text-ink-500 mt-0.5">{platform.label} followers</p>

        <div className="mt-4 pt-4 border-t border-ink-100 flex items-center justify-between text-sm">
          <span className="text-ink-500">Engagement</span>
          <span className="font-mono text-ink-900">{platform.engagementRate}%</span>
        </div>
      </Card>
    </motion.div>
  );
}

export default memo(SocialOverview);