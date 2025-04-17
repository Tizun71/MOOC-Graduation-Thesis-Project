// app/courses/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function InstructorCoursesPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search your courses"
            className="px-4 py-2 border rounded-md w-64"
          />
          <Button className=" text-white px-4 py-2 rounded-md">🔍</Button>
          <select className="ml-2 px-4 py-2 border rounded-md">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
        <Button className=" text-white px-4 py-2 rounded-md">New course</Button>
      </div>

      {showBanner && (
        <div className="bg-gray-100 p-6 rounded-md flex justify-between items-start mb-6">
          <div>
            <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mb-2">
              New
            </span>
            <h2 className="text-lg font-semibold">
              We upgraded practice tests so you can upgrade yours.
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              With our creation improvements, new question types, and generative
              AI features, maximize your practice test’s certification prep
              potential.
            </p>
            <div className="mt-4 flex gap-4">
              <Button className=" text-white px-4 py-2 rounded-md text-sm">
                Learn more
              </Button>
              <Button
                className="text-sm text-gray-600 underline"
                onClick={() => setShowBanner(false)}
              >
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white shadow-sm border rounded-md p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-4 rounded-md">📘📺</div>
          <div>
            <h3 className="font-semibold text-lg">Learn Java Step By Step</h3>
            <p className="text-sm text-gray-500 mt-1">
              <span className="font-bold">DRAFT</span> · Private
            </p>
          </div>
        </div>
        <div className="w-1/2 ml-4">
          <p className="text-sm font-semibold mb-1">Finish your course</p>
          <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
            <div className=" h-full w-[5%]"></div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-center mt-10">
        Based on your experience, we think these resources will be helpful.
      </div>
    </div>
  );
}
