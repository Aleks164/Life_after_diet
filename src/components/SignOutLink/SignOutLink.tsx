import { useAuth } from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

export const SignOutLink = ({ children, to, ...ptops }) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const signOutClick = (event: MouseEventHandler) => {
    event.preventDefault();
    signOut(() => navigate(to, { replace: true }));
  };
  return (
    <Link className="signOutLink" to={to} onClick={signOutClick}>
      {children}
    </Link>
  );
};
