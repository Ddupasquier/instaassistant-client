// import { BsPenFill } from 'react-icons/bs';
import {
  FaUserAlt,
  FaUserFriends,
  FaQuestionCircle,
  FaMoneyBill,
} from 'react-icons/fa';
// import { AiFillHome } from 'react-icons/ai';
// import { FiTrendingUp } from 'react-icons/fi';
import { IoApps } from 'react-icons/io5';
import { RiCompassDiscoverFill } from 'react-icons/ri';

import { Ctrl, Tri, Tsk, Psc } from 'assets';

export const upperMenuItems = [
  // {
  //   name: 'Home',
  //   to: '/',
  //   icon: AiFillHome,
  // },
  {
    name: 'Apps',
    icon: IoApps,
    items: [
      { name: 'Ctrl', src: Ctrl, to: '/CTRL' },
      { name: 'Tsk', src: Tsk, to: '/TSK' },
      { name: 'Tri', src: Tri, to: '/' },
      { name: 'Psc', src: Psc, to: '/' },
    ],
  },
  {
    name: 'Accounts',
    to: '/accounts',
    icon: FaUserFriends,
    // items: ['account1', 'account2', 'account3'],
  },
  {
    name: 'Discover',
    to: '',
    icon: RiCompassDiscoverFill,
    items: ["Blog (Coming soon)", "Trending (Coming soon)"],
  },
  // {
  //   name: 'test',
  //   to: '/test',
  //   icon: FaQuestionCircle,
  // }
  // {
  //   name: 'Blog (coming soon)',
  //   to: '',
  //   icon: BsPenFill,
  // },
  // {
  //   name: 'Trending (coming soon)',
  //   to: '',
  //   icon: FiTrendingUp,
  // },
];

export const lowerMenuItems = [
  {
    name: 'Account Info',
    to: '/profile',
    icon: FaUserAlt,
  },
  {
    name: 'Billing',
    to: '/billing',
    icon: FaMoneyBill,
  },
  {
    name: 'Support',
    to: '/FAQ',
    icon: FaQuestionCircle,
  },
];
