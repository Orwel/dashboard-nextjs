// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://afuvajvoxmpezzyalmsx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdXZhanZveG1wZXp6eWFsbXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMzYxOTIsImV4cCI6MjA0NzcxMjE5Mn0.H10gAkWS6vUf09l7qnEpM5Z8A6b9qX8YsZBYwdQM2nc';

export const supabase = createClient(supabaseUrl, supabaseKey);