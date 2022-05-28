import { FieldTextareaStyled } from './TextArea.styles';
import { IInputProps } from './TextArea.types';

const FieldTextarea = ({ className, ...props }: IInputProps) => {
  return <FieldTextareaStyled {...props} className={`${className}`} />;
};

export default FieldTextarea;
