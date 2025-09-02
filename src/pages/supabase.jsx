// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnbGNscW5naXp1amxra3N6amZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MzAzMDUsImV4cCI6MjA2OTIwNjMwNX0.wp9uRiuHX7FJynOVKYp5N9u32mka6qYNJUw1fNs8ClM";
const supabaseAnonKey = "https://abcd1234.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
