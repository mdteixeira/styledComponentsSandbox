import { BiChevronRight } from 'react-icons/bi';
import { StyledCard } from './styles/Card.styled';

interface content {
  item: { id: number; title: string; body: string; image: string };
}

export default function Card({ item: { id, title, body, image } }: content) {
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <a>
          Check How <BiChevronRight />
        </a>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
