import CardTile from "@/components/ui/CardTile";

export default function CardTileBlock() {
  return (
    <section className="mt-8 mb-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <CardTile />
          <CardTile />
        </div>
      </div>
    </section>
  );
}
