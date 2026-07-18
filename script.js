async function signUp(email, password) {
  const { data, error } = await supabaseclient.auth.signUp({
    email: email,
    password: password,
  });
}

async function signInWithEmail(email, password) {
  const { data, error } = await supabaseclient.auth.signInWithPassword({
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
    await signUp(email, password);
    alert('회원가입 성공');
    window.location.href = 'login.html';
  });
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
