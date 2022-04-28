import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import styles from "./Promotion.module.css"


const numberFormater = new Intl.NumberFormat('de-DE');

const iceCreamData = [
  {
    name: "Chocolate Orange Hazelnut",
    img: "/image/home/home-menu-demo/ice-cream/square-16.jpg",
    description: "Vani - Hạt dẻ",
    subDescription: " -- Viên kem vani truyền thống hòa lẫn với hạt dẻ ngọt bùi, được tô điểm bởi những dải caramel mềm mại",
    price: 29000
  },
  {
    name: "Pralines 'n Cream",
    img: "/image/home/home-menu-demo/ice-cream/square-17.jpg",
    description: "Vani - Hạt dẻ",
    subDescription: " -- Viên kem vani truyền thống hòa lẫn với hạt dẻ ngọt bùi, được tô điểm bởi những dải caramel mềm mại",
    price: 50000
  },
]

const promotionAvatar = [
  {
    img: "/image/home/promotion/square-12.jpg",
  },
  {
    img: "/image/home/promotion/square-13.jpg",
  },
  {
    img: "/image/home/promotion/square-14.jpg",
  },
  {
    img: "/image/home/promotion/square-15.jpg",
  }
]

const style = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "/image/home/promotion/promotion-background.jpg";



const PromotionDemoList = ({ data }) => {
  return (
    <Container maxWidth="lg">
      <p>Tín đồ kem Pluto sẽ không thể bỏ qua:</p>
      <h2>KHUYẾN MẠI HÀNG TUẦN</h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map(i => (
              <div>
                <ListItem alignItems="flex-start" className={styles.list_item}>
                  <Grid item xs={9}>
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
                  </Grid>
                  <Grid item xs={3}>
                    <ListItemText
                      primary={`${numberFormater.format(i.price)}đ`}
                    />
                  </Grid>

                </ListItem>
                <Divider variant="inset" component="li" />
              </div>

            ))}
          </List>
        </Grid>
        <Grid item xs={6}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map(i => (
              <div>
                <ListItem alignItems="flex-start" className={styles.list_item}>
                  <Grid item xs={9}>
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
                  </Grid>
                  <Grid item xs={3}>
                    <ListItemText
                      primary={`${numberFormater.format(i.price)}đ`}
                    />
                  </Grid>
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>

            ))}
          </List>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems={"center"}>
        {promotionAvatar.map(i => (
          <Grid item xs={3}>
            <ListItemAvatar>
              <Avatar src={i.img} />
            </ListItemAvatar>
          </Grid>

        ))}

      </Grid>

    </Container>
  );
}


const Promotion = () => (
  <div style={style}>
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 800 }}>
        <div style={insideStyles}><PromotionDemoList data={iceCreamData} /></div>
      </div>
    </Parallax>
  </div>
);

export default Promotion
