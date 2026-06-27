import { memo, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionEyebrow from "./Sectioneyebrow";

const GENDER_COLORS = ["#FF6B4A", "#16505A", "#C9C2B4"];

function AudienceInsights({ audience }) {
  // Splitting this bit of UI state (which breakdown tab is active) into its
  // own component-local state keeps it from re-rendering CreatorProfilePage
  // or sibling sections when toggled.
  const [activeTab, setActiveTab] = useState("age");

  const handleTabChange = useCallback((tab) => setActiveTab(tab), []);

  return (
    <section aria-labelledby="audience-heading">
      <SectionEyebrow dotColor="#FF6B4A">Audience insights</SectionEyebrow>
      <h2 id="audience-heading" className="font-serif text-xl text-ink-900 mb-4">
        Who's actually watching
      </h2>

      <Card className="p-5 border-ink-100">
        <p className="text-xs uppercase tracking-wide text-ink-400 mb-3 font-mono">
          Gender split
        </p>
        <div className="flex h-2.5 w-full overflow-hidden rounded-full">
          {audience.gender.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ width: 0 }}
              whileInView={{ width: `${g.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              style={{ backgroundColor: GENDER_COLORS[i % GENDER_COLORS.length] }}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
          {audience.gender.map((g, i) => (
            <span key={g.label} className="text-xs text-ink-500 inline-flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: GENDER_COLORS[i % GENDER_COLORS.length] }}
              />
              {g.label} <span className="font-mono text-ink-900">{g.value}%</span>
            </span>
          ))}
        </div>

        <div className="mt-5 pt-5 border-t border-ink-100">
          <div className="flex gap-1 mb-3" role="tablist" aria-label="Audience breakdown">
            <TabButton active={activeTab === "age"} onClick={() => handleTabChange("age")}>
              Age
            </TabButton>
            <TabButton
              active={activeTab === "location"}
              onClick={() => handleTabChange("location")}
            >
              Location
            </TabButton>
          </div>

          {activeTab === "age" ? (
            <BarList rows={audience.age} color="#16505A" />
          ) : (
            <BarList rows={audience.topLocations} color="#FFB23E" />
          )}
        </div>

        <div className="mt-5 pt-5 border-t border-ink-100">
          <p className="text-xs uppercase tracking-wide text-ink-400 mb-3 font-mono">
            Top interests
          </p>
          <div className="flex flex-wrap gap-2">
            {audience.interests.map((interest) => (
              <Badge key={interest} variant="outline" className="font-normal text-ink-600">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`px-3 py-1 text-xs rounded-full transition-colors duration-150 ${
        active ? "bg-ink-900 text-paper-50" : "text-ink-500 hover:bg-ink-50"
      }`}
    >
      {children}
    </button>
  );
}

function BarList({ rows, color }) {
  return (
    <div className="space-y-2.5">
      {rows.map((row, i) => (
        <div key={row.label}>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-ink-600">{row.label}</span>
            <span className="font-mono text-ink-900">{row.value}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-ink-50 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${row.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(AudienceInsights);