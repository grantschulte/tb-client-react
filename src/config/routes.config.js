import HomePage from '../components/HomePage/HomePage';
import AboutPage from '../components/AboutPage/AboutPage';
import ContactPage from '../components/ContactPage/ContactPage';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';

export default [
  {
    name: "about",
    path: "/about",
    exact: true,
    components: {
      main: AboutPage
    },
    label: "About",
    showOnPageNav: false,
    showOnFooterNav: true,
    showOnMobileNav: true,
    order: 2
  },
  {
    name: "contact",
    path: "/contact",
    exact: true,
    components: {
      main: ContactPage
    },
    label: "Contact",
    showOnPageNav: false,
    showOnFooterNav: true,
    showOnMobileNav: true,
    order: 2
  },
  {
    name: "home",
    path: "/",
    exact: true,
    components: {
      main: HomePage
    }, 
    label: "Home",
    showOnPageNav: true,
    showOnFooterNav: true,
    showOnMobileNav: true,
    order: 1
  },
  {
    name: "itemList",
    path: "/items",
    exact: true,
    components: {
      main: ItemListContainer
    },
    label: "Items",
    showOnPageNav: true,
    showOnFooterNav: false,
    showOnMobileNav: true,
    order: 3
  },
  {
    name: "itemDetail",
    path: "/items/:id",
    exact: false,
    components: {
      main: ItemDetailContainer
    }, 
    label: "Item Detail",
    showOnPageNav: false,
    showOnFooterNav: false,
    showOnMobileNav: false,
    order: 99
  }
];
