import { useCallback, useState } from 'react';
import { CaretDown, X } from 'phosphor-react';
import { Root as SelectRoot } from '@radix-ui/react-dropdown-menu';
import * as S from './styles';

type IDropdownOption = {
  label: string;
  value: string | number;
};

export type SelectProps = {
  placeHolder?: string;
  options: IDropdownOption[];
  isMulti?: boolean;
  disabled?: boolean;
  success?: boolean;
  error?: string;
  flex?: number;
  w?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  maxW?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  minW?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
  onChange?: (value: IDropdownOption[] | IDropdownOption) => void;
} & React.HTMLAttributes<HTMLElement>;

export type ListItemProps = {
  option: string;
  selected: boolean;
  active: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const Select = ({
  placeHolder,
  options,
  isMulti,
  disabled,
  success,
  error,
  onChange,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<IDropdownOption[]>([]);
  const [selectedUnitValue, setSelectedUnitValue] =
    useState<IDropdownOption | null>(null);

  const removeOption = useCallback(
    (option: IDropdownOption) => {
      return selectedValue?.filter((op) => op.value !== option.value);
    },
    [selectedValue],
  );

  const onTagRemove = (
    e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>,
    option: IDropdownOption,
  ) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);

    !!onChange && onChange(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSelectedUnitValue(null);
  };

  const onItemClick = useCallback(
    (option: IDropdownOption) => {
      let newValue: IDropdownOption[];

      if (isMulti) {
        if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
          newValue = removeOption(option);
        } else {
          newValue = [...selectedValue, option];
        }

        setSelectedValue(newValue);
        !!onChange && onChange(newValue);
      } else {
        setSelectedUnitValue(option);
        !!onChange && onChange(option);
      }
    },
    [isMulti, onChange, removeOption, selectedValue],
  );

  const isSelected = useCallback(
    (option: IDropdownOption) => {
      if (!selectedUnitValue && selectedValue?.length === 0) {
        return false;
      }

      if (isMulti) {
        return selectedValue.filter((o) => o.value === option.value).length > 0;
      }

      return selectedUnitValue?.value === option.value;
    },
    [isMulti, selectedUnitValue, selectedValue],
  );

  const getDisplay = () => {
    if (selectedUnitValue === null && selectedValue.length === 0) {
      return null;
    }

    if (isMulti) {
      return (
        <S.TagContainer>
          {selectedValue?.map((option) => (
            <span key={option.value}>
              {option.label}
              <button
                disabled={disabled}
                type="button"
                onClick={(e) => onTagRemove(e, option)}
              >
                <X size={32} />
              </button>
            </span>
          ))}
        </S.TagContainer>
      );
    }

    return selectedUnitValue?.label;
  };

  return (
    <SelectRoot>
      <S.SelectContainer
        error={!!error}
        success={success}
        disabled={disabled}
        {...props}
      >
        <S.TriggerContainer>
          <S.TriggerContent asChild disabled={disabled}>
            <S.TriggerButton
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              position={
                selectedUnitValue === null && selectedValue.length === 0
              }
            >
              <S.Input>
                <S.PlaceHolder>{placeHolder}</S.PlaceHolder>
                <S.Visible visibility={false}>{getDisplay()}</S.Visible>
              </S.Input>
              <fieldset>
                <legend>
                  <span>{placeHolder}</span>
                </legend>
              </fieldset>

              <S.ArrowButton className="Arrow">
                <CaretDown size={32} />
              </S.ArrowButton>
            </S.TriggerButton>
          </S.TriggerContent>
          <S.Visible visibility tabIndex={-1}>
            {getDisplay()}
          </S.Visible>
          {!isMulti && selectedUnitValue !== null && (
            <S.ClearButton
              type="button"
              tabIndex={0}
              onClick={handleClick}
              disabled={disabled}
            >
              <X size={32} />
            </S.ClearButton>
          )}
        </S.TriggerContainer>
        {!!error && <S.Error>{error}</S.Error>}
        <S.MenuContainer>
          <S.MenuContent loop sideOffset={5}>
            {options.map((option) => (
              <S.MenuItem
                key={option.value}
                onClick={() => onItemClick(option)}
                aria-selected={isSelected(option)}
                onSelect={isMulti ? (e) => e.preventDefault() : () => null}
              >
                {option.label}
              </S.MenuItem>
            ))}
          </S.MenuContent>
        </S.MenuContainer>
      </S.SelectContainer>
    </SelectRoot>
  );
};
