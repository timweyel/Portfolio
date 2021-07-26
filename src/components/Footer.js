import React from 'react';
import { AppBar, Box, Toolbar, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#BFC0C0",
    position: "fixed",
    left: "0",
    bottom: "0",
    boxShadow: "none",
    display: "flex-inline"
  }
});

function Footer() {
  const classes = useStyles();

  return (
      <AppBar className={classes.footer} position="static"  >
        <Box className="footerLinks" maxWidth="md">
          <Toolbar>
            <Typography >
              <div className="">
                <ul className="flex-row">
                  {/* <li className='pl-10 pr-10 text-center footerUl'><a href="https://www.linkedin.com/in/timweyel/" target="_blank" rel="noreferrer">Linkedin</a></li>
                  <li className="pl-10 pr-10 text-center"><a href="https://github.com/timweyel" target="_blank" rel="noreferrer">github</a></li> */}
                  {/* <li className="pl-10 pr-10 text-center"><a href="https://stackexchange.com/users/19728056/tweyel" target="_blank" rel="noreferrer">stackOverflow</a></li> */}
                </ul>
              </div>
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
  )
}

export default Footer;