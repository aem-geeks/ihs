import {
    loadCSS,
    getMetadata,
  } from './lib-franklin.js';

  async function loadTheme() {
    let theme=getMetadata('theme');
    await loadCSS(`${window.hlx.codeBasePath}/styles/styles.css`);
    if(theme){
      await loadCSS(`${window.hlx.codeBasePath}/theme/${theme}/site/styles.css`);
    }
  } 

  export {
    loadTheme
  };