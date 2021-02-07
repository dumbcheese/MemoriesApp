import React, { useState, useEffect } from 'react';
import {AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core';
import useStyles from './styles';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import memories from '../../images/memories.png'
import {useHistory, useLocation} from 'react-router-dom';

function Navbar(){
const classes = useStyles();
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const dispatch = useDispatch();
const history = useHistory();
const location = useLocation();

useEffect(()=>{
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
}, [location])

const logout = () =>{
    dispatch({type: 'LOGOUT'});
    
    history.push('/');
    setUser(null);
}

return(
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
             <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">Memories</Typography>
             <img className={classes.image} src={memories} alt="memories" height="60" />
        </div>

        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.givenName.charAt(0)}</Avatar>
                <Typography className={classes.userName}  variant="h6">{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log Out</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>


    </AppBar>
);
}

export default Navbar;