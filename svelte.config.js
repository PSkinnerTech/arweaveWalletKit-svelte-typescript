import preprocessReact from "svelte-preprocess-react/preprocessReact";

const vitePreprocess = import("@sveltejs/vite-plugin-svelte").then((m) =>
  m.vitePreprocess()
);

export default {
  preprocess: [
    preprocessReact(), // for React-like syntax
    {
      script: async (options) => (await vitePreprocess).script(options),
      style: async (options) => (await vitePreprocess).style(options),
    },
  ],
};
