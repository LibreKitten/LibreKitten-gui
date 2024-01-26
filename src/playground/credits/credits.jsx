import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import appTarget from '../app-target';
import styles from './credits.css';
import {getInitialDarkMode} from '../../lib/tw-theme-hoc.jsx';

import UserData from './users';

import librekitty from './purring-librekitty-with-love-heart.svg'

/* eslint-disable react/jsx-no-literals */

document.documentElement.lang = 'en';

const User = ({image, text, href}) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={styles.user}
    >
        <img
            className={styles.userImage}
            src={image}
            width="60"
            height="60"
        />
        <div className={styles.userInfo}>
            {text}
        </div>
    </a>
);
User.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string
};

const UserList = ({users}) => (
    <div className={styles.users}>
        {users.map((data, index) => (
            <User
                key={index}
                {...data}
            />
        ))}
    </div>
);
UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};

const Credits = () => (
    <main className={styles.main}>
        <header className={styles.headerContainer}>
            <h1 className={styles.headerText}>
                LibreKitten Credits
            </h1>
        </header>
        <section>
            <p>
                The LibreKitten project is made possible by TurboWarp and Scratch, thank you.
                Without them, coding would have been less accessible to people, and people would have had to learn confusing languages with syntax errors as their first language.
            </p>
        </section>
        <section>
            <h2>TurboWarp</h2>
            <p>
                LibreKitten is based on the work of the <a href="https://turbowarp.org/credits.html">TurboWarp contributors</a> but is not endorsed by TurboWarp in any way.
            </p>
            <p>
                <a href="https://github.com/sponsors/GarboMuffin">
                    Donate to support TurboWarp.
                </a>
            </p>
        </section>
        <section>
            <h2>Scratch</h2>
            <p>
                LibreKitten & TurboWarp is based on the work of the <a href="https://scratch.mit.edu/credits">Scratch contributors</a> but is not endorsed by Scratch in any way.
            </p>
            <p>
                <a href="https://scratch.mit.edu/donate">
                    Donate to support Scratch.
                </a>
            </p>
        </section>
        <section>
            <h2>Addons</h2>
            <UserList users={UserData.addonDevelopers} />
        </section>
        <section>
            <h2>Translators</h2>
            <p>
                Sadly, LibreKitten is only maintained by 1 person at the time of this being written, and that person only knows English.
            </p>
        </section>
        <section>
            <h2>Extra credits</h2>
            <p>
                <p>
                    Most importantly of all, you. Thank you for using LibreKitten, or at least giving it a try. We appreciate that.
                </p>
            </p>
        </section>
        <section>
        <p>
            <img
                src={librekitty}
                alt='The Librekitty (cat) purring with a love heart.'
            />
        </p>
        <i>The  Librekitty purring from your usage of LibreKitten.</i>
        <p>- The Librekitty.</p>
        <p>
                <i>
                    Individual contributors are listed in no particular order.
                    The order is randomized each visit.
                </i>
        </p>
        </section>
    </main>
);

document.body.setAttribute('theme', getInitialDarkMode() ? 'dark' : 'light');

ReactDOM.render((
    <Credits />
), appTarget);
