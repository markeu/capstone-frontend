import React from 'react';
import Grid from '@material-ui/core/Grid';

const dashboard = () => {
    return (
        <Grid container spacing={16}>
            <Grid item sm={8} xs={12}> 
                <p>content.....</p>
            </Grid>
            <Grid item sm={4} xs={12}> 
                <p>profile.....</p>
            </Grid>
        </Grid>
    )
}

export default dashboard;