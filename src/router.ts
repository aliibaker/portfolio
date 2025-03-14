type Route = {
    path: string;
    view: () => string;
}

/** Hash-based router for GitHub Pages. */
export class Router {
    private routes: Route[];

    constructor(routes: Route[]) {
        this.routes = routes;
    }

    loadRoute(url: string) {
        // Remove leading slash if present for consistency
        if (url.startsWith('/')) {
            url = url.substring(1);
        }
        
        const route = this.routes.find(route => {
            // Also normalize route paths by removing leading slashes
            const routePath = route.path.startsWith('/') ? route.path.substring(1) : route.path;
            return routePath === url;
        });

        if(route) {
            document.getElementById('root')!.innerHTML = route.view();
        } else {
            document.getElementById('root')!.innerHTML = "<h1>what you're looking for doesn't exist</h1>";
        }
    }

    init() {
        // Handle hash changes
        window.addEventListener('hashchange', () => {
            // Get the path from the hash without the leading #
            const hash = window.location.hash.substring(1);
            this.loadRoute(hash);
        });

        // Handle click events on links
        document.body.addEventListener('click', (e: MouseEvent) => {
            if (e.target instanceof HTMLAnchorElement) {
                const href = e.target.getAttribute('href');
                
                if(href === null) return;
                
                // Check if the link is external
                if (this.isExternalLink(href)) {
                    // Let the browser handle external links normally
                    return;
                }
                
                // Handle internal links with router
                e.preventDefault();
                
                // Update the hash to trigger navigation
                // Remove leading slash for hash consistency
                const hashPath = href.startsWith('/') ? href.substring(1) : href;
                window.location.hash = hashPath;
                
                // No need to call loadRoute directly as the hashchange event will handle it
            }
        });

        // Initial route handling - use hash if present, otherwise default to home
        if (window.location.hash) {
            // Use the hash path without the # symbol
            this.loadRoute(window.location.hash.substring(1));
        } else {
            // Set initial hash to current path or default to home
            const initialPath = window.location.pathname === '/' ? '' : window.location.pathname;
            window.location.hash = initialPath;
        }
    }

    // Helper method to determine if a URL is external
    private isExternalLink(url: string): boolean {
        // If the URL starts with http:// or https:// or // and doesn't contain our hostname
        if ((url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) 
            && !url.includes(window.location.hostname)) {
            return true;
        }
        
        // If the URL is a mailto: link or other protocol
        if (url.includes(':') && !url.startsWith('tel:')) {
            return true;
        }
        
        return false;
    }
}