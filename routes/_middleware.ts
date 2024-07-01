import { FreshContext } from '$fresh/server.ts';
import { load } from '$std/dotenv/mod.ts';

import type { ContextState } from '../types/context.d.ts';

const envType = Deno.env.get('ENV_TYPE');
const env = await load({
  envPath: '.env.development.local',
});
const apiUrl = envType === 'production'
  ? Deno.env.get('API_URL') as string
  : env['API_URL'];

export function handler(
  _req: Request,
  ctx: FreshContext<ContextState>,
) {
  ctx.state.apiUrl = apiUrl;
  ctx.state.isLoading = false;
  return ctx.next();
}
