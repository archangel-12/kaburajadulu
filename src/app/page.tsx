import { DiscordButton } from "@/components/discord-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4">
        Hello <span style={{ color: 'var(--primary)' }}>World</span>
      </h1>
      <p className="font-caveat text-2xl">
        Hello <span style={{ color: 'var(--primary)' }}>World</span>
      </p>
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-4">
        <DiscordButton variant="filled" />
        <DiscordButton variant="outlined" />
        <DiscordButton variant="outlined-no-icon" />
        <DiscordButton variant="filled-no-icon" />
      </div>
    </div>
  );
}
