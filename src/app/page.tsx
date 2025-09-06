import { HeaderMode } from '@/components/header/HeaderMode'
import HeroBanner from '@/components/sections/HeroBanner';
import IntroStatBlock from '@/components/sections/IntroStatBlock';
import CardTileBlock from '@/components/sections/CardTileBlock';
import CtaBlock from '@/components/sections/CtaBlock';
import CategorySelector from '@/components/sections/CategorySelector';
import CourseTileBlock from '@/components/sections/CourseTileBlock';
import ImageTextBlock from '@/components/sections/ImageTextBlock';
import TestimonialScroll from '@/components/sections/TestimonialScroll';

export default function Home() {
  return (
    <>
      <HeaderMode transparent />
      <HeroBanner transparent />
      <IntroStatBlock />
      <CardTileBlock />
      <CtaBlock />
      <CategorySelector />
      <CourseTileBlock />
      <CtaBlock />
      <ImageTextBlock />
      <TestimonialScroll />
    </>
  );
}
