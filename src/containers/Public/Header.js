import React from "react";
import logo from "./../../asset/img/logo-phongtro.png";
import {
  FaHeart,
  FiUserPlus,
  GoPlusCircle,
  IoIosLogIn,
} from "../../utils/icon";
import { useNavigate } from "react-router-dom";
import { Path } from "../../utils/path";
import { Button } from "../../components";
function Header() {
  const navigate = useNavigate();
  const goLogin = () => {
    return navigate(Path.LOGIN);
  };
  return (
    <div className="w-1100 m-auto flex items-center justify-between p-3">
      <img src={logo} width={270} height={40} alt="ttt" />
      <div className="flex items-center gap-4">
        <Button text={"Yeu thich"} IcBefore={FaHeart} />
        <Button
          text={"Dang nhap"}
          IcBefore={FiUserPlus}
          handleClick={goLogin}
        />
        <Button text={"Dang ky"} IcBefore={IoIosLogIn} />
        <Button
          text={"Dang tin mien phi"}
          color={"text-white"}
          bgColor={"bg-red-600"}
          IcAfter={GoPlusCircle}
          customStyle={"p-2 rounded-md"}
        />
      </div>
    </div>
  );
}

export default Header;
