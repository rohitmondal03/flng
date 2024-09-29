import { createNavigationConfig } from "next-safe-navigation"


export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig(
  (defineRoute) => ({
    homePage: defineRoute('/'),
    dashboard: defineRoute('/dashboard'),
    pricing: defineRoute('/#pricing'),
    features: defineRoute('/#features'),

    // auth routes
    signIn: defineRoute('/sign-in'),
    signUp: defineRoute('/sign-up'),
    forgotPassword: defineRoute("/forgot-password"),

    uploadFiles: defineRoute('/upload-file'),
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