import type { Handlers, PageProps } from '$fresh/server.ts';
import type { ContextState } from '@/types/context.d.ts';

import ButtonsGroup from '@/islands/ButtonsGroup.tsx';

interface CategoriesProps {
  categories: string[];
  topics: Record<string, string[]>;
}

export const handler: Handlers<CategoriesProps, ContextState> = {
  async GET(_req, ctx) {
    const categoriesResp = await fetch(`${ctx.state.apiUrl}/categories`);
    const categories = await categoriesResp.json();

    const topicsResp = await fetch(`${ctx.state.apiUrl}/categories/topics`);
    const topics = await topicsResp.json();

    return ctx.render({ categories, topics });
  },
};

export default function Categories({ data }: PageProps<CategoriesProps>) {
  const { categories, topics } = data;
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-4'>Choose Category & Topic</h1>
      <ButtonsGroup categories={categories} topics={topics} />
    </div>
  );
}
