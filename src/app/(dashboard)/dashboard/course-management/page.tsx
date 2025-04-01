"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Ban, Pencil, Trash } from "lucide-react";
import React, { useState } from "react";

// Giả sử đây là dữ liệu khóa học
const courses = [
  {
    id: 1,
    title: "Khóa học React cơ bản",
    description: "Khóa học dành cho người mới bắt đầu học React.",
  },
  {
    id: 2,
    title: "Khóa học JavaScript nâng cao",
    description: "Khóa học cho những ai muốn cải thiện kỹ năng JavaScript.",
  },
  {
    id: 3,
    title: "Khóa học Node.js và Express",
    description:
      "Khóa học về phát triển ứng dụng backend với Node.js và Express.",
  },
];

const pendingCourses = [
  { id: 1, name: "Khóa học React" },
  { id: 2, name: "Khóa học Next.js" },
];

const CourseManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Bộ lọc các khóa học theo tên
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold">Quản lý Khóa Học</h1>
      </div>

      {/* Tìm kiếm khóa học */}
      <div className="mb-8 flex justify-center">
        <div className="w-full max-w-md">
          <Label htmlFor="search" className="text-lg mb-2">
            Tìm kiếm khóa học
          </Label>
          <Input
            id="search"
            placeholder="Nhập tên khóa học"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      {/* Khóa học đang chờ xử lý */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            Khóa học đang chờ xử lý ({pendingCourses.length})
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4 space-y-2">
          {pendingCourses.length > 0 ? (
            pendingCourses.map((course) => (
              <div
                key={course.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>{course.name}</span>
                <div className="space-x-2">
                  <Button size="sm" variant="default">
                    ✔
                  </Button>
                  <Button size="sm" variant="destructive">
                    ✖
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Không có khóa học nào</p>
          )}
        </PopoverContent>
      </Popover>

      {/* Danh sách khóa học */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="bg-white shadow-md hover:shadow-lg transition-all duration-200 rounded-lg"
            >
              <CardContent>
                <h2 className="text-2xl font-semibold">{course.title}</h2>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {course.description}
                </p>
                <div className="mt-4 flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-100 p-4">
                      <div className="space-y-4">
                        {/* Input nhóm */}
                        <div className="space-y-3">
                          {[
                            {
                              id: "width",
                              label: "Tiêu đề",
                              defaultValue: course.title,
                            },
                            {
                              id: "maxWidth",
                              label: "Mô tả khóa học",
                              defaultValue: course.description,
                            },
                          ].map(({ id, label, defaultValue }) => (
                            <div
                              key={id}
                              className="grid grid-cols-3 items-center gap-4"
                            >
                              <Label
                                htmlFor={id}
                                className="text-sm font-medium"
                              >
                                {label}
                              </Label>
                              <Textarea
                                id={id}
                                defaultValue={defaultValue}
                                className="col-span-2 h-9 px-3"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>

                  {/* Popover cho nút Xóa */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="destructive"
                        className="flex items-center gap-2"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-4">
                      <p className="text-sm">
                        Bạn có chắc muốn xóa khóa học này?
                      </p>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="secondary">Hủy</Button>
                        <Button variant="destructive">Xóa</Button>
                      </div>
                    </PopoverContent>
                  </Popover>

                  {/* Popover cho nút Cấm */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="secondary"
                        className="flex items-center gap-2"
                      >
                        <Ban className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-4">
                      <p className="text-sm">
                        Bạn có chắc muốn vô hiệu hóa khóa học này?
                      </p>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="secondary">Hủy</Button>
                        <Button variant="default">Có</Button>
                      </div>
                    </PopoverContent>
                  </Popover>

                  <Button variant="default" className="flex items-center gap-2">
                    Xem chi tiết
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">
          Không tìm thấy kết quả nào
        </p>
      )}
    </div>
  );
};

export default CourseManagement;
