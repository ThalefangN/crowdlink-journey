// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rcigtzcfnbbifkogcvos.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaWd0emNmbmJiaWZrb2djdm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNTgxMTAsImV4cCI6MjA0OTkzNDExMH0.7d2WNwWwA005Rt_Vd56rCSJGAwd24BuRlZF9J3Se_8k";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);