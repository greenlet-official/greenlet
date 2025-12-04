// Common utilities used by pages
function renderSidebar() {
  const html = `
    <div class="sidebar">
      <div class="brand">Greenlet</div>
      <div class="nav">
        <a href="index.html">Home</a>
        <a href="stats.html">Stats</a>
        <a href="chat.html">Chat</a>
        <a href="market.html">Market</a>
        <a href="greens.html">Greens</a>
        <a href="trading.html">Trading</a>
        <a href="settings.html">Settings</a>
        <a href="admin.html">Admin Panel</a>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('afterbegin', html);
}

function requireAuth(onAuthed, redirect='login.html') {
  auth.onAuthStateChanged(user => {
    if (!user) location.href = redirect;
    else onAuthed(user);
  });
}

async function getOrCreateUser(uid, extra) {
  const ref = db.collection('users').doc(uid);
  const snap = await ref.get();
  if (!snap.exists) {
    await ref.set(Object.assign({tokens:11660,greens:{},packsOpened:0,username:'Guest',role:'member'}, extra||{}));
    return (await ref.get()).data();
  }
  return snap.data();
}

async function isAdmin(uid) {
  const doc = await db.collection('users').doc(uid).get();
  return doc.exists && ['admin','owner'].includes(doc.data().role);
}
