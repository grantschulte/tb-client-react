import routesConfig from './routes.config';

export const menus = {
  footer:   routesConfig.filter(item => item.showOnFooterNav),
  pageBody: routesConfig.filter(item => item.showOnPageNav)
};

// This is an alternate way of constructing the menus that doesn't rely
// on flags or array filtering.

// const routesMap = {};

// for (let r of routesConfig) {
//   routesMap[r.name] = r;
// }

// export const footerMenu = [
//   routesMap.home,
//   routesMap.about
// ];