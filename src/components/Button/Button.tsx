import classes from './Button.module.scss';

interface ButtonProps {
    type?: string;
    title: string;
}

const { btnGeneral } = classes;

const Button = ({title}: ButtonProps) => {
    return <button className={btnGeneral}>{title}</button>
}

export default Button;