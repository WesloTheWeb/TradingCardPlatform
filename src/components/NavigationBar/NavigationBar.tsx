import Button from '../Button/Button';
import classes from './NavigationBar.module.scss'

const { navigationContainer } = classes;

const NavigationBar = () => {


    return (
        <div className={navigationContainer}>
            <Button title='Login' />
        </div>
    )

};

export default NavigationBar;