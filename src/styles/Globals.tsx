import { css, Global } from '@emotion/react';
import { VFC } from 'react';
import 'ress';

export const GlobalStyles: VFC = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 16px;
      }
    `}
  />
);
