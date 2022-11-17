import React from 'react';

import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { IoLogoYoutube } from 'react-icons/io';
import { IoLogoTiktok } from 'react-icons/io5';

export const platformIcon = (platform) => {
  switch (platform) {
    case 'INSTAGRAM':
      return <FiInstagram size="20" />;
    case 'YOUTUBE':
      return <IoLogoYoutube size="20" />;
    case 'TIKTOK':
      return <IoLogoTiktok size="20" />;
    case 'TWITTER':
      return <FiTwitter size="20" />;
    default:
      return <FiInstagram size="20" />;
  }
};
