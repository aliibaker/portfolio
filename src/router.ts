type Route = {
    path: string;
    view: () => string;
}

/** My simple custom router. */
export class Router {
    private routes: Route[];

    constructor(routes: Route[]) {
        this.routes = routes;
    }


    loadRoute(url: string) {
        const route = this.routes.find(route => route.path === url);

        if(route) {
            document.getElementById('root')!.innerHTML = route.view();
        } else {
            document.getElementById('root')!.innerHTML = "<h1>what you're looking for doesn't exist</h1>";
        }
    }

    init() {
        window.addEventListener('popstate', () => {
            this.loadRoute(window.location.pathname);
        });

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
                history.pushState(null, '', href);
                this.loadRoute(href);
            }
        });

        this.loadRoute(window.location.pathname);
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