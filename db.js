import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://aprhepkvvrywoqkktnry.supabase.co',
  'sb_publishable_PfXlbOrRvNso2IIbmvf4HQ_ACGBxkfg',
);
