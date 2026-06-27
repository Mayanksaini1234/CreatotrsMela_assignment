import { memo } from "react";

/**
 * SectionEyebrow
 * A small mono-caps label with a colored dot. The dot color is the same
 * color used for that section's data elsewhere on the page, so the color
 * itself carries meaning (it's a category key, not decoration).
 */
function SectionEyebrow({ dotColor, children }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span
        className="h-1.5 w-1.5 rounded-full shrink-0"
        style={{ backgroundColor: dotColor }}
        aria-hidden="true"
      />
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-500">
        {children}
      </span>
    </div>
  );
}

export default memo(SectionEyebrow);