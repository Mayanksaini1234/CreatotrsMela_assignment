import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatCompactNumber } from "@/lib/format";

function StickyQuickBar({ creator, totalFollowers, onContactClick }) {
    const [visible, setVisible] = useState(false);
    const tickingRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (tickingRef.current) return;
            tickingRef.current = true;
            requestAnimationFrame(() => {
                setVisible(window.scrollY > 420);
                tickingRef.current = false;
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: -56, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -56, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed top-0 inset-x-0 z-50 bg-paper-50/95 backdrop-blur border-b border-ink-100"
                >
                    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                            <Avatar className="h-8 w-8 shrink-0">
                                <AvatarImage src={creator.avatarUrl} alt={creator.name} />
                                <AvatarFallback>RM</AvatarFallback>
                            </Avatar>
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-ink-900 truncate">{creator.name}</p>
                                <p className="text-xs text-ink-500 font-mono">
                                    {formatCompactNumber(totalFollowers)} reach · Fit {creator.fitScore}/100
                                </p>
                            </div>
                        </div>
                        <Button
                            size="sm"
                            onClick={onContactClick}
                            className="bg-gradient-to-r from-sunset-500 to-sunset-300 text-ink-900 hover:opacity-90 transition-opacity duration-200 active:scale-95 shrink-0 font-medium"
                        >
                            <FiMail className="h-3.5 w-3.5 mr-1.5" /> Contact
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default StickyQuickBar;