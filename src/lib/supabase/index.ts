import { createClient } from "@supabase/supabase-js"
import { config } from "dotenv"
import { env } from "../env";

config();


export const supabaseClient = createClient(process.env.SUPABASE_URL ?? "", process.env.SUPABASE_SERVICE_KEY ?? "");