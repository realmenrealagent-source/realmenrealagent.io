type FormErrorProps = {
  message?: string;
};

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return <p className="mt-2 text-xs text-accent">{message}</p>;
};

export default FormError;
