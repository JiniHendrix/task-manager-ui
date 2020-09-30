import React, { useState } from 'react';
import { css } from '@emotion/core';
import styles from 'styles';
import { CenteredContentContainer } from 'components';

const { PRIMARY_COLORS } = styles;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  }

  return (
    <CenteredContentContainer>
        <div
          css={css`
            text-align: center;
            color: ${PRIMARY_COLORS.RICH_BLACK};
            font-size: 30px;
            width: 100%;
            font-weight: 600;
          `}
        >Sign Up</div>
        <form
          css={css`
            display: block;
          `}>
          <input type='text' onChange={handleEmailChange} />
          <input type='text' onChange={handleEmailChange} />
        </form>
    </CenteredContentContainer>
  )
}

export default SignUp;
