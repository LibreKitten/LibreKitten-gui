import React from 'react';
import PropTypes from 'prop-types';
import render from '../app-target';
import styles from './not_found.css';

import {APP_NAME} from '../../lib/brand';
import {applyGuiColors} from '../../lib/themes/guiHelpers';
import {detectTheme} from '../../lib/themes/themePersistance';

import librekitty from './sad-librekitty.svg'

/* eslint-disable react/jsx-no-literals */

applyGuiColors(detectTheme());
document.documentElement.lang = 'en';

const Credits = () => (
    <main className={styles.main}>
        <header className={styles.headerContainer}>
            <h1 className={styles.headerText}>
                Oh no! The Librekitty coudn't find what you're looking for.
            </h1>
        </header>
        <section>
            <p>
                He looked everywhere, but alas, he coudn't find it.
            </p>
            <img
                src={librekitty}
                alt='A sad Librekitty (cat).'
            />
            <h3 className={styles.headerText}>404</h3>
        </section>
    </main>
);

render(<Credits />);
