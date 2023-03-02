const path = require('path-browserify')

// if (typeof window !== 'undefined') {
//   const currentUrl = new URL(import.meta.url);
//   const __dirname = currentUrl.pathname.substring(0, currentUrl.pathname.lastIndexOf('/'));
//   codeRoot = path.join(
//     __dirname,
//     '..',
//   )
// } else {
//   codeRoot = path.join(
//     __dirname,
//     '..',
//   )
// }

let codeRoot
if (process.env.NODE_ENV != "undefined" && process.env.NODE_ENV === 'production') {
  const scriptEls = document.getElementsByTagName('script');
  const currentScriptEl = scriptEls[scriptEls.length - 1];
  const modulePath = new URL(currentScriptEl.src).pathname;
  const moduleDir = path.dirname(modulePath);
  // console.log(moduleDir)
  codeRoot = path.join(
    moduleDir,
    '..',
  )
} else if (typeof window !== 'undefined') {
  const moduleUrl = new URL(window.location.href);
  const { VITE_PUBLIC_PATH } = process.env;
  const baseUrl = new URL(VITE_PUBLIC_PATH, location.href).pathname;
  const modulePath = moduleUrl.pathname.replace(baseUrl, '');
  const moduleDir = path.dirname(modulePath);
  // console.log(moduleDir)
  codeRoot = path.join(
    moduleDir,
    '..',
  )
}else {
  // console.log(__dirname)
  codeRoot = path.join(
    __dirname,
    '..',
  )
}
 
module.exports = {
  codeRoot,
}
