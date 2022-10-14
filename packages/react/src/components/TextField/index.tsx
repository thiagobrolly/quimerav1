import { useState, InputHTMLAttributes } from 'react';

import { MagnifyingGlass, User, EyeSlash, Eye, Lock, X } from 'phosphor-react';

import * as S from './styles';

export type TextFieldProps = {
  variant?: 'outlined' | 'filled' | 'standard';
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text';
  label?: string;
  error?: string;
  success?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  w?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  maxW?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  minW?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  flex?: number;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
  handleClear?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  name,
  type = 'text',
  variant = 'standard',
  error,
  success,
  iconLeft,
  iconRight,
  handleClear,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleDelete = () => {
    !!handleClear && handleClear();
    setValue('');
  };

  return (
    <S.Wrapper variant={variant} error={!!error} success={success} {...props}>
      <S.InputContainer>
        {!!iconLeft && <S.IconLeft>{iconLeft}</S.IconLeft>}

        <S.Input
          placeholder=" "
          onChange={handleChange}
          value={value}
          name={name}
          type={type}
          iconLeft={iconLeft}
          iconRight={iconRight}
          variant={variant}
          {...props}
          {...(label ? { id: name } : {})}
        />
        {variant === 'outlined' && (
          <fieldset>
            <legend>
              <span>{label}</span>
            </legend>
          </fieldset>
        )}

        {!!label && (
          <S.Label variant={variant} iconLeft={iconLeft} htmlFor={name}>
            {label}
          </S.Label>
        )}

        {!!iconRight && type !== 'search' && (
          <S.IconRight>{iconRight}</S.IconRight>
        )}

        {type === 'search' && value.length !== 0 && (
          <S.IconRight>
            <X
              size={16}
              onClick={handleDelete}
              style={{ cursor: 'pointer' }}
              color="currentColor"
            />
          </S.IconRight>
        )}
      </S.InputContainer>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

const InputPassword = ({ label, name, ...props }: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      label={label}
      name={name}
      type={showPassword ? 'text' : 'password'}
      iconLeft={<Lock size={32} color="currentColor" />}
      iconRight={
        showPassword ? (
          <Eye
            size={32}
            onClick={togglePasswordVisibility}
            style={{ cursor: 'pointer' }}
            color="currentColor"
          />
        ) : (
          <EyeSlash
            size={32}
            style={{ cursor: 'pointer' }}
            onClick={togglePasswordVisibility}
            color="currentColor"
          />
        )
      }
      {...props}
    />
  );
};

const InputSearch = ({
  label,
  name,
  handleClear,
  ...props
}: TextFieldProps) => {
  return (
    <Input
      label={label}
      name={name}
      type="search"
      handleClear={handleClear}
      iconLeft={<MagnifyingGlass size={32} color="currentColor" />}
      {...props}
    />
  );
};

export const TextField = ({ label, name, type, ...props }: TextFieldProps) => {
  switch (type) {
    case 'email':
      return (
        <Input
          label={label}
          name={name}
          type="email"
          iconLeft={<User size={32} color="currentColor" />}
          {...props}
        />
      );

    case 'password':
      return <InputPassword label={label} name={name} {...props} />;

    case 'search':
      return <InputSearch label={label} name={name} {...props} />;

    default:
      return <Input type={type} label={label} name={name} {...props} />;
  }
};
