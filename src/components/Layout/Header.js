import React,{Fragment} from 'react';

import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = function (props)
{
    return (
<Fragment>
        <header className={classes.header}>
    <h1 >
        ReactMeals
    </h1>
    
    <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src = {mealsImage} alt = "A table full of food" />
    </div>
</Fragment>
    );
};



export default Header ;

