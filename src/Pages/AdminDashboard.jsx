"use client"

import { useState } from "react"
import { LayoutDashboard, Users, Image, BookOpen, Trophy, LogOut } from "lucide-react"
import AdminManagement from "./AdminPanel"
import PrivateRoute from "../config/PrivateRoute"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", value: "dashboard" },
    { icon: Users, label: "Admin Managment", value: "admin-managment" },
    { icon: Image, label: "Change Slider Images", value: "slider-images" },
    { icon: BookOpen, label: "Manage Courses", value: "manage-courses" },
    { icon: Trophy, label: "Manage Success Stories", value: "success-stories" },
  ]

  return (
    <PrivateRoute>

    <div className="flex h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-300 p-4">
        <div className="flex items-center space-x-2 mb-6">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="/placeholder.svg?height=32&width=32" alt="Admin" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-base-content">John Doe</h2>
            <p className="text-xs text-base-content/50">Super Admin</p>
          </div>
        </div>
        <ul className="menu p-0">
          {sidebarItems.map((item) => (
            <li key={item.value} className={`rounded-lg ${activeTab === item.value ? "bg-primary" : ""}`}>
              <button onClick={() => setActiveTab(item.value)} className="w-full">
                <item.icon className="mr-2 h-5 w-5" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <button className="btn btn-error btn-block">
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <div className="tabs tabs-boxed mb-4">
          <button
            className={`tab tab-bordered ${activeTab === "dashboard" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`tab tab-bordered ${activeTab === "admin-managment" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("admin-managment")}
          >
            Admin Managment
          </button>
          <button
            className={`tab tab-bordered ${activeTab === "slider-images" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("slider-images")}
          >
            Change Slider Images
          </button>
          <button
            className={`tab tab-bordered ${activeTab === "manage-courses" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("manage-courses")}
          >
            Manage Courses
          </button>
          <button
            className={`tab tab-bordered ${activeTab === "success-stories" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("success-stories")}
          >
            Success Stories
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "dashboard" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Welcome, John Doe</h2>
            <p>This is your admin dashboard. Use the sidebar to navigate to different sections.</p>
          </div>
        )}

        {activeTab === "admin-managment" && (
         <AdminManagement/>
        )}

        {activeTab === "slider-images" && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Change Slider Images</h2>
              <p className="card-subtitle">Update the images displayed in the website slider.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="space-y-2">
                    <img
                      src={`/Slider-img-${index}.jpg?height=200&width=300&text=Slider+Image+${index}`}
                      alt={`/Slider-img-${index}`}
                      className="w-full h-40 object-cover rounded"
                    />
                    <input type="file" className="file-input file-input-bordered w-full" accept="image/*" />
                  </div>
                ))}
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Update Slider Images</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "manage-courses" && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Manage Courses</h2>
              <p className="card-subtitle">Add, edit, or delete courses offered by the institute.</p>
              <button className="btn btn-primary mb-4">Add New Course</button>
              <div className="space-y-4">
                {["Web Development", "Data Science", "UX Design"].map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-base-200 rounded">
                    <span>{course}</span>
                    <div>
                      <button className="btn btn-outline btn-sm mr-2">Edit</button>
                      <button className="btn btn-error btn-sm">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "success-stories" && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Manage Success Stories</h2>
              <p className="card-subtitle">Add, edit, or delete student success stories.</p>
              <button className="btn btn-primary mb-4">Add New Success Story</button>
              <div className="space-y-4">
                {["John Doe's Journey", "Sarah's Career Change", "Team Project Success"].map((story, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-base-200 rounded">
                    <span>{story}</span>
                    <div>
                      <button className="btn btn-outline btn-sm mr-2">Edit</button>
                      <button className="btn btn-error btn-sm">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
    </PrivateRoute>
  )
}
