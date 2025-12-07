import HeroSection from '@/components/home/HeroSection';
import PillarsSection from '@/components/home/PillarsSection';
import FeaturedMusicSection from '@/components/home/FeaturedMusicSection';
import LessonsHighlightSection from '@/components/home/LessonsHighlightSection';
import StoreHighlightSection from '@/components/home/StoreHighlightSection';
import PodcastHighlightSection from '@/components/home/PodcastHighlightSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';
import YouTubeSection from '@/components/home/YouTubeSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <FeaturedMusicSection />
      <LessonsHighlightSection />
      <StoreHighlightSection />
      <PodcastHighlightSection />
      <YouTubeSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  );
}
