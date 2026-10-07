const AnimatedBorderButton = ({
    children,
    className = "",
    type = "button",
    disabled = false,
    ...props
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            {...props}
            className={`
                animated-border
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-2
                overflow-hidden
                rounded-full
                border
                border-border
                bg-transparent
                px-8
                py-4
                text-lg
                font-medium
                text-foreground
                transition-all
                duration-300
                hover:bg-primary/5
                hover:text-primary
                disabled:cursor-not-allowed
                disabled:opacity-50
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
                ${className}
            `}
        >
            {/* Animated SVG Border */}
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
            >
                <path
                    className="animated-border-path"
                    d="
                        M30,1
                        A29,29 0 0 0 1,30
                        A29,29 0 0 0 30,59
                        L170,59
                        A29,29 0 0 0 199,30
                        A29,29 0 0 0 170,1
                        Z
                    "
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="400 550"
                    strokeDashoffset="400"
                />
            </svg>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </button>
    );
};

export default AnimatedBorderButton;