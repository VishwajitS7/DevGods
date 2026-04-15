"use client";

import { useEffect, useRef, useState } from "react";

interface FormData {
  fullName: string;
  age: string;
  gender: string;
  city: string;
  profession: string;
}

interface FormErrors {
  fullName?: string;
  age?: string;
  gender?: string;
  city?: string;
  profession?: string;
}

export default function RegisterPage() {
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    age: "",
    gender: "",
    city: "",
    profession: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (form.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    if (!form.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(Number(form.age)) || Number(form.age) < 18 || Number(form.age) > 120) {
      newErrors.age = "Age must be between 18 and 120";
    }

    if (!form.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    } else if (form.city.trim().length < 2) {
      newErrors.city = "City must be at least 2 characters";
    }

    if (!form.profession.trim()) {
      newErrors.profession = "Profession is required";
    } else if (form.profession.trim().length < 2) {
      newErrors.profession = "Profession must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    if (!validate()) {
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Registration Data:", form);
    setSuccess(true);
    
    // Reset form after success
    setForm({
      fullName: "",
      age: "",
      gender: "",
      city: "",
      profession: "",
    });

    setLoading(false);

    // Hide success message after 5 seconds
    successTimerRef.current = setTimeout(() => setSuccess(false), 5000);
  };

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f7ed] to-[#fcf9f4] flex flex-col items-center justify-center px-6 py-12">
      
      {/* Title */}
      <div className="text-center max-w-md mb-10">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#574144] mb-4">
          FIND YOUR MATCH
        </p>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1C19] mb-6">
          Premium <span className="italic text-[#6C0028]">Registration</span>
        </h1>

        <p className="text-lg text-[#574144] font-light">
          Create your profile and find your perfect life partner today.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-md">
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm font-semibold text-green-800">
              ✓ Registration Successful! We&apos;ll review your profile shortly.
              {" "}💍
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-xs uppercase font-bold text-[#574144] tracking-wider mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                errors.fullName
                  ? "border-red-300 focus:ring-2 focus:ring-red-200"
                  : "border-gray-200 focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 font-medium">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Age + Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase font-bold text-[#574144] tracking-wider mb-2 block">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="18-120"
                min="18"
                max="120"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                  errors.age
                    ? "border-red-300 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
                }`}
              />
              {errors.age && (
                <p className="mt-1 text-xs text-red-600 font-medium">
                  {errors.age}
                </p>
              )}
            </div>

            <div>
              <label className="text-xs uppercase font-bold text-[#574144] tracking-wider mb-2 block">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                  errors.gender
                    ? "border-red-300 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
                }`}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="mt-1 text-xs text-red-600 font-medium">
                  {errors.gender}
                </p>
              )}
            </div>
          </div>

          {/* City */}
          <div>
            <label className="text-xs uppercase font-bold text-[#574144] tracking-wider mb-2 block">
              City
            </label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="e.g., Mumbai, Delhi, Bangalore"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                errors.city
                  ? "border-red-300 focus:ring-2 focus:ring-red-200"
                  : "border-gray-200 focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
              }`}
            />
            {errors.city && (
              <p className="mt-1 text-xs text-red-600 font-medium">
                {errors.city}
              </p>
            )}
          </div>

          {/* Profession */}
          <div>
            <label className="text-xs uppercase font-bold text-[#574144] tracking-wider mb-2 block">
              Profession
            </label>
            <input
              type="text"
              name="profession"
              value={form.profession}
              onChange={handleChange}
              placeholder="e.g., Doctor, Engineer, Business Owner"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                errors.profession
                  ? "border-red-300 focus:ring-2 focus:ring-red-200"
                  : "border-gray-200 focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
              }`}
            />
            {errors.profession && (
              <p className="mt-1 text-xs text-red-600 font-medium">
                {errors.profession}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 px-4 py-3 bg-rose-700 hover:bg-rose-800 disabled:bg-rose-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Creating Profile...
              </>
            ) : (
              "Create My Profile 💍"
            )}
          </button>

          {/* Terms */}
          <p className="text-xs text-center text-gray-500 mt-4">
            By registering, you agree to our Terms & Conditions
          </p>
        </form>
      </div>
    </div>
  );
}