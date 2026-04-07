import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CanonicalUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        // Set canonical URL dynamically based on current route
        const canonicalUrl = `${window.location.origin}${location.pathname}`;

        let canonicalLink: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");

        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }

        canonicalLink.setAttribute('href', canonicalUrl);
    }, [location]);

    return null; // This component doesn't render anything
};

export default CanonicalUpdater;
