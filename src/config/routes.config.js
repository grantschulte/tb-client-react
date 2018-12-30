import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import ItemDetail from '../Components/ItemDetail/ItemDetail';
import ItemList from '../Components/ItemList/ItemList';

export default [
  {
    name: "about",
    path: "/about",
    exact: true,
    components: {
      main: About
    },
    label: "About",
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
      main: Home
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
      main: ItemList
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
      main: ItemDetail
    }, 
    label: "Item Detail",
    showOnPageNav: false,
    showOnFooterNav: false,
    showOnMobileNav: false,
    order: 99
  }
];
