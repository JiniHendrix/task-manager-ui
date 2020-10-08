import React from 'react';
import { css } from '@emotion/core';

type TextInputProps = {
  placeholder?: string,
  onChange: Function,
  value: ''
}

const TextInput = ({
  placeholder,
  onChange,
  value
}: TextInputProps) => {
  return (
    <input
      css={css`
        padding: 2px;
        height: 25px;
        display: block;
      `}
      type='text'
      value={value}
      onChange={onChange}
    />
  );
};



export default TextInput;
