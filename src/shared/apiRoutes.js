const apiBase =
  process.env.NODE_ENV === 'production'
    ? 'https://api.kuberaexchange.com'
    : 'http://localhost:4000';
const buildRoute = path => `${apiBase}/api/v1/${path}`;

const authRoutes = {
  googleRedirect: () => buildRoute('auth/google'),
  googleCallback: code => buildRoute(`auth/google/callback?code=${code}`)
};

const coinRoutes = {
  allCoins: () => buildRoute('coins'),
  getCoin: symbol => buildRoute(`coins/${symbol}`),
  coinHistory: (freq, symbol) => buildRoute(`coins/history/${freq}/${symbol}`),
  sparklines: () => buildRoute('coins/sparklines')
};

const userRoutes = {
  profile: () => buildRoute('profile')
};

const groupRoutes = {
  createGroup: () => buildRoute('groups'),
  joinGroup: uid => buildRoute(`groups/${uid}/join`),
  getUserGroups: () => buildRoute('groups'),
  getGroup: uid => buildRoute(`groups/${uid}`)
};

export const routes = {
  auth: authRoutes,
  coins: coinRoutes,
  user: userRoutes,
  groups: groupRoutes
};
