"use client";

// pages/sign-up.js
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { authApi } from "@/lib/api-client";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLoginClick() {
    if (!username || !email) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    try {
      await authApi.register({
        firstName,
        lastName,
        username,
        email,
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
            className="object-contain"
          />
        </div>

        {/* Right Side: Sign-Up Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Đăng nhập với Email</h2>

          {/* Checkbox */}
          <div className="flex items-center mb-4">
            <Checkbox id="offers" />
            <label htmlFor="offers" className="ml-2 text-sm text-gray-600">
              Gửi cho tôi những ưu đãi, gợi ý cá nhận, phương pháp học tập.
            </label>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            <div>
              <Input
                placeholder="First Name"
                className="w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="Last Name"
                className="w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="Username"
                className="w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="Email"
                type="email"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          {/* Continue Button */}
          <Button className="w-full mt-6" onClick={handleLoginClick}>
            Tiếp tục với Email
          </Button>

          {/* Terms and Privacy Policy */}
          <p className="text-xs text-gray-500 text-center mt-4">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>

          {/* Log In Link */}
          <p className="text-sm text-center mt-4">
            Đã có tài khoản?{" "}
            <Link href="/login" className="underline text-purple-600">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
