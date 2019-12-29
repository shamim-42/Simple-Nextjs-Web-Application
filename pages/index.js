import Link from 'next/link';
import Header from '../comps/Header';

const Index = () => (
    <div>
        <Header />
        <p>Hello Next.js </p>
        <Link href="/about" title="About Page">
            <a>About Page</a>
        </Link>
    </div>
);

export default Index;