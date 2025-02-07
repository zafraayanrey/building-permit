import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gkuvlhygjjfvbcuqbgbp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrdXZsaHlnampmdmJjdXFiZ2JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4OTc3MjgsImV4cCI6MjA1NDQ3MzcyOH0.u9wrtz9wabtVxIByMKLPCyvphIQlKr3b906FSxl9GK8";

export const supabase = createClient(supabaseUrl, supabaseKey);
