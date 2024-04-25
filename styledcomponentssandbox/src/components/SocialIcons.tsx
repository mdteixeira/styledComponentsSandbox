import { FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com">
          <FaTwitter></FaTwitter>
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook></FaFacebook>
        </a>
      </li>
      <li>
        <a href="https://tiktok.com">
          <FaTiktok></FaTiktok>
        </a>
      </li>
    </StyledSocialIcons>
  );
}
