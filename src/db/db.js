
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://thygmffwmqseklzikmjs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeWdtZmZ3bXFzZWtsemlrbWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5NjI3NTAsImV4cCI6MjAwMDUzODc1MH0.KFEZofj8mNp3WvUmUalV60uymGG-C_zlP4eCo1rM5_0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase