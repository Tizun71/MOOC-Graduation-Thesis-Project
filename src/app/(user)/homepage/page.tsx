"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-8">
              Học mọi thứ, mọi lúc, mọi nơi tại OpenCourse
            </h1>
            <p className="text-xl mb-6">
              Khám phá hàng ngàn khóa học với giá chỉ 50.000đ
            </p>
            <Input
              className="max-w-md"
              placeholder="What do you want to learn?"
            />
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((course) => (
              <Card key={course}>
                <CardHeader>
                  {/* <Image
                    src={}
                    alt="Course thumbnail"
                    width={300}
                    height={200}
                    className="w-full"
                  /> */}
                </CardHeader>
                <CardContent>
                  <CardTitle>The Complete Web Development Bootcamp</CardTitle>
                  <p className="text-sm text-gray-600">Angela Yu</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">4.7</span>
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="text-sm text-gray-600">(123,456)</span>
                  </div>
                  <p className="font-bold">$13.99</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Add to cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="min-h-screen mt-7">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
              THÀNH TỰU NỔI BẬT
            </h1>
            <p className="text-center text-gray-600 mb-10"></p>

            {/* Grid Layout for Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Images */}
              <div className="space-y-6">
                <div className="relative w-full h-100">
                  <Image
                    src="https://kltn-mooc-blockchain.s3.ap-southeast-1.amazonaws.com/images/first-website.jpeg" // Replace with your image path
                    alt="Hackathon Award"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Right Column: Blockchain Developer Bootcamp */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  KHÓA HỌC LẬP TRÌNH BLOCKCHAIN
                </h2>
                <p className="text-gray-600">
                  Học viện hàng đầu đào tạo lập trình viên Web3 và sinh viên tại
                  các trường đại học top đầu Việt Nam. Chương trình của chúng
                  tôi được công nhận bởi các nhà tuyển dụng quốc tế, hỗ trợ học
                  viên mở rộng cơ hội nghề nghiệp trong lĩnh vực Web3.
                </p>
                <div className="flex justify-between">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">20K</p>
                    <p className="text-gray-600">Học viên</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">50+</p>
                    <p className="text-gray-600">Khóa học</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">100+</p>
                    <p className="text-gray-600">Dự án thực tế</p>
                  </div>
                </div>
              </div>

              {/* Hackathon Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  CHỨNG CHỈ BLOCKCHAIN QUỐC TẾ
                </h2>
                <p className="text-gray-600">
                  Tổ chức thành công nhiều kỳ thi chứng chỉ blockchain được công
                  nhận toàn cầu, giúp lập trình viên và sinh viên khẳng định kỹ
                  năng, kết nối với các nhà tuyển dụng hàng đầu trong lĩnh vực
                  Web3, với hình thức thi linh hoạt, trực tuyến.
                </p>
                <div className="flex justify-between">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">50+</p>
                    <p className="text-gray-600">Kỳ thi</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">10K</p>
                    <p className="text-gray-600">Thí sinh</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">95%</p>
                    <p className="text-gray-600">Tỷ lệ đậu</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hackathon Image */}
              <div className="relative w-full h-64">
                <Image
                  src="https://kltn-mooc-blockchain.s3.ap-southeast-1.amazonaws.com/images/hackathon.jpg" // Replace with your image path
                  alt="Hackathon Award"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Technology Event Section */}
              <div className="relative w-full h-64">
                {/* <Image
                  src="/images/tech-event.jpg" // Replace with your image path
                  alt="Technology Event"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                /> */}
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  SỰ KIỆN CÔNG NGHỆ
                </h2>
                <p className="text-gray-600">
                  Thành công tổ chức các sự kiện công nghệ Web3 hàng đầu tại khu
                  vực APAC, tạo ra không gian để các lập trình viên khám phá
                  công nghệ mới và kết nối với các tổ chức và chuyên gia hàng
                  đầu trong ngành.
                </p>
                <div className="flex justify-between">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">25K</p>
                    <p className="text-gray-600">Người tham dự</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">200K</p>
                    <p className="text-gray-600">Lượt tiếp cận trực tuyến</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">200</p>
                    <p className="text-gray-600">Diễn giả</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-auto py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">OpenCourse</h3>
              <Link href="#" className="block text-sm">
                Đăng ký làm giảng viên tại OpenCourse
              </Link>
              <Link href="#" className="block text-sm">
                Về chúng tôi
              </Link>
            </div>
            {/* Thêm các cột footer khác */}
          </div>
          <div className="mt-8 text-sm text-gray-600">
            © 2025 OpenCourse, Inc.
          </div>
          <div className="mt-8 text-sm text-gray-600">
            Designed by Tiến Dũng
          </div>
        </div>
      </footer>
    </div>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
