import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://cntfjspztlrrybimnzte.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNudGZqc3B6dGxycnliaW1uenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTk5MjEsImV4cCI6MjA0MTUzNTkyMX0.ZOQVcvUioI4io9fdMxtEgpcW0H7-UIyeIcyZBKhFXtk`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
