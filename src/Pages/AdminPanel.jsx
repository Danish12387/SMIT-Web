"use client"

import { useState } from "react"
import { PencilIcon, TrashIcon } from "lucide-react"

const initialAdmins = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Super Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Content Manager" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Course Admin" },
]

export default function AdminManagement() {
  const [admins, setAdmins] = useState(initialAdmins)
  const [editingAdmin, setEditingAdmin] = useState(null)

  const handleCreateAdmin = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newAdmin = {
      id: admins.length + 1,
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
      password:formData.get('password')
    }
    setAdmins([...admins, newAdmin])
    document.getElementById("admin-modal-checkbox").checked = false; // Close modal
  }

  const handleEditAdmin = (admin) => {
    setEditingAdmin(admin)
    document.getElementById("admin-modal-checkbox").checked = true; // Open modal
  }

  const handleUpdateAdmin = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const updatedAdmin = {
      id: editingAdmin.id,
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
    }
    setAdmins(admins.map((admin) => (admin.id === updatedAdmin.id ? updatedAdmin : admin)))
    document.getElementById("admin-modal-checkbox").checked = false; // Close modal
    setEditingAdmin(null)
  }

  const handleDeleteAdmin = (adminId) => {
    setAdmins(admins.filter((admin) => admin.id !== adminId))
  }

  const openCreateModal = () => {
    setEditingAdmin(null)
    document.getElementById("admin-modal-checkbox").checked = true; // Open modal
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body flex flex-row items-center justify-between">
          <h2 className="card-title text-2xl font-bold">Admin Management</h2>
          <button className="btn btn-primary" onClick={openCreateModal}>
            Create New Admin
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id}>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>{admin.role}</td>
                  <td className="text-right">
                    <button className="btn btn-ghost btn-xs mr-2" onClick={() => handleEditAdmin(admin)}>
                      <PencilIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </button>
                    <button className="btn btn-ghost btn-xs text-red-500 hover:text-red-700" onClick={() => handleDeleteAdmin(admin.id)}>
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DaisyUI Modal for creating/editing admin */}
      <input type="checkbox" id="admin-modal-checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="admin-modal-checkbox" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-lg">{editingAdmin ? "Edit Admin" : "Create New Admin"}</h3>
          <form onSubmit={editingAdmin ? handleUpdateAdmin : handleCreateAdmin} className="space-y-4">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={editingAdmin?.name || ""}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={editingAdmin?.email || ""}
                className="input input-bordered"
                required
              />
              <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                name="password"
                type="text"
                defaultValue={editingAdmin?.password || ""}
                className="input input-bordered"
                required
              />
            </div>
            </div>
            <div className="form-control">
              <label htmlFor="role" className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                id="role"
                name="role"
                defaultValue={editingAdmin?.role || ""}
                className="select select-bordered"
              >
                <option>Super Admin</option>
                <option>Content Manager</option>
                <option>Course Admin</option>
              </select>
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                {editingAdmin ? "Update Admin" : "Create Admin"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
