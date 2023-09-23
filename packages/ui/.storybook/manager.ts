import {addons} from '@storybook/manager-api';
import {create} from '@storybook/theming/create';

const img =
  '<img src="https://camo.githubusercontent.com/56bbe6228a18ab083666fb98d8f8ba89b18b364e741883f5aacffe64c8d094e5/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313134313031363133373738323533383333302f313134323730333839353031383232353636342f616e64726f69642d6368726f6d652d353132783531322e706e673f77696474683d363430266865696768743d363430" width="40px" height="40px"/>';

const containerStyle =
  'display: flex; justify-content: space-around; align-items: center;';
const headerStyle = `background: -webkit-linear-gradient(#ec1187, #fd8419);
-webkit-background-clip: text;-webkit-text-fill-color: transparent;
font-size: 20px; font-weight: bold`;

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `<div style="${containerStyle}">${img} <h3 style="${headerStyle}">Chit-Tal</h3></div>`,
    brandUrl: 'https://chit-tal.com',
    brandTarget: '_self',
  }),
});
