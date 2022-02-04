export const preload = () => {
  // @ts-ignore
  const [ baseUrl ] = document.currentScript.src.split('dist');

  if (document && document.head) {
    // @ts-ignore
    DP_TTF_FONT_PATHS.forEach((path) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = `${baseUrl}dist/${path}`;
      link.as = "font";
      link.type = "font/ttf";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  }
};
