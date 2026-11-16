const Button = ({ className = "", size = "default", children, type = "button", ...props }) => {

    const baseClasses = "relative overflow-hidden rounded-full bg-primary font-medium focus:outline-none focus-visible:ring-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/15 transition-colors";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    return (
        <button type={type} className={classes} {...props}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}

export default Button
