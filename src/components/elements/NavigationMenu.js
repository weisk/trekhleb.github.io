// @flow
import React from 'react';
import type { Node } from 'react';

import { routes } from '../../constants/routes';
import Link from '../shared/Link';

const NavigationMenu = (): Node => {
  const listClassName = 'mr-6';
  const linkClassName = 'uppercase text-xs';

  return (
    <nav>
      <ul className="flex flex-row">
        <li className={listClassName}>
          <Link className={linkClassName} to={routes.home}>Home</Link>
        </li>
        <li className={listClassName}>
          <Link className={linkClassName} to={routes.projects}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
