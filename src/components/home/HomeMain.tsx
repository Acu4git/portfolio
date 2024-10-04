import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import kyoropon from "/kyoropon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const HomeMain = () => {
  return (
    <>
      <main
        className="
      flex justify-center py-20 "
      >
        <Card className="w-2/3 shadow-lg bg-slate-100">
          <CardHeader>
            <CardTitle className="text-2xl underline">ABOUT ME</CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex justify-evenly items-center">
            <div className="flex-col justify-center items-center text-center">
              <p className="font-bold text-5xl mb-4">acu</p>
              <p>名前: 川口 栄宗</p>
              <p>京都工芸繊維大学 情報工学課程 B3</p>
              <div className="break-words my-5">
                バックエンドを主に触っています！
              </div>
            </div>
            <Avatar className="size-1/3 border-solid border-2 bg-white">
              <AvatarImage src={kyoropon} />
            </Avatar>
          </CardContent>
          <CardFooter className="p-4 gap-5 flex justify-end ">
            <NavLink
              to="https://github.com/Acu4git"
              className="hover:opacity-75"
            >
              <FontAwesomeIcon icon={faGithub} className="size-16" />
            </NavLink>
            <NavLink to="https://x.com/shaun_gram" className="hover:opacity-75">
              <FontAwesomeIcon icon={faSquareXTwitter} className="size-16" />
            </NavLink>
          </CardFooter>
        </Card>
      </main>
    </>
  );
};

export default HomeMain;
