import React, { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string;
    href?: string;
    primary?: boolean;
    outline?: boolean;
    text?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    small?: boolean;
    large?: boolean;
    children: ReactNode;
    className?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onClick?: MouseEventHandler<any>;
    [key: string]: any;
}

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className = '',
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}: ButtonProps) {
    let Comp: any = 'button';
    const props: Record<string, any> = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Size variants
    let sizeClass = 'min-w-[100px] px-4 py-2 text-base rounded';
    if (small) {
        sizeClass = 'min-w-[88px] px-3.5 py-1 text-sm rounded';
    } else if (large) {
        sizeClass = 'min-w-[140px] px-4 py-3 text-base rounded';
    }

    // Color/style variants
    let variantClass = 'text-[#161823] bg-white border-transparent hover:bg-[rgba(22,24,35,0.03)]';
    if (primary) {
        variantClass = 'text-white bg-[#fe2c55] border-[#fe2c55] hover:bg-[#ef2950] hover:border-[#ef2950]';
    } else if (outline) {
        variantClass = 'text-[#fe2c55] border-current bg-transparent hover:bg-[rgba(254,44,85,0.06)]';
    } else if (text) {
        variantClass = 'text-[#161823] border-transparent bg-transparent hover:underline';
    } else if (rounded) {
        variantClass = 'rounded-full shadow-sm border-[rgba(22,24,35,0.12)] bg-white hover:border-[rgba(22,24,35,0.2)] hover:bg-[rgba(22,24,35,0.03)] text-[#161823]';
    }

    const disabledClass = disabled ? 'pointer-events-none opacity-50' : '';

    const combinedClassName = [
        'inline-flex items-center justify-center font-bold select-none cursor-pointer border transition-colors duration-150 no-underline',
        sizeClass,
        variantClass,
        disabledClass,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Comp className={combinedClassName} {...props}>
            {leftIcon && <span className="inline-flex items-center justify-center w-6 text-center mr-2 shrink-0">{leftIcon}</span>}
            <span className="truncate">{children}</span>
            {rightIcon && <span className="inline-flex items-center justify-center w-6 text-center ml-2 shrink-0">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
