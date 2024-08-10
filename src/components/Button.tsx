interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const children = props.loading ? 'Loading...' : props.children;
  const propClassName = props.className || '';

  const buttonProps = { ...props };
  delete buttonProps.children;
  delete buttonProps.loading;
  delete buttonProps.className;

  return (
    <button
      {...buttonProps}
      className={
        'border-buttonBorder border-solid border-2 bg-buttonBg hover:bg-buttonHover text-baseText text-sm py-2 px-4 rounded' +
        (props.loading ? ' opacity-50 cursor-not-allowed' : '') +
        ' ' +
        propClassName
      }
    >
      {children}
    </button>
  );
};

export default Button;
