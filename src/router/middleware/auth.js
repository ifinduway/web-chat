export default function auth({ next, store }) {
  if (!store.state.chat.user.name) {
    return next({
      name: 'Auth',
    });
  }
  return next();
}
