import {FC} from "react";
import {Link} from "react-router-dom";
import {styled} from "@mui/material";

export const HomePage: FC = () => {
  return (
    <div>
      <ul className="flex gap-10">
        <li>
          <StyledLink to="/login">
            <Button>Sign in</Button>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/register">
            <Button>Sign up</Button>
          </StyledLink>
        </li>
      </ul>
      <h1 className="text-[42px]">HOME</h1>
    </div>
  );
};


const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
`;

const Button = styled('button')`
  background-color: #ffffff;
  color: #000000;
  border: solid 1px black;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
