/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { PrismaClient } from '@prisma/client/extension';

PrismaClient;

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const Prisma = new PrismaClient();
		const user = await Prisma.user.create({
			data: {
				email: 'elsa@prisma.io',
				name: 'Elsa Prisma',
			},
		});
		const stringJSON = JSON.stringify(user);
		return new Response(stringJSON);
	},
};
