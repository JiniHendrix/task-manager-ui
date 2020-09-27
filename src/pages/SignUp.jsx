

import React from 'react';
import { css } from '@emotion/core';
import styles from 'styles';

const { PRIMARY_COLORS } = styles;

const SignUp = () => {
  return (
    <div css={css`
      background: ${PRIMARY_COLORS.RICH_BLACK};
    `}>
      Hello World
    </div>
  )
}

export { SignUp }
