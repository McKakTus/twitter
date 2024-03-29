import React, { useState } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        backgroundColor: 'rgb(122, 204, 254)',
        flex: '0 0 50%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15,
        paddingTop: 15,
        position: 'relative',
    },
    blueSideListInfo: {
        maxWidth: 380,
        zIndex: 1,
        padding: 0,
        margin: 0,
        listStyle: 'none',
        '& h6': {
            color: '#fff',
            fontWeight: 700,
            fontSize: 19,
            display: 'flex',
            alignItems: 'center',

            '& svg': {
                width: 29,
                height: 29,
                fill: '#fff',
                marginRight: 15,
            }
        },
    },
    blueSideListInfoLi: {
        marginBottom: 40,
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
    loginSideField: {
        marginBottom: 15,
    },
    loginSideButton: {
        marginTop: 10,
        marginBottom: 20,
    },
}));

function SignIn() {

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideTwitterIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoLi}>
                        <Typography variant="h6">
                            <svg viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                            Читайте о том, что вам интересно.
                        </Typography>
                        </li>
                    <li className={classes.blueSideListInfoLi}>
                        <Typography variant="h6">
                            <svg viewBox="0 0 24 24"><g><path d="M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z"></path></g></svg>
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="h6">
                            <svg viewBox="0 0 24 24"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                            Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide} color="primary">
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginSideTwitterIcon}/>
                    <Typography variant="h4" gutterBottom className={classes.loginSideTitle}>Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography className={classes.loginSideP}><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <Button className={classes.loginSideButtonRegister} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpen} variant="outlined" color="primary" fullWidth>Войти</Button>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>
                            <IconButton onClick={handleClose}>
                                <CloseIcon style={{fontSize: 26}}/>
                            </IconButton>
                            Войти в Твиттер
                        </DialogTitle>
                        <DialogContent>
                            <FormControl component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>
                                    <TextField className={classes.loginSideField} autoFocus InputLabelProps={{
                                        shrink: true,
                                    }} variant="filled" id="email" label="E-mail" type="email" fullWidth />
                                    <TextField className={classes.loginSideField} InputLabelProps={{
                                        shrink: true,
                                    }} variant="filled" id="password" label="Пароль" type="password" fullWidth />
                                    <Button className={classes.loginSideButton} onClick={handleClose} color="primary" variant="contained" fullWidth >
                                        Войти
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>
        </div>
    )
}

export default SignIn
