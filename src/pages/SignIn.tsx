import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        backgroundColor: 'rgb(122, 204, 254)',
        flex: '0 0 50%',
        overflow: 'hidden',
        paddingBottom: 15,
        paddingTop: 15,
        position: 'relative',
    },
    blueSideTwitterIcon: {
        top: '-30vh',
        right: '-50vh',
        fontSize: '160vh',
        maxWidth: 'none',
        position: 'absolute',
        color: 'rgba(29,161,242,1.00)',
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
        color: 'rgba(29,161,242,1.00)',
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20,
    },
    loginSideP: {
        marginBottom: 15
    },
    loginSideButtonRegister: {
        marginBottom: 15,
    },  
}));

function SignIn() {

    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideTwitterIcon}/>
                <ul>
                    <li><Typography>Читайте о том, что вам интересно.</Typography></li>
                    <li><Typography>Узнайте, о чем говорят в мире.</Typography></li>
                    <li><Typography>Присоединяйтесь к общению.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide} color="primary">
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginSideTwitterIcon}/>
                    <Typography variant="h4" gutterBottom className={classes.loginSideTitle}>Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography className={classes.loginSideP}><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <Button className={classes.loginSideButtonRegister} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button variant="outlined" color="primary" fullWidth>Войти</Button>
                </div>
            </section>
        </div>
    )
}

export default SignIn
