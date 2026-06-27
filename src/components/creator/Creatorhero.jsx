import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { FaPlane, FaCheckCircle } from "react-icons/fa";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import FitScoreRing from "./Fitscorering";
import { formatCompactNumber } from "@/lib/format";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function CreatorHero({ creator, socialPlatforms }) {
  // Derived once per render of this section only — sibling sections
  // (audience, performance, etc.) don't trigger this recompute.
  const totalFollowers = useMemo(
    () => socialPlatforms.reduce((sum, p) => sum + p.followers, 0),
    [socialPlatforms]
  );

  const blendedEngagement = useMemo(() => {
    const weighted = socialPlatforms.reduce(
      (sum, p) => sum + p.engagementRate * p.followers,
      0
    );
    return (weighted / totalFollowers).toFixed(1);
  }, [socialPlatforms, totalFollowers]);

  return (
    <section className="relative">
      <div className="h-44 sm:h-56 w-full overflow-hidden rounded-b-3xl relative">
        <img
          src={creator.coverUrl}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-paper-50 to-transparent" />
      </div>

      <div className="px-6 sm:px-10 -mt-14 relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div className="flex items-end gap-4">
            <Avatar className="h-24 w-24 ring-4 ring-paper-50 shadow-lg">
              <AvatarImage src={creator.avatarUrl} alt={creator.name} />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>
            <div className="pb-1">
              <div className="flex items-center gap-1.5">
                <h1 className="font-serif text-2xl sm:text-3xl text-ink-900">
                  {creator.name}
                </h1>
                {creator.verified && (
                  <FaCheckCircle className="h-4 w-4 text-sunset-500" aria-label="Verified creator" />
                )}
              </div>
              <p className="text-sm text-ink-500 font-mono">{creator.handle}</p>
            </div>
          </div>

          <div className="sm:pb-1">
            <FitScoreRing score={creator.fitScore} note={creator.fitScoreNote} />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-500"
        >
          <span className="inline-flex items-center gap-1.5">
            <FiMapPin className="h-4 w-4" /> {creator.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FaPlane className="h-3.5 w-3.5" /> {creator.travelsTo}
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 flex flex-wrap gap-2"
        >
          {creator.niches.map((niche) => (
            <Badge
              key={niche}
              variant="secondary"
              className="bg-teal-50 text-teal-700 border-teal-100 font-normal"
            >
              {niche}
            </Badge>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-700"
        >
          {creator.bio}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 grid grid-cols-3 sm:flex sm:gap-8 gap-4 py-5 border-y border-ink-100"
        >
          <QuickStat label="Total reach" value={formatCompactNumber(totalFollowers)} />
          <QuickStat label="Blended engagement" value={`${blendedEngagement}%`} />
          <QuickStat label="Countries covered" value={creator.countriesCovered} />
        </motion.div>
      </div>
    </section>
  );
}

function QuickStat({ label, value }) {
  return (
    <div>
      <p className="font-mono text-xl sm:text-2xl text-ink-900 tabular-nums">{value}</p>
      <p className="text-xs text-ink-500 mt-0.5">{label}</p>
    </div>
  );
}

export default memo(CreatorHero);