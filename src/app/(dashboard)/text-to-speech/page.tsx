import { TextToSpeechView } from "@/features/text-to-speech/views/text-to-speech-view";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text to Speech",
  description:
    "Convert text into natural-sounding speech with our Text to Speech feature.",
};

export default function TextToSpeechPage() {
  return <TextToSpeechView />;
}
