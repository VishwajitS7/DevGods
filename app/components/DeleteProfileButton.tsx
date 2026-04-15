"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, AlertTriangle } from "lucide-react";

export default function DeleteProfileButton() {
  const [showModal, setShowModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = () => {
    setIsDeleting(true);
    // Simulate API call
    setTimeout(() => {
      setIsDeleting(false);
      setShowModal(false);
      router.push("/");
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-5 py-2.5 bg-rose-50/50 text-rose-600 font-semibold rounded-xl border border-rose-200 hover:bg-rose-100 hover:border-rose-300 hover:shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-300"
      >
        <Trash2 className="w-4 h-4" />
        <span>Delete Profile</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md transition-opacity duration-300 animate-in fade-in">
          <div className="bg-white/95 backdrop-blur-xl border border-white rounded-3xl shadow-2xl w-full max-w-md p-8 transform transition-all duration-300 scale-100 opacity-100 animate-in zoom-in-95">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Delete Profile?</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Are you completely sure you want to delete your profile? This action is permanent, and all your data will be permanently wiped from our servers.
              </p>

              <div className="flex gap-4 w-full">
                <button
                  onClick={() => setShowModal(false)}
                  disabled={isDeleting}
                  className="flex-1 py-3 font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-200 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="flex-1 py-3 font-semibold bg-gradient-to-r from-rose-500 to-rose-600 text-white hover:from-rose-600 hover:to-rose-700 rounded-xl transition-all duration-200 shadow-md shadow-rose-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:grayscale"
                >
                  {isDeleting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Deleting...</span>
                    </>
                  ) : (
                    "Yes, Delete"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
