export default function useFilteredRoutes(pathname) {
  switch (pathname) {
    case '/configuration':
    case '/':
    case '/contribution-guide':
      return true;
    default:
      return false;
  }
}
