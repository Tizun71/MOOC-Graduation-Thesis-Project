"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { authApi } from "@/lib/api-client";

import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLoginClick() {
    if (!username || !password) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    try {
      await authApi.login({
        username,
        password,
      });
    } catch (error) {
      console.log("failed to login", error);
      setErrorMessage(
        "Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại."
      );
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex max-w-4xl w-full mx-auto p-6">
        {/* Left Side: Illustration */}
        <div className="hidden md:block w-1/2 pr-8">
          <Image
            src="https://kltn-mooc-blockchain.s3.ap-southeast-1.amazonaws.com/images/login-illustration.png"
            alt="Sign up illustration"
            width={550}
            height={500}
            className="object-contain swing"
          />
        </div>

        {/* Right Side: Sign-Up Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">
            Đăng nhập vào OpenCourse
          </h2>

          {/* Form Inputs */}
          <div className="space-y-4">
            <div>
              <Input
                id="Username"
                placeholder="Username"
                className="w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <Input
                id="password"
                placeholder="Mật khẩu"
                type="password"
                className="w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}
          </div>

          {/* Continue Button */}
          <Button onClick={handleLoginClick} className="w-full mt-6">
            Đăng nhập
          </Button>

          {/* Alternative Sign-Up Options */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 text-center">
              Hoặc là đăng nhập với
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <Button variant="outline" className="p-2">
                <Image
                  src="https://kltn-mooc-blockchain.s3.ap-southeast-1.amazonaws.com/images/logo/goole_logo.png"
                  alt="Google"
                  width={24}
                  height={24}
                />
              </Button>
            </div>
          </div>

          {/* Log In Link */}
          <p className="text-sm text-center mt-4">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="underline text-cyan-500">
              Đăng kí
            </Link>{" "}
            tại đây
          </p>
        </div>
      </div>
    </div>
  );
}
