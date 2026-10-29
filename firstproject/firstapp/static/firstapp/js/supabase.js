
/*const supabaseClient = supabase.createClient(
  'https://wgmwhtnhfbvvlzlqdicr.supabase.co',
  'sb_publishable_GkiSXqO_sKL6HmpjGLypaw_GeiZFPZD'
);
*/


// Create a single supabase client for interacting with your database
const supabaseClient = supabase.createClient('https://wgmwhtnhfbvvlzlqdicr.supabase.co', 
  'sb_publishable_GkiSXqO_sKL6HmpjGLypaw_GeiZFPZD')

async function insertNote() {
  const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
  if (userError || !user) {
    console.error("User not authenticated");
    return;
  }

  const { data, error } = await supabaseClient
    .from('notes')
    .insert({ user_id: user.id, content: 'Hello, this is a test note!' })
    .select();

  if (error) {
    console.error("Insert error:", error);
  } else {
    console.log("Note inserted:", data);
  }
}
insertNote();
