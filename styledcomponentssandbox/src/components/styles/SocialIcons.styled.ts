import styled from 'styled-components';

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    border: 1px solid #ffff;
    border-radius: 50%;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
  }

  a:hover {
    background: #fff;
    color: ${({ theme }) => theme.colors.footer};
  }

  li {
    list-style: none;
  }
`;
