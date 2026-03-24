"use client";

import { useWhenAppReady } from "@/hooks/useWhenAppReady";
import {
  FirebaseMessaging,
  PermissionStatus,
} from "@capacitor-firebase/messaging";
import { Capacitor } from "@capacitor/core";
import { useState } from "react";

export default function Home() {
  const [permStatus, setPermStatus] = useState<
    PermissionStatus["receive"] | null
  >(null);

  useWhenAppReady(async function () {
    try {
      if (Capacitor.getPlatform() !== "android") return;

      const permStatus = await FirebaseMessaging.checkPermissions();
      setPermStatus(permStatus.receive);
    } catch {}
  });

  return (
    <main className="w-full pt-8">
      <div className="flex flex-col items-center gap-4">
        <div>Platform: {Capacitor.getPlatform()}</div>
        <div>PermissionStatus: {permStatus ?? "unknown"}</div>
      </div>
    </main>
  );
}
