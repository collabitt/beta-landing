// mui imports
// import { Box, Typography } from "@mui/material";
import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import B1 from '../assets/images/b1.svg';
import B2 from '../assets/images/b2.svg';
import B3 from '../assets/images/b3.svg';
import B4 from '../assets/images/b4.svg';
import B5 from '../assets/images/b5.svg';
import B6 from '../assets/images/b6.svg';
import CollabitLogo from '../assets/images/collabitLogo.svg';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// project imports
import useStyles from "./styles";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const HomePage = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const deskTopView = useMediaQuery((theme) => theme.breakpoints.up('md'), { noSsr: true });

  const handleInstaBtnClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box className={classes.bannerBaground}>
        {
            deskTopView &&
            <>
                <img src={B1} alt="b1" className={classes.b1} />
                <img src={B2} alt="b2" className={classes.b2} />
                <img src={B3} alt="b3" className={classes.b3} />
                <img src={B4} alt="b4" className={classes.b4} />
                <img src={B5} alt="b5" className={classes.b5} />
                <img src={B6} alt="b6" className={classes.b6} />
            </>
        }
        <img src={CollabitLogo} alt="logo" width="800px" height="200px" class={classes.logo}/>
        <Box className={classes.contentBox}>
            <Typography
            variant="h1"
            color="white"
            sx={{
                fontSize: "70px",
                whiteSpace: "pre-line",
                textAlign: "center",
            }}
            >
            COMING SOON !
            </Typography>
            <Typography
            variant="subtitle1"
            color="white"
            sx={{
                whiteSpace: "pre-line",
                textAlign: "center",
                fontSize: "16px"
            }}
            >
            Collabit is  a powerful  platform that simplifies influencer discovery. {"\n"}We help small businesses find the perfect match by offering customizable filters and advanced{"\n"}analytics,ensuring you collaborate with legitimate, high-impact influencers.
            </Typography>
            <button class={classes.instaBtn} onClick={() => handleInstaBtnClick('https://instagram.com/collaabit?igshid=MzRlODBiNWFlZA==')}>
                <InstagramIcon /> Follow us on Instagram
            </button>
            <Box mt={4} sx={{display: "flex", justifyCOntent: "center", width: "40%", flexDirection: "column", alignItems: "center", gap: "16px"}}>
                <TextField
                    id="filters"
                    label="Enter your Email Address"
                    size="medium"
                    className={classes.textBox}
                />
                <button class={classes.submitBtn} onClick={handleClick}>
                    Submit
                </button>
            </Box>
            {/* <Box mt={4}>
                <iframe width="450" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </Box> */}
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Email Submitted Successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HomePage;
