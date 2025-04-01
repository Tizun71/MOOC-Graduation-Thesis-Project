"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
import { Star, PlayCircle, Edit, Trash, Users } from "lucide-react";

const AdminCourseDetail = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin - Course Management</h1>
          <Button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</Button>
        </div>

        {/* Course Banner & Actions */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-60 bg-cover bg-center rounded-lg relative"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/800x400/?coding')",
          }}
        >
          <Button className="absolute top-4 right-4 bg-blue-600 text-white">
            Edit Course
          </Button>
        </motion.div> */}

        {/* Course Info */}
        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-bold">Full-Stack Web Development</h2>
          <p className="text-lg">
            Master full-stack development with modern technologies like React,
            Node.js, and PostgreSQL.
          </p>
          <div className="flex items-center gap-2 text-yellow-500">
            <Star /> <Star /> <Star /> <Star /> <Star />
            <span className="text-gray-500">(4.9 / 5.0)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Price: $99</span>
            <Button className="bg-green-600 text-white">Update Price</Button>
          </div>
        </div>

        {/* Enrolled Students Count */}
        <Card className="mt-6">
          <CardContent className="p-4 flex items-center gap-4">
            <Users className="text-blue-500" size={32} />
            <div>
              <h3 className="text-xl font-semibold">Enrolled Students</h3>
              <p className="text-gray-500">1,250 students</p>
            </div>
          </CardContent>
        </Card>

        {/* Course Content - Editable */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-4">
              Manage Course Content
            </h2>
            <ul className="space-y-2">
              {[
                "Introduction to Web Development",
                "Frontend with React.js",
                "Backend with Node.js & Express",
                "Database with PostgreSQL",
              ].map((lesson, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded"
                >
                  <div className="flex items-center gap-2">
                    <PlayCircle className="text-green-500" /> {lesson}
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-yellow-500 text-white">
                      <Edit size={16} />
                    </Button>
                    <Button className="bg-red-600 text-white">
                      <Trash size={16} />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <Button className="mt-4 w-full bg-blue-600 text-white">
              Add New Lesson
            </Button>
          </CardContent>
        </Card>

        {/* Student Reviews */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Student Reviews</h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <p className="font-semibold">Jane Doe</p>
                <p className="text-gray-500">
                  This course was fantastic! Learned a lot!
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <p className="font-semibold">Mark Smith</p>
                <p className="text-gray-500">
                  Great content and well-structured lessons.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminCourseDetail;
