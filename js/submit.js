const SUPABASE_URL = 'https://vdtufuffqepkagsnltev.supabase.co';
const SUPABASE_KEY = 'your-anon-key';

document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const post = {
    title: form.title.value,
    content: form.content.value
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(post)
  });

  if (res.ok) {
    alert('Post created!');
    form.reset();
  } else {
    alert('Error submitting post');
  }
});