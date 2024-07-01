import type { Handlers, PageProps } from '$fresh/server.ts';
import Plans from '../components/Plans.tsx';
import type { ContextState } from '@/types/context.d.ts';
import type { PromptResponse } from '@/types/prompts.d.ts';

export const handler: Handlers<PromptResponse, ContextState> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const category = url.searchParams.get('category') as string;
    const topic = url.searchParams.get('topic') as string;

    const resp = await fetch(
      `${ctx.state.apiUrl}/plan?` + new URLSearchParams({
        category,
        topic,
      }),
    );

    const promptResponse = await resp.json();
    return ctx.render(promptResponse);
  },
};

export default function Plan({ data }: PageProps<PromptResponse>) {
  return (
    <div>
      <Plans title={data.title} plans={data.plans} />
    </div>
  );
}
