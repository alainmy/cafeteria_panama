import { Button } from '@material-ui/core';
import React from 'react';

const Categories = (props) => {

    const categories = props.categories;
    return (
        <div>

            {
                categories.map((item, index) => (
                    <Button
                        className={`${props.classes.margin} ${props.classes.background}`}
                        key={`${item}-${index}`}
                        size="small"
                        variant="outlined"
                        // color="primary"
                        onClick={event => props.handleClose(item)}
                    >
                        {item}
                    </Button>
                ))
            }
        </div>
    );
};

Categories.propTypes = {

};

export default Categories;
