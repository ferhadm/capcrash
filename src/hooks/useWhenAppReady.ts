import { App } from "@capacitor/app";
import { useEffect } from "react";

export const useWhenAppReady = (fn: () => Promise<void>) => {
  useEffect(() => {
    const interval = setInterval(async () => {
      const state = await App.getState();

      if (state.isActive) {
        clearInterval(interval);
        await fn();
      }
    }, 1_000);

    return () => clearInterval(interval);
  }, []);
};
