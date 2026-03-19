import { WavyBackground } from "@/components/ui/wavy-background";

export const HeroPattern = () => {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <WavyBackground
        colors={["#FF6B6B", "#F06595", "#CC5DE8", "#845EF7", "#5C7CFA"]}
        backgroundFill="hsl(0 0% 100%"
        blur={3}
        speed="slow"
        waveOpacity={0.1}
        waveWidth={60}
        waveYOffset={250}
        containerClassName="h-full"
        className="hidden"
      />
    </div>
  );
};
