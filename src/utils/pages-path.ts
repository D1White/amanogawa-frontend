export enum PagesPath {
  home = '/',
  anime = '/anime',
  user = '/user',
  login = '/login',
  signup = '/signup',
}

export const privateRoutes: string[] = [PagesPath.user];
