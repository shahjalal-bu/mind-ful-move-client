import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SectionHead from "../Shared/SectionHead/SectionHead";

const classesData = [
  { className: "Class A", enrolledStudents: 15 },
  { className: "Class B", enrolledStudents: 20 },
  { className: "Class C", enrolledStudents: 10 },
  { className: "Class D", enrolledStudents: 18 },
  { className: "Class E", enrolledStudents: 12 },
  // Add more classes data as needed
];

const lastSoldClasses = [
  { className: "Class B", instructor: "John Doe", price: "$50" },
  { className: "Class C", instructor: "Jane Smith", price: "$60" },
  { className: "Class D", instructor: "Mike Johnson", price: "$70" },
];

const Overview = () => {
  const renderLastSoldClasses = () => {
    return (
      <table className="min-w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 dark:bg-slate-800 text-left">
              Class Name
            </th>
            <th className="py-2 px-4 bg-gray-100 dark:bg-slate-800 text-left">
              Instructor
            </th>
            <th className="py-2 px-4 bg-gray-100 dark:bg-slate-800 text-left">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {lastSoldClasses.slice(0, 3).map((classItem) => (
            <tr key={classItem.className}>
              <td className="py-2 px-4">{classItem.className}</td>
              <td className="py-2 px-4">{classItem.instructor}</td>
              <td className="py-2 px-4">{classItem.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const lastAddedClasses = [
    {
      className: "Yoga for Beginners",
      instructor: "John Smith",
      category: "Hatha Yoga",
    },
    {
      className: "Meditation 101",
      instructor: "Jane Doe",
      category: "Mindfulness",
    },
    {
      className: "Pilates Fusion",
      instructor: "Mike Johnson",
      category: "Pilates",
    },
  ];
  const renderLastAddedClasses = () => {
    return (
      <table className="min-w-full bg-white  dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
        <thead>
          <tr>
            <th className="py-1.5 px-1 bg-gray-100 dark:bg-slate-900 text-left">
              Class Name
            </th>
            <th className="py-1.5 px-1 bg-gray-100  dark:bg-slate-900 text-left">
              Instructor
            </th>
            <th className="py-1.5 px-1 bg-gray-100 dark:bg-slate-900 text-left">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {lastAddedClasses.slice(0, 3).map((classItem) => (
            <tr key={classItem.className}>
              <td className="py-1.5 px-1">{classItem.className}</td>
              <td className="py-1.5 px-1">{classItem.instructor}</td>
              <td className="py-1.5 px-1">{classItem.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <SectionHead subtitle="Complete stat" title="Overview" />
      <div className="container mx-auto px-4 py-8 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-9">
        <div className="col-span-5 bg-white dark:bg-slate-900 rounded-lg shadow p-6 ">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={classesData}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="className" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="enrolledStudents"
                fill={
                  localStorage.getItem("theme") === "dark" ? "#020617" : "#ddd"
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="col-span-4 flex flex-col gap-1">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-2">
            <h2 className="text font-bold mb-1">Last Sold Classes</h2>
            {renderLastSoldClasses()}
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-2">
            <h2 className="font-bold mb-1">Last Added Users</h2>
            {renderLastAddedClasses()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
