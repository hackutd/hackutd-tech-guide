import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import confetti from 'canvas-confetti';
import styles from './styles.module.css';

const STORAGE_KEY = 'hackutd-devpost-preflight-v1';
const DEVPOST_URL = 'https://hackutd-2025.devpost.com/';

const CHECKLIST_ITEMS = [
    { id: 'public-repo', label: 'Public GitHub repo linked on Devpost (private = risk).' },
    { id: 'sponsor-cap', label: 'Max 2 sponsor / company tracks — no exceptions.' },
    { id: 'invites', label: 'All teammates invited on the project (prize eligibility).' },
    { id: 'video', label: 'Demo video is public (YouTube, etc.) — aim for ≤2 min.' },
    { id: 'final-submit', label: 'Finished the final Submit flow — not just a saved draft.' },
];

function burstConfetti() {
    confetti({
        particleCount: 45,
        spread: 55,
        startVelocity: 28,
        origin: { y: 0.72 },
        colors: ['#6366f1', '#a855f7', '#f59e0b', '#22c55e'],
        disableForReducedMotion: true,
    });
}

function ChecklistPanel({ checked, onToggle }) {
    const total = CHECKLIST_ITEMS.length;
    const done = CHECKLIST_ITEMS.filter((i) => checked[i.id]).length;
    const pct = Math.round((done / total) * 100);

    return (
        <div>
            <h3>Final Pre-flight Check</h3>
            <div className={styles.progress}>
                Progress: {done}/{total}
            </div>
            <div className={styles.progressBar} aria-hidden>
                <div className={styles.progressFill} style={{ width: `${pct}%` }} />
            </div>
            {CHECKLIST_ITEMS.map((item) => (
                <label key={item.id} className={styles.checkItem}>
                    <input
                        type="checkbox"
                        checked={!!checked[item.id]}
                        onChange={(e) => onToggle(item.id, e.target.checked)}
                    />
                    <span>{item.label}</span>
                </label>
            ))}
            <p className={styles.checkHint}>
                Checked items are saved on this device so you can pick up where you left off.
            </p>
        </div>
    );
}

export default function DevpostGuide() {
    const [tab, setTab] = useState('saturday');
    const [checked, setChecked] = useState({});
    const [lightbox, setLightbox] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) setChecked(JSON.parse(raw));
        } catch {
            /* ignore */
        }
    }, []);

    const onToggle = useCallback((id, isChecked) => {
        setChecked((prev) => {
            const was = !!prev[id];
            const next = { ...prev, [id]: isChecked };
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            } catch {
                /* ignore */
            }
            if (isChecked && !was) {
                queueMicrotask(() => burstConfetti());
            }
            return next;
        });
    }, []);

    const goSaturday = () => {
        setTab('saturday');
        document.getElementById('dg-workflow')?.scrollIntoView({ behavior: 'smooth' });
    };

    const goSunday = () => {
        setTab('sunday');
        document.getElementById('dg-workflow')?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (!lightbox) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') setLightbox(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [lightbox]);

    const saturdayGallery = useMemo(
        () => [
            { src: '/img/hackerpacks/join-hackathon.png', caption: 'Join Hackathon' },
            { src: '/img/hackerpacks/devpost-sign-up.png', caption: 'Sign up or log in' },
            { src: '/img/hackerpacks/registration-form.png', caption: 'Complete registration' },
            { src: '/img/hackerpacks/create-project.png', caption: 'Create Project' },
            { src: '/img/hackerpacks/manage-team.png', caption: 'Manage Team — invite everyone' },
            { src: '/img/hackerpacks/project-overview.png', caption: 'Project Overview (registration OK)' },
        ],
        [],
    );

    const sundayGallery = useMemo(
        () => [
            { src: '/img/hackerpacks/my-projects.png', caption: 'My Projects → Edit' },
            { src: '/img/hackerpacks/project-overview-full.png', caption: 'Overview + thumbnail' },
            { src: '/img/hackerpacks/project-details.png', caption: 'Project Details' },
            { src: '/img/hackerpacks/details-2.png', caption: 'More details + images' },
            { src: '/img/hackerpacks/additional-information.png', caption: 'Repo, tracks, schools' },
        ],
        [],
    );

    return (
        <div className={styles.root}>
            {lightbox && (
                <div
                    className={styles.lightbox}
                    role="presentation"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        type="button"
                        className={styles.lightboxClose}
                        aria-label="Close"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightbox(null);
                        }}
                    >
                        ×
                    </button>
                    <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
                        <img src={lightbox.src} alt={lightbox.caption} />
                        <div className={styles.lightboxCap}>{lightbox.caption}</div>
                    </div>
                </div>
            )}

            <div className={styles.hero}>
                <div className={styles.heroGlow} aria-hidden />
                <span className={styles.heroBadge}>Submission &amp; Devpost</span>
                <h1>HackUTD Devpost Guide</h1>
                <p className={styles.heroSub}>
                    Two deadlines, one platform. Register your team early, then polish your submission
                    before judging — without getting disqualified on a technicality.
                </p>
                <div className={styles.heroActions}>
                    <a
                        href={DEVPOST_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.btnPrimary}
                        onClick={goSaturday}
                    >
                        Register Team
                    </a>
                    <a
                        href={DEVPOST_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.btnSecondary}
                        onClick={goSunday}
                    >
                        Submit Project
                    </a>
                </div>
            </div>

            <div className={styles.layout}>
                <div className={styles.mainCol}>
                    <div className={styles.tldr}>
                        <p className={styles.tldrTitle}>TL;DR — read these three</p>
                        <ul>
                            <li>
                                <strong>Public repo only</strong> — link your code; private repos can
                                disqualify you.
                            </li>
                            <li>
                                <strong>Max 2 sponsor tracks</strong> — you can still compete for
                                general / MLH prizes.
                            </li>
                            <li>
                                <strong>Invite every teammate</strong> on Devpost — one submission per
                                team, everyone must be on it for prizes.
                            </li>
                        </ul>
                    </div>

                    <div className={styles.tabBar} role="tablist" aria-label="Devpost workflow">
                        <button
                            type="button"
                            role="tab"
                            aria-selected={tab === 'saturday'}
                            className={`${styles.tab} ${tab === 'saturday' ? styles.tabActive : ''}`}
                            onClick={() => setTab('saturday')}
                        >
                            Saturday: Team Registration (2 mins)
                            <span className={styles.tabMeta}>Do this first</span>
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={tab === 'sunday'}
                            className={`${styles.tab} ${tab === 'sunday' ? styles.tabActive : ''}`}
                            onClick={() => setTab('sunday')}
                        >
                            Sunday: Final Submission (10 mins)
                            <span className={styles.tabMeta}>Before judging</span>
                        </button>
                    </div>

                    <section id="dg-workflow" className={styles.workflow}>
                        {tab === 'saturday' && (
                            <>
                                <span className={styles.deadline}>
                                    Deadline: Saturday 11:00 PM — team registered on Devpost
                                </span>
                                <h2 className={styles.sectionTitle}>The workflow</h2>
                                <ol className={styles.stepper}>
                                    <li className={styles.step}>
                                        <span className={styles.stepDot} aria-hidden />
                                        <h3 className={styles.stepHead}>Join the hackathon</h3>
                                        <p className={styles.stepBody}>
                                            Open the{' '}
                                            <a href={DEVPOST_URL} target="_blank" rel="noreferrer">
                                                HackUTD Devpost page
                                            </a>{' '}
                                            and create an account or log in. Complete your profile when
                                            prompted.
                                        </p>
                                        <GalleryGrid items={saturdayGallery.slice(0, 3)} onOpen={setLightbox} />
                                    </li>
                                    <li className={styles.step}>
                                        <span className={styles.stepDot} aria-hidden />
                                        <h3 className={styles.stepHead}>Create a project (blank is OK)</h3>
                                        <p className={styles.stepBody}>
                                            Go to <strong>My Projects → Create Project</strong>. For
                                            registration-only, use your team name or “Team Registration”
                                            and placeholder text where needed — you will edit before the
                                            final deadline.
                                        </p>
                                        <GalleryGrid items={saturdayGallery.slice(3)} onOpen={setLightbox} />
                                    </li>
                                    <li className={styles.step}>
                                        <span className={styles.stepDot} aria-hidden />
                                        <h3 className={styles.stepHead}>Invite your whole team</h3>
                                        <p className={styles.stepBody}>
                                            Open <strong>Manage Team</strong> and invite every teammate
                                            using the email tied to their Devpost account. Missing invites
                                            = prize problems.
                                        </p>
                                    </li>
                                    <li className={styles.step}>
                                        <span className={styles.stepDot} aria-hidden />
                                        <h3 className={styles.stepHead}>Submit through the final screen</h3>
                                        <p className={styles.stepBody}>
                                            Choose sponsor tracks you are <em>considering</em> (max{' '}
                                            <strong>two</strong> company/sponsor tracks). Use placeholder
                                            video/repo if you must — replace them before Sunday.{' '}
                                            <strong>You must complete the final Submit step</strong> or
                                            you are not registered.
                                        </p>
                                    </li>
                                </ol>
                            </>
                        )}

                        {tab === 'sunday' && (
                            <>
                                <span className={styles.deadline}>
                                    Deadline: Sunday 12:00 PM (noon) — final project on Devpost
                                </span>
                                <h2 className={styles.sectionTitle}>The workflow</h2>
                                <ol className={styles.stepper}>
                                    <li className={styles.step}>
                                        <span className={styles.stepDot} aria-hidden />
                                        <h3 className={styles.stepHead}>Open your project for editing</h3>
                                        <p className={styles.stepBody}>
                                            From <strong>My Projects</strong>, choose your team submission
                                            and click <strong>Edit Project</strong>. You can save and edit
                                            until the hack ends.
                                        </p>
                                        <GalleryGrid items={sundayGallery.slice(0, 1)} onOpen={setLightbox} />
                                    </li>
                                    <li className={styles.step}>
                                        <span className={styles.stepDot} aria-hidden />
                                        <h3 className={styles.stepHead}>Project Overview</h3>
                                        <p className={styles.stepBody}>
                                            Add a strong title, elevator pitch, thumbnail (recommended),
                                            technologies, and links. This is what judges skim first.
                                        </p>
                                        <GalleryGrid items={sundayGallery.slice(1, 2)} onOpen={setLightbox} />
                                    </li>
                                    <li className={styles.step}>
                                        <span className={styles.stepDot} aria-hidden />
                                        <h3 className={styles.stepHead}>Project Details (Markdown)</h3>
                                        <p className={styles.stepBody}>
                                            Describe what you built, how to run it, and what is demo-ready
                                            vs. prototype. Drop in screenshots or GIFs.
                                        </p>
                                        <GalleryGrid items={sundayGallery.slice(2, 4)} onOpen={setLightbox} />
                                    </li>
                                    <li className={styles.step}>
                                        <span className={styles.stepDot} aria-hidden />
                                        <h3 className={styles.stepHead}>Additional information</h3>
                                        <p className={styles.stepBody}>
                                            Confirm sponsor challenges (≤2 company tracks), add your{' '}
                                            <strong>public</strong> repository, demo video link, and each
                                            teammate&apos;s school for eligibility.
                                        </p>
                                        <GalleryGrid items={sundayGallery.slice(4)} onOpen={setLightbox} />
                                    </li>
                                    <li className={styles.step}>
                                        <span className={styles.stepDot} aria-hidden />
                                        <h3 className={styles.stepHead}>Agree &amp; submit — then breathe</h3>
                                        <p className={styles.stepBody}>
                                            Accept terms and hit submit. Do a quick pass with the Final
                                            Pre-flight Check → you&apos;re covered.
                                        </p>
                                    </li>
                                </ol>
                            </>
                        )}
                    </section>

                    <section className={styles.mediaSection} aria-labelledby="dg-media-heading">
                        <h2 id="dg-media-heading" className={styles.sectionTitle}>
                            Media requirements (what judges expect)
                        </h2>
                        <div className={styles.mediaGrid}>
                            <div className={styles.mediaCard}>
                                <h4>Demo video</h4>
                                <p>
                                    Public link (YouTube, Drive, etc.). Keep it tight — about{' '}
                                    <strong>2 minutes</strong> is ideal.
                                </p>
                                <span className={styles.mediaTag}>Required link</span>
                            </div>
                            <div className={styles.mediaCard}>
                                <h4>Thumbnails &amp; screenshots</h4>
                                <p>
                                    Project thumbnail + in-page images or GIFs that show what actually
                                    works.
                                </p>
                                <span className={styles.mediaTag}>Highly recommended</span>
                            </div>
                            <div className={styles.mediaCard}>
                                <h4>GitHub URL</h4>
                                <p>
                                    Must be a <strong>public</strong> repository with your hack code.
                                    Private repos are a disqualification risk.
                                </p>
                                <span className={styles.mediaTag}>Public only</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.safety} aria-labelledby="dg-safety-heading">
                        <h3 id="dg-safety-heading">Don&apos;t forget (safety net)</h3>
                        <ul>
                            <li>
                                <strong>Never leave the repo private</strong> — judges need to verify your
                                work.
                            </li>
                            <li>
                                <strong>School emails / profiles</strong> — match organizer requirements for
                                eligibility; fix mismatches before the deadline.
                            </li>
                            <li>
                                <strong>One submission per team</strong> — coordinate so nobody spins up a
                                duplicate project.
                            </li>
                        </ul>
                    </section>

                    <section className={styles.pdq} aria-labelledby="dg-pdq-heading">
                        <h3 id="dg-pdq-heading">Prevent disqualification</h3>
                        <ul>
                            <li>Submit early; you can keep editing until the posted cutoff on Devpost.</li>
                            <li>
                                If an invite fails, verify your teammate&apos;s Devpost email and resend.
                            </li>
                            <li>Try another browser or clear cache if Devpost glitches — then ping staff.</li>
                        </ul>
                    </section>

                    <section className={styles.faqSection} aria-labelledby="dg-faq-heading">
                        <h3 id="dg-faq-heading">FAQ — open only if you need it</h3>

                        <details className={styles.faq}>
                            <summary>When do I have to register my team?</summary>
                            <div className={styles.faqBody}>
                                By <strong>11:00 PM Saturday</strong> on Devpost. Pick the companies/tracks
                                you care about; you can adjust before the final submission deadline.
                            </div>
                        </details>

                        <details className={styles.faq}>
                            <summary>Can I only submit my project once?</summary>
                            <div className={styles.faqBody}>
                                No — edit as many times as you want before{' '}
                                <strong>Sunday 12:00 PM (noon)</strong>. Earlier drafts = less panic.
                            </div>
                        </details>

                        <details className={styles.faq}>
                            <summary>Does everyone need their own Devpost submission?</summary>
                            <div className={styles.faqBody}>
                                No. One submission per team — but <strong>invite every teammate</strong> so
                                they stay prize-eligible.
                            </div>
                        </details>

                        <details className={styles.faq}>
                            <summary>More than one project?</summary>
                            <div className={styles.faqBody}>
                                Only one project per team is allowed at HackUTD.
                            </div>
                        </details>

                        <details className={styles.faq}>
                            <summary>How many sponsor tracks?</summary>
                            <div className={styles.faqBody}>
                                Up to <strong>two</strong> sponsor/company challenges. General and MLH
                                tracks are separate — read the prize guide for details.
                            </div>
                        </details>

                        <p className={styles.helpFooter}>
                            Stuck? Flag a HackUTD officer or post in official event channels — we&apos;d
                            rather fix Devpost drama at 3 PM than 3 AM.
                        </p>
                    </section>
                </div>

                <aside className={styles.checklistAside}>
                    <div className={styles.checklistCard}>
                        <ChecklistPanel checked={checked} onToggle={onToggle} />
                    </div>
                </aside>
            </div>

            <button
                type="button"
                className={styles.mobileCheckToggle}
                onClick={() => setMobileOpen(true)}
            >
                Pre-flight{' '}
                {CHECKLIST_ITEMS.filter((i) => checked[i.id]).length}/{CHECKLIST_ITEMS.length}
            </button>

            {mobileOpen && (
                <>
                    <button
                        type="button"
                        className={styles.mobileBackdrop}
                        aria-label="Close checklist"
                        onClick={() => setMobileOpen(false)}
                    />
                    <div className={styles.mobilePanel}>
                        <button
                            type="button"
                            className={styles.mobileClose}
                            onClick={() => setMobileOpen(false)}
                        >
                            Close checklist
                        </button>
                        <ChecklistPanel checked={checked} onToggle={onToggle} />
                    </div>
                </>
            )}
        </div>
    );
}

function GalleryGrid({ items, onOpen }) {
    const { siteConfig } = useDocusaurusContext();
    const base = siteConfig.baseUrl.replace(/\/$/, '');
    const resolve = (p) => (p.startsWith('/') ? `${base}${p}` : `${base}/${p}`);

    return (
        <div className={styles.cards}>
            {items.map((item) => (
                <button
                    key={item.src}
                    type="button"
                    className={styles.actionCard}
                    onClick={() => onOpen({ src: resolve(item.src), caption: item.caption })}
                >
                    <img src={resolve(item.src)} alt="" loading="lazy" />
                    <div className={styles.actionCap}>{item.caption}</div>
                </button>
            ))}
        </div>
    );
}
