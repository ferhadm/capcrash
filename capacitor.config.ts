import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.capcrash.app",
  appName: "capcrash",
  webDir: "out",
  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
    FirebaseMessaging: {
      presentationOptions: ["badge", "sound", "alert", "criticalAlert"],
    },
  },
};

export default config;
