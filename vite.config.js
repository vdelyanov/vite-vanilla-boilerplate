import { sync } from "glob";

export default {
  appType: "mpa",
  root: "./src",
  base: './',
  build: {
    outDir: "../dist", 
    emptyOutDir: true,
    rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "./")),
    },
  }
};
