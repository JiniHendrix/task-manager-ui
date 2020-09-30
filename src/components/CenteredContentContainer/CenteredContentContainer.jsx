import React from 'react';
import { css } from '@emotion/core';
import styles from 'styles';

const { PRIMARY_COLORS } = styles;

const CenteredContentContainer = ({
  children
}) => {
return (
  <div css={css`
    background: ${PRIMARY_COLORS.BABY_POWDER};
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}>
    <div css={css`
      height: 400px;
      width: 60%;
      max-width: 500px;
      background: ${PRIMARY_COLORS.TIFFANY_BLUE};
      border-radius: 5px;
      padding: 20px 30px;
    `
    }>
      {children}
    </div>
  </div>
)
};

export default CenteredContentContainer;