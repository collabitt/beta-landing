import { makeStyles } from "@mui/styles";
import BannerImage from "../assets/images/homeBanner.svg";

const useStyles = makeStyles(() => ({
  bannerBaground: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${BannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  contentBox: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "26px"
  },
  searchBtn: {
    backgroundColor: "#2B3D41 !important",
    padding: '24px',
    height: 40,
    textTransform: 'none'
  },
  textBox: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  instaBtn: {
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "375px",
    border: "none",
    transitionDuration: "0.4s",
    cursor: "pointer",
    padding: "16px 32px",
    backgroundColor: "#000000 !important",
    color: '#FFFFFF !important',
    fontWeight: "600 !important",
    borderRadius: "16px !important",
    textTransform: "initial !important",
  },
  submitBtn: {
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    border: "none",
    width: "30%",
    transitionDuration: "0.4s",
    cursor: "pointer",
    padding: "16px 32px",
    backgroundColor: "#000000 !important",
    color: '#FFFFFF !important',
    fontWeight: "600 !important",
    borderRadius: "8px !important",
    textTransform: "initial !important",
  },
  b1: {
    position: "absolute",
    top: "20%",
    left: "8%",
    zIndex: 99
  },
  b2: {
    position: "absolute",
    top: "15%",
    left: "4%"
  },
  b3: {
    position: "absolute",
    top: "60%",
    left: "0%"
  },
  b4: {
    position: "absolute",
    top: "20%",
    right: "8%",
    zIndex: 99
  },
  b5: {
    position: "absolute",
    top: "15%",
    right: "4%"
  },
  b6: {
    position: "absolute",
    top: "60%",
    right: "0%"
  },
  logo: {
    position: "absolute",
    left: "-170px",
    top: "10px"
  }
}));

export default useStyles;
