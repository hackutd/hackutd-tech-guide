import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function ExpandableImage({ src, alt, caption }) {
    const { siteConfig } = useDocusaurusContext();
    const base = siteConfig.baseUrl.replace(/\/$/, '');
    const resolve = (p) => (p.startsWith('/') ? `${base}${p}` : `${base}/${p}`);
    const resolvedSrc = resolve(src);
    const displayCaption = caption || alt;

    const [lightboxOpen, setLightboxOpen] = useState(false);

    useEffect(() => {
        if (!lightboxOpen) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') setLightboxOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [lightboxOpen]);

    return (
        <>
            <button
                type="button"
                className={styles.actionCard}
                onClick={() => setLightboxOpen(true)}
            >
                <img src={resolvedSrc} alt={alt} loading="lazy" />
                {displayCaption && <div className={styles.actionCap}>{displayCaption}</div>}
            </button>

            {lightboxOpen && (
                <div
                    className={styles.lightbox}
                    role="presentation"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button
                        type="button"
                        className={styles.lightboxClose}
                        aria-label="Close"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxOpen(false);
                        }}
                    >
                        &times;
                    </button>
                    <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
                        <img src={resolvedSrc} alt={alt} />
                        {displayCaption && <div className={styles.lightboxCap}>{displayCaption}</div>}
                    </div>
                </div>
            )}
        </>
    );
}
