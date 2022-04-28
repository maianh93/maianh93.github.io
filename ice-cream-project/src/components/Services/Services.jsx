import * as React from 'react';
import Grid from '@mui/material/Grid';

import styles from './Services.module.css'

const services = [
  {
    img: "/image/home/services/wifi.svg",
    title: "Wifi miễn phí"
  },
  {
    img: "/image/home/services/ice-cream.png",
    title: "Nhiều lựa chọn hơn"
  },
  {
    img: "/image/home/services/cupcake.png",
    title: "Cupcake"
  },
  {
    img: "/image/home/services/birthday-cake.png",
    title: "Tổ chức tiệc sinh nhật"
  },
]

const Services = () => {
  return (<div>
    <Grid container spacing={2}>
      {services.map((s) => (
             <Grid item xs={3}>
             <div className={styles.service_item}>
               <div className={styles.service_image}>
                  <img src={s.img} alt="" />
               </div>
               <p className={styles.service_title}>{s.title}</p>
             </div>
           </Grid>
      ))}
    </Grid>
  </div>
  ) 
}
export default Services