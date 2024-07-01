// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from './routes/_404.tsx';
import * as $_app from './routes/_app.tsx';
import * as $_layout from './routes/_layout.tsx';
import * as $_middleware from './routes/_middleware.ts';
import * as $categories from './routes/categories.tsx';
import * as $index from './routes/index.tsx';
import * as $plan from './routes/plan.tsx';
import * as $Button from './islands/Button.tsx';
import * as $ButtonsGroup from './islands/ButtonsGroup.tsx';
import { type Manifest } from '$fresh/server.ts';

const manifest = {
	routes: {
		'./routes/_404.tsx': $_404,
		'./routes/_app.tsx': $_app,
		'./routes/_layout.tsx': $_layout,
		'./routes/_middleware.ts': $_middleware,
		'./routes/categories.tsx': $categories,
		'./routes/index.tsx': $index,
		'./routes/plan.tsx': $plan,
	},
	islands: {
		'./islands/Button.tsx': $Button,
		'./islands/ButtonsGroup.tsx': $ButtonsGroup,
	},
	baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;