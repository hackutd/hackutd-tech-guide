import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function WorkshopsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <rect x="3" y="4.5" width="18" height="16" rx="2" />
            <path d="M3 9.5h18" />
            <path d="M8 2.5v4M16 2.5v4" />
            <path d="M8.5 14.5l2 2 4-4" />
        </svg>
    );
}

function GuidedProjectIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 2c2.5 2 4 5.5 4 9 0 2-1 4-4 6-3-2-4-4-4-6 0-3.5 1.5-7 4-9z" />
            <circle cx="12" cy="9" r="1.5" />
            <path d="M8.5 15c-1.5 0-3 1-3.5 3.5 2.5-.5 3.5-1 3.5-3.5z" />
            <path d="M15.5 15c1.5 0 3 1 3.5 3.5-2.5-.5-3.5-1-3.5-3.5z" />
        </svg>
    );
}

function ResourcesIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M3 5.5c2-1.2 5-1.2 7 .3v13c-2-1.5-5-1.5-7-.3z" />
            <path d="M21 5.5c-2-1.2-5-1.2-7 .3v13c2-1.5 5-1.5 7-.3z" />
        </svg>
    );
}

type ListItem = {
    label: string;
    href: string;
    date?: string;
};

type FeatureItem = {
    title: string;
    subtitle?: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    accent: 'gold' | 'coral' | 'magenta';
    href: string;
    description?: JSX.Element;
    list?: ListItem[];
    viewAllLabel?: string;
    viewAllHref?: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Workshops',
        subtitle: 'ECSS 2.203',
        Icon: WorkshopsIcon,
        accent: 'gold',
        href: '/resources',
        list: [
            { label: 'Hackathon 101', href: '/Workshops/Hackathon%20101/hackathon-101', date: '9/15' },
            { label: 'DevDay (Full Stack Project)', href: '/Workshops/Webapp-Setup/installation-guide', date: '9/19' },
            { label: 'Agents and Tools', href: '/Workshops/Agents%20and%20Tools', date: '9/22' },
            { label: 'RAG', href: '/Workshops/RAG', date: '9/29' },
            { label: 'Vibe Coding', href: '/Workshops/Vibe%20Coding', date: '10/6' },
            { label: 'MongoDB', href: '/Workshops/MongoDB', date: '10/13' },
            { label: 'Pitching', href: '/Workshops/Pitching', date: '10/20' },
        ],
        viewAllLabel: 'View all workshops',
        viewAllHref: '/resources',
    },
    {
        title: 'Guided Project',
        Icon: GuidedProjectIcon,
        accent: 'coral',
        href: '/guided-project/',
        description: (
            <>
                Start your first full-stack project with a guided tutorial.
                We'll walk you from your first component all the way to a
                deployed, working app.
            </>
        ),
    },
    {
        title: 'Additional Resources',
        Icon: ResourcesIcon,
        accent: 'magenta',
        href: '/additional-resources/',
        list: [
            { label: 'Frontend', href: '/additional-resources/frontend' },
            { label: 'Backend', href: '/additional-resources/backend' },
            { label: 'Cloud Deployment', href: '/additional-resources/cloud-deployment' },
            { label: 'Version Control', href: '/additional-resources/version-control' },
        ],
        viewAllLabel: 'View all resources',
        viewAllHref: '/additional-resources/',
    },
];

const accentClass = {
    gold: styles.accentGold,
    coral: styles.accentCoral,
    magenta: styles.accentMagenta,
};

function Feature({
    title,
    subtitle,
    Icon,
    accent,
    href,
    description,
    list,
    viewAllLabel,
    viewAllHref,
}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className={styles.featureCard}>
                <div className={clsx(styles.featureIconWrap, accentClass[accent])}>
                    <Icon className={styles.featureIcon} />
                </div>
                <h3 className={styles.featureTitle}>
                    <Link to={href}>{title}</Link>
                </h3>
                {subtitle && <p className={styles.featureSubtitle}>{subtitle}</p>}
                {description && <p className={styles.featureDescription}>{description}</p>}
                {list && (
                    <ul className={styles.featureList}>
                        {list.map((item) => (
                            <li key={item.label}>
                                <Link to={item.href}>
                                    <span>{item.label}</span>
                                    {item.date && (
                                        <span className={styles.featureListDate}>
                                            {item.date}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                {viewAllHref && (
                    <Link className={styles.viewAllLink} to={viewAllHref}>
                        {viewAllLabel} →
                    </Link>
                )}
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
