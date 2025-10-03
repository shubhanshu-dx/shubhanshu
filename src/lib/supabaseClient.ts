import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Replace with your Supabase Project URL or use environment variable
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Replace with your Supabase anon key or use environment variable

// Ensure environment variables are loaded
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing. Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.');
  // For development, you might want to throw an error or use fallback values.
  // For production, this check is crucial.
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
