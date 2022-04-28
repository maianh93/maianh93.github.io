import * as React from 'react';
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import styles from "./HomeMenuDemoList.module.css"

const numberFormater = new Intl.NumberFormat('de-DE');



const HomeMenuDemoList = ({data}) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <p>Hand made ice creams</p>
                    <h2>ICE CREAMS</h2>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {data.map(i => (
                            <div>
                                <ListItem alignItems="flex-start" className={styles.list_item}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={i.img} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={i.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {i.description}
                                                </Typography>
                                                {i.subDescription}
                                            </React.Fragment>
                                        }
                                    />
                                    <ListItemText
                                        primary={`${numberFormater.format(i.price)}đ`}
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </div>

                        ))}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <img src="/image/home/home-menu-demo/ice-cream/block-4.jpg" alt="ice-cream-home-menu" />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomeMenuDemoList
