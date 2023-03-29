import React from 'react';
import classes from './MealItemform.module.css';
import Input from '../../UI/Input';
const MeallItemForm = function (props)
{
    return(
        <form>
            <Input label ="Amount" input={
            {id:'amount',
            type: 'number',
            min: '1',
            max :'5',
            step:'1',
            defaultValue:'1',}

            }/>
            <button>
                +ADD
            </button>
        </form>

    );
}

export default MeallItemForm;
