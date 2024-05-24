import React from "react";
import { Button, Input } from "../../components";

function Login() {
  return (
    <div className="w-1100 m-auto">
      <div className="w-[600px] m-auto bg-white flex justify-center flex-col gap-5 p-5 mt-3">
        <label htmlFor="login" className="font-semibold text-3xl">
          Dang nhap
        </label>
        <Input label="So dien thoai" type="phone" />
        <Input label="Mat khau" type="password" />
        <Button
          bgColor="bg-blue-900"
          color="text-white"
          customStyle="flex justify-center p-4 rounded-sm font-semibold"
          text="Dang nhap"
        />
        <div className="flex items-center justify-between mt-5">
          <span>Ban quen mat khau</span>
          <span>Tao tai khoan moi</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
