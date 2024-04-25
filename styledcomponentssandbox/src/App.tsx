import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import { theme } from './GlobalStyle';
import content from './content';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
