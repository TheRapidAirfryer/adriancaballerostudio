import { VideoPlayer } from "@/components/ui/VideoPlayer";

export function ShowreelSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-14 md:px-10 md:pt-20">
      <VideoPlayer
        posterLabel="Showreel Adrian Caballero Studio — [EDITAR: reemplazar con reel real]"
        orientation="horizontal"
      />
    </section>
  );
}
