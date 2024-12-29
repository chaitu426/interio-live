interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-md transition';
  const variantStyles = {
    primary: 'bg-navy-900 text-white hover:bg-navy-800',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  };
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}