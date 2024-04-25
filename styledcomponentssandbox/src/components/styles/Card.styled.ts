import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;

  img {
    width: 80%;
  }
  h2 {
    width: 100%;
  }

  & > div {
    flex: 1;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: #ff0099;
    text-underline-offset: 5px;
    cursor: pointer;
    transition: 0.5s all cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover a {
    scale: 1.1;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;
