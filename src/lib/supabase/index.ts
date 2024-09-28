import { createClient } from "@supabase/supabase-js"
import { config } from "dotenv"

config();


export const supabaseClient = createClient(
  process.env.SUPBABASE_URL ?? "",
  process.env.SUPBABASE_SERVICE_KEY ?? "",
)