
type ButtonPropsType = {
    onClick: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={() => props.onClick()} disabled={props.disabled}>{props.children}</button>
    );
};

