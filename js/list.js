const SUPABASE_URL = 'https://vdtufuffqepkagsnltev.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdHVmdWZmcWVwa2Fnc25sdGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NzI1ODYsImV4cCI6MjA2MjE0ODU4Nn0.fFoB5letPd02tRGT35Cw-LB-8puiZbOihsXahUwcbsU';

fetch(`${SUPABASE_URL}/rest/v1/posts?select=*`, {
  headers: {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  }
})
.then(res => res.json())
.then(data => {
  const container = document.getElementById('posts');
  container.innerHTML = data.map(post => `
    <article>
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <small>${new Date(post.created_at).toLocaleString()}</small>
    </article>
  `).join('');
});