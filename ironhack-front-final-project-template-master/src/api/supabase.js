import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lzzfjzntoqdardehtlxx.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6emZqem50b3FkYXJkZWh0bHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1NTc1MzEsImV4cCI6MTk4NzEzMzUzMX0.yDftzf8ozo4OKzesKRJCJpohusz7mOhzWJ-l_mBikFw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
