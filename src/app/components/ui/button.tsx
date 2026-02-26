import { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline' | 'white';
  icon?: ReactNode;
  children: ReactNode;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon,
  children, 
  className = '', 
  title,
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-lg font-medium text-base cursor-pointer transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2 border no-underline focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "text-white hover:before:bg-redborder-primary relative overflow-hidden border border-primary hover:border-primary-dark focus:border-primary-dark bg-primary px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary-dark before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full focus:text-white focus:before:left-0 focus:before:w-full",

    outline: "text-primary hover:before:bg-redborder-primary relative overflow-hidden border border-primary bg-white px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full focus:text-white focus:before:left-0 focus:before:w-full",

    white: "text-primary hover:before:bg-redborder-primary relative overflow-hidden border border-primary bg-white px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-grey before:transition-all before:duration-500 hover:text-primary hover:before:left-0 hover:before:w-full focus:text-primary focus:before:left-0 focus:before:w-full"
  };
  return (
    <a 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      title={title}
      aria-label={title}
      {...props}
    >
      {icon && <span className="flex items-center justify-center shrink-0 relative z-10" aria-hidden="true">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default Button;