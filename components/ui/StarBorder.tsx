import React from "react";

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    thickness?: number;
};

const StarBorder = <T extends React.ElementType = "button">({ as, className = "", color = "white", speed = "6s", thickness = 3, children, ...rest }: StarBorderProps<T>) => {
    const Component = as || "button";
    const restProps = rest as React.ComponentPropsWithoutRef<T>;

    return (
        <Component className={`relative inline-block overflow-hidden rounded-4xl ${className}`} {...restProps} style={{ padding: `${thickness}px 0`, ...(restProps.style as React.CSSProperties) }}>
            <div
                className="animate-star-movement-bottom absolute right-[-250%] -bottom-2.75 z-0 h-[60%] w-[300%] rounded-full opacity-90"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 60%)`,
                    animationDuration: speed,
                }}
            />
            <div
                className="animate-star-movement-top absolute -top-2.5 left-[-250%] z-0 h-[60%] w-[300%] rounded-full opacity-90"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 60%)`,
                    animationDuration: speed,
                }}
            />

            <div className="relative z-1 rounded-4xl border border-gray-800 bg-linear-to-b from-black to-gray-900 px-6.5 py-4 text-center text-[16px] text-white">{children}</div>
        </Component>
    );
};

export default StarBorder;
