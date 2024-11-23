import { LegalChatbot } from '@/app/components/LegalChatbot';
import { getLegalContext } from '@/app/lib/legal-context';

export default async function LegalAssistantPage() {
  const context = await getLegalContext();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Asistente Legal
      </h1>
      <LegalChatbot initialContext={context} />
    </div>
  );
} 