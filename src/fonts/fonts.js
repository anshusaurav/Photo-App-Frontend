import { createGlobalStyle } from 'styled-components';

import NameOfYourFontWoff from './BillabongW00Regular.woff';
import NameOfYourFontWoff2 from './BillabongW00Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${NameOfYourFontWoff2}) format('woff2'),
        url(${NameOfYourFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;