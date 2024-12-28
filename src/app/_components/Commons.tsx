export const Button = ({ children="", type="default", onClick=()=>{}, disableCondition=false, 
                            size=[20, 20], className="" }: {
    children?: React.ReactNode;
    type?: "default" | "prompt" | "warning" | "danger"
    onClick?: ()=>void,
    disableCondition?: boolean,
    size?: [number, number],
    className?: string,
}) => {
    const buttonStyle = (disableCondition) ? "ui-button-disabled" : `ui-button-${type}`;

    return (
        <div
            className={`${buttonStyle} ${className}`}
            onClick={onClick} style={{width: size[0]+"px", height: size[1]+"px"}}>
            {children}
        </div>
    );
}
