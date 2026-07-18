async function signUp(email, password) {
  const { data, error } = await supabaseclient.auth.signUp({
    email: email,
    password: password,
  });
  return { data, error };
}

const signup_btn = document.getElementById('signup_btn');
if (signup_btn) {
  signup_btn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pw').value;
    result = await signUp(email, password);
    if (result.error) {
      alert('회원가입 실패: ' + result.error.message);
      return;
    } else {
      alert('회원가입 성공');
      window.location.href = 'login.html';
    }
  });
}

async function signInWithEmail(email, password) {
  const { data, error } = await supabaseclient.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
}

const login_btn = document.getElementById('login_btn');
if (login_btn) {
  login_btn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pw').value;
    result = await signInWithEmail(email, password);
    if (result.error) {
      alert('로그인 실패: ' + result.error.message);
    } else {
      alert('로그인 성공');
      window.location.href = 'index.html';
    }
  });
}

//crud 구현

async function createpost(title, contents) {
  const {
    data: { user },
  } = await supabaseclient.auth.getUser();

  const { data, error } = await supabaseclient
    .from('posts')
    .insert({
      title: title,
      contents: contents,
      userid: user.email,
    })
    .select();

  return { data, error };
}

async function loadpost() {
  const { data, error } = await supabaseclient.from('posts').select('*');
  return { data, error };
}

async function edit_post(id, title, contents) {}

async function delete_post(id) {
  const { data, error } = await supabaseclient
    .from('posts')
    .delete()
    .eq('id', id);
  return { data, error };
}
