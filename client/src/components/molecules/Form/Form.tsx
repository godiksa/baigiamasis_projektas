// import { COLOR } from '../../../shared/theme/types';
import { useState } from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import {
  FormWrapperModal,
  StyledButtonDiv,
  StyledFieldDiv,
  StyledForm,
  StyledInputFieldDiv,
} from './styles';

interface IFormProps {
  action: (e: React.FormEvent) => Promise<void>;
}

const Form = ({ action }: IFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue !== '' && (Number(newValue) < 1 || Number(newValue) > 200)) {
      setInputValue('');
    } else {
      setInputValue(newValue);
    }
  };

  return (
    <FormWrapperModal>
      <StyledForm onSubmit={action} id='add-form'>
        <StyledInputFieldDiv>
          <StyledFieldDiv>
            <label htmlFor='name'>Vardas</label>
            <Input type='text' id='name' required />
          </StyledFieldDiv>
          <StyledFieldDiv>
            <label htmlFor='surname'>Pavardė</label>
            <Input type='text' id='surname' required />
          </StyledFieldDiv>
          <StyledFieldDiv>
            <label htmlFor='email'>El. paštas</label>
            <Input type='email' id='email' required />
          </StyledFieldDiv>
          <StyledFieldDiv>
            <label htmlFor='age'>Amžius</label>
            <Input
              type='number'
              id='age'
              action={(e) => handleInputChange(e)}
              value={inputValue}
              required
            />
          </StyledFieldDiv>
        </StyledInputFieldDiv>
        <StyledButtonDiv>
          <Button type='submit' text='Pridėti naują' action={() => {}} />
        </StyledButtonDiv>
      </StyledForm>
    </FormWrapperModal>
  );
};

export default Form;
