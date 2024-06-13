import { createClient, } from "@supabase/supabase-js"
import dotenv from "dotenv"

import { env } from "@/lib/env"

export const supabaseClient = createClient("https://rnpwakpapptbuoarqogb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucHdha3BhcHB0YnVvYXJxb2diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5MzU5MjIsImV4cCI6MjAzMzUxMTkyMn0.bcDEoOMfo64WhXPhYsjNTNHYK0kvo242hC9fGHoF99s")
