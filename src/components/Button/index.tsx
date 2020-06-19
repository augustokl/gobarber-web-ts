import React, { ButtonHTMLAttributes } from 'react';

import { Container, IconLoading } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => (
  <Container loading={Number(loading)} type="button" {...rest}>
    {loading ? <IconLoading /> : children}
  </Container>
);

export default Button;
