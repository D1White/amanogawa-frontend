export enum PagesPath {
  home = '/',
  anime = '/anime',
  myList = '/my-list',
  account = '/account',
  login = '/login',
  signup = '/signup',
}

export const privateRoutes: string[] = [PagesPath.account];
