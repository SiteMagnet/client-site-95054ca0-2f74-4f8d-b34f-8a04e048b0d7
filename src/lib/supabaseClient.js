import { createClient } from "@supabase/supabase-js";

// Getting environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Log the values to ensure they're loaded correctly
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is not defined.");
} else {
  console.log("Supabase URL:", supabaseUrl);
  console.log("Supabase Anon Key:", supabaseAnonKey);
}

// Creating the client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
