import AudioControl from "@/components/global/audio-control";
import ChatUI from "@/components/global/chat-interface";
import { PageWrapper } from "@/components/global/page-wrapper";

export default function Home() {
  return (
    <div className="flex flex-row h-screen bg-[#151515]">
      <ChatUI />
      <PageWrapper>
        <AudioControl />
      </PageWrapper>
    </div>
  );
}
