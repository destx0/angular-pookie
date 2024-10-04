import { auth } from '@/auth'
import { ChatPanel } from '@/components/chat-panel'
// ... other imports

export default async function ChatPage() {
  const session = await auth()

  // ... other code

  return (
    <div>
      {/* ... other components */}
      <ChatPanel
        id={id}
        title={title}
        input={input}
        setInput={setInput}
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
        session={session}
      />
    </div>
  )
}