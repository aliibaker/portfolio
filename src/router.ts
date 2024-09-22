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
            document.getElementById('root')!.innerHTML = "<h1>what you're looking for doesn't exist";
        }
    }

    init() {
        window.addEventListener('popstate', () => {
            this.loadRoute(window.location.pathname);
        });

        document.body.addEventListener('click', (e: MouseEvent) => {
            if (e.target instanceof HTMLAnchorElement) {
                e.preventDefault();
                const href = e.target.getAttribute('href');

                if(href !== null) {
                    history.pushState(null, '', href);
                    this.loadRoute(href);
                }
            }
        });

        this.loadRoute(window.location.pathname);
    }
}