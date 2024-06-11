import { createNavigationConfig } from "next-safe-navigation"
import { z } from "zod";


export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig(
  (defineRoute) => ({
    home: defineRoute('/'),
    signIn: defineRoute('/sign-in'),
    signUp: defineRoute('/sign-up'),
    dashboard: defineRoute('/dashboard'),
  })
);



// invoice: defineRoute('/invoices/[invoiceId]', {
//   params: z.object({
//     invoiceId: z.string(),
//   }),
// }),
// shop: defineRoute('/support/[...tickets]', {
//   params: z.object({
//     tickets: z.array(z.string()),
//   }),
// }),
// shop: defineRoute('/shop/[[...slug]]', {
//   params: z.object({
//     // ⚠️ Remember to always set your optional catch-all segments
//     // as optional values, or add a default value to them
//     slug: z.array(z.string()).optional(),
//   }),
// }),