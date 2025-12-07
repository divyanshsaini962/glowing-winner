import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-grow">
                {children}
            </main>
            <SiteFooter />
        </div>
    );
}
