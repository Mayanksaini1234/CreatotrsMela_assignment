import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { FiMail, FiClock } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionEyebrow from "./SectionEyebrow";

function CollaborationCTA({ availability, contactEmail = "hello@riyawanders.com" }) {
  // Stable reference — passed to a <Button>, so memoizing avoids recreating
  // the handler (and re-rendering the button) on every parent render.
  const handleContactClick = useCallback(() => {
    window.location.href = `mailto:${contactEmail}?subject=Collaboration%20inquiry`;
  }, [contactEmail]);

  return (
    <section aria-labelledby="cta-heading">
      <SectionEyebrow dotColor="#16505A">Collaborate</SectionEyebrow>
      <h2 id="cta-heading" className="font-serif text-xl text-ink-900 mb-4">
        Start a conversation
      </h2>

      <Card className="p-5 border-ink-100 bg-ink-900 text-paper-50 overflow-hidden relative">
        <motion.div
          aria-hidden="true"
          className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-30"
          style={{ background: "linear-gradient(135deg, #FF6B4A, #FFB23E)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {availability.status}
          </span>

          <div className="mt-4 space-y-2.5 text-sm text-paper-200">
            <p className="inline-flex items-center gap-2">
              <FiClock className="h-4 w-4 text-paper-400" /> {availability.responseTime}
            </p>
            <p className="inline-flex items-center gap-2">
              <FaShieldAlt className="h-3.5 w-3.5 text-paper-400" /> {availability.dealsSince}
            </p>
          </div>

          <Button
            onClick={handleContactClick}
            className="mt-5 w-full bg-gradient-to-r from-sunset-500 to-sunset-300 text-ink-900 hover:opacity-90 font-medium"
          >
            <FiMail className="h-4 w-4 mr-2" /> Start a collaboration
          </Button>

          <p className="text-center text-xs text-paper-400 mt-3">
            Media kit & rate card sent within 24 hours
          </p>
        </div>
      </Card>
    </section>
  );
}

export default memo(CollaborationCTA);