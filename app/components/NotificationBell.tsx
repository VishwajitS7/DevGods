"use client";

import { useEffect, useMemo, useState } from "react";
import { Bell } from "lucide-react";

interface NotificationItem {
  id?: string;
  _id?: string;
  message: string;
  type: "interest" | "match" | "view";
  isRead: boolean;
  createdAt: string;
}

export default function NotificationBell({ userId }: { userId: string }) {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    async function loadNotifications() {
      const res = await fetch(`/api/notifications?userId=${userId}`);
      const data = (await res.json()) as { notifications: NotificationItem[] };
      setNotifications(data.notifications ?? []);
    }
    void loadNotifications();
  }, [userId]);

  const unreadCount = useMemo(
    () => notifications.filter((item) => !item.isRead).length,
    [notifications]
  );

  return (
    <div className="relative">
      <button
        className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open notifications"
      >
        <Bell className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-rose-600 text-white text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 rounded-xl border border-gray-200 bg-white shadow-xl p-3 z-50">
          <p className="font-semibold text-gray-900 mb-2">Notifications</p>
          <div className="space-y-2 max-h-72 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="text-sm text-gray-500">No notifications yet.</p>
            ) : (
              notifications.map((item) => (
                <div
                  key={item.id || item._id || item.createdAt}
                  className="rounded-lg p-2 bg-gray-50 border border-gray-100"
                >
                  <p className="text-sm text-gray-800">{item.message}</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase">
                    {item.type}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
