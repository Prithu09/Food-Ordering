

import React , {Fragment} from 'react';
import AvaliableMeal from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";

const Meals = function ()
{
    return(
        <Fragment>
        <MealsSummary/>
        <AvaliableMeal/>
        </Fragment>
    );

}

export default Meals;