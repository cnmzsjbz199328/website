import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wsuwcjghpnzabneiqibb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzdXdjamdocG56YWJuZWlxaWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2MTkxMjIsImV4cCI6MjA1MTE5NTEyMn0.ww0xjq_hcsbq4muuJPJ6E9DyWuC2SvNPmKGf7fgxFeU';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;