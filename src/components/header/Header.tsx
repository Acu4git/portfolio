import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { faHouse, faCode } from "@fortawesome/free-solid-svg-icons";
import kyoropon from "/kyoropon.svg";
import NavItem from "./NavItem";
import BASE_URL from "@/router/basename";

const Header = () => {
  return (
    <header className="w-full h-20 p-4 z-50 sticky top-0 bg-slate-700 flex items-center justify-between opacity-80">
      <NavigationMenu>
        <NavigationMenuLink
          href={BASE_URL + "/secret"}
          className="hover:opacity-70"
        >
          <img src={kyoropon} className="h-20" />
        </NavigationMenuLink>
      </NavigationMenu>
      <NavigationMenu className="font-bold text-white text-4xl ">
        <NavigationMenuList className="gap-3">
          <NavItem path="/" icon={faHouse} title="Home" />
          <NavItem path="/works" icon={faCode} title="Works" />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
