import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props: any) =>
    props.variant === 'outline' ? 'transparent' : 'limegreen'};
  color: ${(props: any) => (props.variant === 'outline' ? 'limegreen' : 'white')};
  padding: 0.75rem 2rem;
  border: 2px solid limegreen;
  font-weight: 550;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== 'outline' ? 'transparent' : 'limegreen'};
    color: ${(props: any) => (props.variant !== 'outline' ? 'limegreen' : 'white')};
  }
`;

export const PrimaryButton = styled(Button)`
  background-image: linear-gradient(to right, limegreen 0%, #69e069 100%);
  border: none;
`;

export const SubmitButton = styled(Button).attrs({
  type: 'submit',
})``;
