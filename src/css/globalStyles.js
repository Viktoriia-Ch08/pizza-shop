import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
     // FONTS
    --font-size: 16px;
    --line-height: 1.5;
    --regular-font-weight: 400;
    --medium-font-weight: 500;
    --semi-bold-font-weight: 600;
    --bold-font-weight: 700;
    --main-font: "Zen Maru Gothic", serif;
    --second-font: "Work Sans", sans-serif;
}

  body {
    margin: 0; 
    font-family: var(--main-font);
    font-weight: var(--regular-font-weight);
    font-style: normal;
    font-size: var(--font-size);
    line-height: var(--line-height);
    
    /* color: var(--text-clr-black);
    background-color: var(--bg-clr-light-theme);    */
}

a, button, input, select{
    cursor: pointer;
}
`;
