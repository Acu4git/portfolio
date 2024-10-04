import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { FC } from "react";

const NavItem: FC<{ path: string; icon: IconDefinition; title: string }> = ({
  path,
  icon,
  title,
}) => {
  const href = `/${path}`;
  return (
    <>
      <NavigationMenuItem className="hover:bg-slate-800">
        <NavigationMenuLink
          href={href}
          className="h-20 flex items-center gap-2"
        >
          <FontAwesomeIcon icon={icon} />
          <p>{title}</p>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );
};

export default NavItem;
