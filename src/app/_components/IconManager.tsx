//Reference: https://phosphoricons.com/

const iconList: { [key: string]: React.JSX.Element } = {
    "add": <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>,
}

export const Icon = ({ iconName, size=32, fill="black", className="", onClick=()=>{} }: {
    iconName: string,
    size?: number,
    fill?: string,
    className?: string,
    onClick?: ()=>void,
}) => {
    if (!Object.keys(iconList).includes(iconName)) {
        console.error(`icon ${iconName} not exist`);
        return <></>
    }

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} height={size} viewBox="0 0 256 256"
            fill={fill}
            style={{display:"flex"}}
            className={className}
            onClick={onClick}
        >
            {iconList[iconName]}
        </svg>
    );
}