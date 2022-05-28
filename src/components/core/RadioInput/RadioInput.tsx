import { RadioInputStyled } from './RadioInput.styles';

import { IInputProps } from './RadioInput.types';

const RadioInput = ({ className, ...props }: IInputProps) => {
  return <RadioInputStyled {...props} className={`${className}`} type="radio" />;
};

export default RadioInput;
