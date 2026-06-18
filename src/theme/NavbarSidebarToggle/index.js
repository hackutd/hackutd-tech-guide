import React, { useEffect, useState } from 'react';

/**
 * Custom navbar item that toggles the docs sidebar on desktop.
 *
 * It reuses Docusaurus' built-in collapse/expand behavior by programmatically
 * clicking the native (visually hidden) collapse/expand buttons, so the smooth
 * animation and main-content reflow are preserved.
 */
export default function NavbarSidebarToggle(props) {
    const { mobile } = props;
    const [hasSidebar, setHasSidebar] = useState(false);

    useEffect(() => {
        if (typeof document === 'undefined') {
            return undefined;
        }

        const check = () => {
            setHasSidebar(
                Boolean(document.querySelector("[class*='docSidebarContainer']")),
            );
        };

        check();
        const observer = new MutationObserver(check);
        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);

    if (mobile || !hasSidebar) {
        return null;
    }

    const handleClick = () => {
        const toggle =
            document.querySelector("[class*='expandButton']") ||
            document.querySelector("[class*='collapseSidebarButton']");
        if (toggle) {
            toggle.click();
        }
    };

    return (
        <button
            type="button"
            className="navbar-sidebar-toggle clean-btn"
            aria-label="Toggle sidebar"
            title="Toggle sidebar"
            onClick={handleClick}
        >
            <svg width="24" height="24" viewBox="0 0 30 30" aria-hidden="true">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M4 7h22M4 15h22M4 23h22"
                />
            </svg>
        </button>
    );
}
