import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    href: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Frontend',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                If you want to build a good-looking and functional web
                application, you're going to need a frontend site! Click here to
                learn how to build a clean-looking website.
            </>
        ),
        href: '/conceptual-directory/frontend',
    },
    {
        title: 'Backend',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Along with a frontend, your app would need a backend as well.
                There are a multitude of languages and frameworks that you can
                use to build a backend. Click here to explore your options!
            </>
        ),
        href: '/conceptual-directory/backend',
    },
    {
        title: 'Cloud Deployment',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Once you finish you application, you'll want to put it online
                for anyone to access it! Click here to see how to deploy your
                app using popular cloud platforms such as AWS, Docker, or
                Vercel.
            </>
        ),
        href: '/conceptual-directory/cloud-deployment',
    },
];

function Feature({ title, Svg, description, href }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>
                    <Link to={href}>{title}</Link>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
