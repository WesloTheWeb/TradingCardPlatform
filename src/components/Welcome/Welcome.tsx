import React from "react";
import classes from './Welcome.module.scss';

const { welcomeBlurbContainer, container } = classes;

const Welcome = () => {

    const welcomeTexts = [
        {
            header: 'Dive into Digital Trading Cards',
            text: `
            Discover a vast universe of virtual cards. Whether you're a seasoned collector or a newbie, there's a card waiting just for you.
            `
        },
        {
            header: 'Collect, Trade, Celebrate',
            text: `Build your ultimate deck from our diverse collection. Trade with enthusiasts globally and elevate your collection.`
        },
        {
            header: 'Seamless Trading Experience',
            text: `Connect with collectors worldwide. Secure, fast, and user-friendly, our platform makes trading a breeze.`
        }
    ];

    return (
        <section className={container}>
            {welcomeTexts.map((blurb) => {
                return (
                    <div key={blurb.header} className={welcomeBlurbContainer}>
                        <h3>{blurb.header}</h3>
                        <p>{blurb.text}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default Welcome;