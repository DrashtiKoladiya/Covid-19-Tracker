import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import classn from 'classname';
import styles from './Cards.module.css';
/*
function Cards() {
    return(
        <h1>Cards</h1>
    );
}
*/

const Cards = ({data : {confirmed , recovered , deaths , lastUpdate}}) => {
    if(!confirmed)
    {
        return "Loading..";
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={1} justify='center'>
                <Grid item component={Card} xs={12} md={5} className={classn(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of confirmed cases of to Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={5} className={classn(styles.card,styles.active)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Active</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={confirmed.value - recovered.value - deaths.value}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of to Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={5} className={classn(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recoverd</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recovered cases from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={5} className={classn(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths because of Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;