import { HeaderMode } from '@/components/header/HeaderMode'
import HeroBanner from '@/components/sections/HeroBanner';
import IntroStatBlock from '@/components/sections/IntroStatBlock';
import CardTileBlock from '@/components/sections/CardTileBlock';
import CtaBlock from '@/components/sections/CtaBlock';
import CategorySelector from '@/components/sections/CategorySelector';
import CourseTileBlock from '@/components/sections/CourseTileBlock';

export default function Home() {
  return (
    <>
      <HeaderMode transparent />
      <HeroBanner />
      <IntroStatBlock />
      <CardTileBlock />
      <CtaBlock />
      <CategorySelector />
      <CourseTileBlock />
    </>
  );
}
