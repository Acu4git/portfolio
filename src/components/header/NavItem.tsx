import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { FC } from "react";
import { Link } from "react-router-dom";

const NavItem: FC<{ path: string; icon: IconDefinition; title: string }> = ({
  path,
  icon,
  title,
}) => {
  // const href = `${path}`;
  return (
    <>
      <NavigationMenuItem className="hover:bg-slate-800">
        <Link to={path} className="h-20 flex items-center gap-2">
          <FontAwesomeIcon icon={icon} />
          <p>{title}</p>
        </Link>
      </NavigationMenuItem>
    </>
  );
};

export default NavItem;
