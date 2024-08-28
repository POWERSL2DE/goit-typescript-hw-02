import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  children: string;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className={css.description}>{children}</p>;
}