export const useFilterRoutes = (pathname) => {
  switch (pathname) {
    case '/configuration':
    case '/':
    case '/contribution-guide':
      return true;
    default:
      return false;
  }
};
