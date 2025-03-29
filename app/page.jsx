import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-100 via-lavender-100 to-purple-100">
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl w-full text-center shadow-xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
                        Natura Essenziale
                    </h1>
                    <div className="text-6xl mb-8">
                        🚧
                    </div>
                    <p className="text-xl md:text-2xl text-purple-800 mb-8">
                        Il nostro sito è in costruzione
                    </p>
                    <p className="text-gray-700 mb-8">
                        Stiamo preparando qualcosa di speciale per te. 
                        Nel frattempo, seguici sulla nostra pagina Facebook per rimanere aggiornato!
                    </p>
                    <div>
                        <a 
                            href="https://www.facebook.com/naturaessenziale.agrmeditativa/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Visita la nostra pagina Facebook
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
