"use client"

import { useContext, useState } from "react"
import { Mail, Lock, AlertTriangle } from "lucide-react"
import { AuthContext } from "../config/AuthContext"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {
  const [activeTab, setActiveTab] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    // Implement login logic here
    console.log("Login attempt with:", { email, password })
    const isLoggedIn = login(email, password);
    if (isLoggedIn) {
      navigate('/admin-panel'); // Redirect to dashboard if login is successful
    } else {
      setError('Invalid credentials. Please try again.');
    }
    // Reset form and error
    setEmail("")
    setPassword("")
    setError("")
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()
    // Implement forgot password logic here
    console.log("Forgot password for:", email)
    // Switch to OTP form
    setActiveTab("otp")
    // Reset form and error
    setEmail("")
    setError("")
  }

  const handleOtpSubmit = (e) => {
    e.preventDefault()
    // Implement OTP verification logic here
    console.log("OTP submitted:", otp)
    // Reset form and error
    setOtp("")
    setError("")
    // Optionally redirect or reset tab after OTP verification
    setActiveTab("login")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Tabs */}
          <div className="tabs tabs-boxed">
            <a
              className={`tab tab-border-2 tab-rounded-lg ${activeTab === 'login' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </a>
            <a
              className={`tab tab-bordered ${
                activeTab === 'forgot-password' || activeTab === 'otp' ? 'tab-active' : ''
              }`}
              onClick={() => setActiveTab('forgot-password')}
            >
              Forgot Password
            </a>
          </div>

          {/* Login Form */}
          {activeTab === 'login' && (
            <div>
              <h2 className="card-title mt-4">Admin Login</h2>
              <p className="text-base-content mb-4">
                Enter your credentials to access the admin panel.
              </p>
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  {/* Email Input */}
                  <div className="form-control">
                    <label className="label" htmlFor="email">
                      <span className="label-text">Email</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full pl-10"
                        required
                      />
                    </div>
                  </div>
                  {/* Password Input */}
                  <div className="form-control">
                    <label className="label" htmlFor="password">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* Error Alert */}
                {error && (
                  <div className="alert alert-error mt-4">
                    <div className="flex-1">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      <label>{error}</label>
                    </div>
                  </div>
                )}
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full mt-4">
                  Login
                </button>
              </form>
            </div>
          )}

          {/* Forgot Password Form */}
          {activeTab === 'forgot-password' && (
            <div>
              <h2 className="card-title mt-4">Forgot Password</h2>
              <p className="text-base-content mb-4">Enter your email to reset your password.</p>
              <form onSubmit={handleForgotPassword}>
                <div className="space-y-4">
                  {/* Email Input */}
                  <div className="form-control">
                    <label className="label" htmlFor="reset-email">
                      <span className="label-text">Email</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        id="reset-email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* Error Alert */}
                {error && (
                  <div className="alert alert-error mt-4">
                    <div className="flex-1">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      <label>{error}</label>
                    </div>
                  </div>
                )}
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full mt-4">
                  Send Reset Link
                </button>
              </form>
            </div>
          )}

          {/* OTP Verification Form */}
          {activeTab === 'otp' && (
            <div>
              <h2 className="card-title mt-4">Verify OTP</h2>
              <p className="text-base-content mb-4">Enter the OTP sent to your email.</p>
              <form onSubmit={handleOtpSubmit}>
                <div className="space-y-4">
                  {/* OTP Input */}
                  <div className="form-control">
                    <label className="label" htmlFor="otp">
                      <span className="label-text">OTP</span>
                    </label>
                    <input
                      id="otp"
                      type="text"
                      placeholder="Enter the OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>
                {/* Error Alert */}
                {error && (
                  <div className="alert alert-error mt-4">
                    <div className="flex-1">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      <label>{error}</label>
                    </div>
                  </div>
                )}
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full mt-4">
                  Verify OTP
                </button>
              </form>
            </div>
          )}
        </div>
      
      </div>
    </div>
  )
}
