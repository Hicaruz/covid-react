
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';

import TwitterIcon from '@material-ui/icons/Twitter';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > a': {
      margin: theme.spacing(1),
    },
  },
}));

function Icon(props) {
  return (
    <Tooltip title={props.name} placement="top-start">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <SvgIcon {...props}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      </a>
    </Tooltip>

  );
}

export default function SocialMedia() {
  const classes = useStyles();
  const socials = [{
    name: "Github",
    component: GitHubIcon,
    url: "https://github.com/Hicaruz"
  }, {
    name: "Twitter",
    component: TwitterIcon,
    url: "https://twitter.com/_Hicarus"
  }, {
    name: "Ko-Fi",
    component: LocalCafeIcon,
    url: ""
  }, {
    name: "LinkedIn",
    component: LinkedInIcon,
    url: "https://www.linkedin.com/in/hicarus/"
  }]

  return (
    <div className={classes.root}>
      {
        socials.map((social, key) => (
          <Icon key={key} {...social} />

        ))
      }

    </div>
  );
}