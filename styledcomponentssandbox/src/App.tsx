import { Button, PrimaryButton, SubmitButton } from './components/Button.style';
import { Wrapped } from './components/Wrapper.style';

function App() {
  return (
    <Wrapped>
      <Button variant="ao">Botão normal</Button>
      <Button variant="outline">Botão Outline</Button>
      <PrimaryButton variant="">Primary Button</PrimaryButton>
      <SubmitButton>Enviar</SubmitButton>
    </Wrapped>
  );
}

export default App;
