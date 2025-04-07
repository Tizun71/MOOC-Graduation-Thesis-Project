// pages/sign-up.js
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
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
              <Input placeholder="Full name" className="w-full" />
            </div>
            <div>
              <Input placeholder="Email" type="email" className="w-full" />
            </div>
          </div>

          {/* Continue Button */}
          <Button className="w-full mt-6">Tiếp tục với Email</Button>

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
