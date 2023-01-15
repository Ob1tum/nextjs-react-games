import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import { HomeBtn } from './index';

type Props = {
  name: string;
  link: string;
};

const HomeButton: NextPage<Props> = ({ name, link }: Props) => (
  <Link href={link}>
    <HomeBtn>{name}</HomeBtn>
  </Link>
);

export default HomeButton;
