import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className='footer'>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#ddd"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Logo</Box>
              <Box href="/" color="inherit">
                <p>25 Hồ Đắc Di - Đống Đa - Hà Nội</p>
              </Box>
              <Box href="/" color="inherit">
                <p>0888 202 082</p>
              </Box>
              <Box href="/" color="inherit">
                <p>plutoicecreamandcupcake.com.vn</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>THÔNG TIN CƠ BẢN</Box>
              <Box href="/" color="inherit">
                <p>Giới thiệu</p>
              </Box>
              <Box href="/" color="inherit">
                <p>Tin tức</p>
              </Box>
              <Box href="/" color="inherit">
                <p>Nhượng quyền</p>
              </Box>
              <Box href="/" color="inherit">
                <p>Điều khoản sử dụng</p>
              </Box>
              <Box href="/" color="inherit">
                <p>Chính sách bảo mật</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>TẢI ỨNG DỤNG</Box>
              <Box href="/" color="inherit">
                <div className={`${styles.footer__download} cursor`}>
                  <img className={styles.footer__downloadimage} src="/image/footer/googleplay.png"
                    alt="google-play" />
                </div>

              </Box>
              <Box href="/" color="inherit">
                <div className={`${styles.footer__download} cursor`}>
                  <img className={styles.footer__downloadimage} src="/image/footer/appstore.png"
                    alt="app-store" />
                </div>

              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;