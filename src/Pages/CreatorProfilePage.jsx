import { useCallback, useMemo } from "react";
import CreatorHero from "@/components/creator/CreatorHero.jsx";
import SocialOverview from "@/components/creator/SocialOverview.jsx";
import AudienceInsights from "@/components/creator/AudienceInsights.jsx";
import PerformanceMetrics from "@/components/creator/PerformanceMetrics.jsx";
import BrandCollaborations from "@/components/creator/BrandCollaborations.jsx";
import CollaborationCTA from "@/components/creator/CollaborationCTA.jsx";
import StickyQuickBar from "@/components/creator/StickyQuickBar.jsx";
import {
    creator,
    socialPlatforms,
    audience,
    collaborations,
    performance as performanceMetrics,
    availability,
} from "@/data/creatorData";

/**
 * CreatorProfilePage
 * Layout: hero spans full width (the 30-second verdict). Below it, a
 * 2-column grid — main column (8/12) carries the "explore further" content
 * a brand manager reads top-to-bottom; sidebar (4/12) carries the audience
 * snapshot + CTA, both of which stay relevant no matter how far down the
 * main column the reader has scrolled.
 */
export default function CreatorProfilePage() {
    // Computed once here, then passed down — avoids every section that needs
    // "total reach" (hero + sticky bar) re-deriving it independently.
    const totalFollowers = useMemo(
        () => socialPlatforms.reduce((sum, p) => sum + p.followers, 0),
        []
    );

    const handleContactClick = useCallback(() => {
        window.location.href = "mailto:hello@riyawanders.com?subject=Collaboration%20inquiry";
    }, []);

    return (
        <div className="bg-paper-50 min-h-screen font-sans">
            <StickyQuickBar
                creator={creator}
                totalFollowers={totalFollowers}
                onContactClick={handleContactClick}
            />

            <CreatorHero creator={creator} socialPlatforms={socialPlatforms} />

            <main className="max-w-5xl mx-auto px-6 sm:px-10 mt-12 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8 space-y-14">
                        <SocialOverview platforms={socialPlatforms} />
                        <PerformanceMetrics metrics={performanceMetrics} />
                        <BrandCollaborations collaborations={collaborations} />
                    </div>

                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24 space-y-10">
                            <AudienceInsights audience={audience} />
                            <CollaborationCTA availability={availability} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}