import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import { Button } from '.';

type Props = {
  name: string;
  link?: string;
  onClick?: () => void;
};

const RulesButton: NextPage<Props> = ({ name, link, onClick }: Props) =>
  link ? (
    <Link href={link}>
      <Button>{name}</Button>
    </Link>
  ) : (
    <Button onClick={onClick}>{name}</Button>
  );

export default RulesButton;
