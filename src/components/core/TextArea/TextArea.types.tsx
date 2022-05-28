import { ChangeEventHandler } from 'react';

export type IInputProps = {
  name: string;
  id?: string;
  onChange?: ChangeEventHandler<any>;
  className?: string;
  placeholder?: string;
  type?: string;
  InputProps?: any;
};
