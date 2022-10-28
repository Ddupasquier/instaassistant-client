import React from 'react';

import { FiInstagram } from 'react-icons/fi';
import { IoLogoYoutube } from 'react-icons/io';
import { IoLogoTiktok } from 'react-icons/io5';

export const platformIcon = (platform) => {
  if (platform === 'INSTAGRAM') {
    return <FiInstagram size="20" />;
  } else if (platform === 'YOUTUBE') {
    return <IoLogoYoutube size="20" />;
  } else if (platform === 'TIKTOK') {
    return <IoLogoTiktok size="20" />;
  } else {
    return <FiInstagram size="20" />;
  }
};
