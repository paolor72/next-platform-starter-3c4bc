import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Menu di Navigazione */}
            <nav className="w-full bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center h-16">
                        <div className="flex space-x-8">
                            <Link href="/" className="text-purple-900 hover:text-purple-700 transition-colors">
                                Home
                            </Link>
                            <Link href="#chi-sono" className="text-purple-900 hover:text-purple-700 transition-colors">
                                Chi Sono
                            </Link>
                            <Link href="#ordina" className="text-purple-900 hover:text-purple-700 transition-colors">
                                Ordini
                            </Link>
                            <Link href="#contatti" className="text-purple-900 hover:text-purple-700 transition-colors">
                                Contatti
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-lavender-100">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-4">
                        Natura Essenziale
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-800 mb-8">
                        Oli essenziali artigianali di alta qualità da Meldola
                    </p>
                    <Link 
                        href="#ordina" 
                        className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors text-sm"
                    >
                        Scopri i nostri prodotti
                    </Link>
                </div>
            </section>

            {/* Chi Sono Section */}
            <section id="chi-sono" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
                        Chi Sono
                    </h2>
                    <div className="max-w-3xl mx-auto prose prose-lg">
                        <p className="text-gray-700 mb-6">
                            Mi chiamo Claudia Romanini e, a fine del 2023, ho avviato una piccolissima azienda agricola in Romagna.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Il terreno è di proprietà, è di circa 1 ettaro, si trova a Meldola (FC) ed è stato da me impiantato a
                            <span className="text-purple-600"> 🪻LAVANDULA ANGUSTIFOLIA varietà MATHERONNE.🪻</span>
                        </p>
                        <p className="text-gray-700 mb-6">
                            Essendo appena agli inizi, non ho ancora molto da dire, non ho una storia dietro le spalle.
                            Però ho gli occhi puntati sul futuro: la mia piccolissima azienda non è certificata ma i miei intenti rispecchiano 
                            <span className="text-green-600"> 🐝🐞 l&apos;AGRICOLTURA RIGENERATIVA</span> e sto studiando e applicando i metodi biodinamici 
                            <span className="text-green-600"> 🍃🦔</span>
                        </p>
                        <p className="text-gray-700 mb-6">
                            E&apos; un esempio di imprenditoria femminile, ed utilizza solo energie rinnovabili: attrezzi elettrici e a trazione animale.
                        </p>
                        <p className="text-gray-700 mb-6">
                            <span className="text-purple-600">🐎</span> La mia collega più importante è Athena, una giumenta di razza Murgese, che si occupa dello sfalcio naturale dell&apos;erba, della produzione di letame di prima qualità per nutrire il suolo e del traino di piccoli attrezzi agricoli rubati alla ruggine e restituiti al lavoro.
                        </p>
                        <p className="text-gray-700">
                            Natura Essenziale significa seguire la propria natura, mantenendo rispetto verso la Grande Natura; significa distillare l&apos;olio essenziale di lavanda, ma anche vivere dell&apos;essenziale, senza fronzoli e saper cogliere l&apos;Essenza della Vita. Per questo mi piace definire il mio progetto come agricoltura meditativa.<span className="text-purple-600">🧘🏻‍♀️</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Come Ordinare Section */}
            <section id="ordina" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
                        I Nostri Oli Essenziali
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Prodotto 1 - Lavanda */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative h-64">
                                <Image
                                    src="/images/lavanda.jpg"
                                    alt="Olio essenziale di lavanda"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-purple-900 mb-2">
                                    Olio Essenziale di Lavanda
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Estratto artigianalmente dalle nostre piante di lavanda
                                </p>
                                <Link 
                                    href="/negozio/lavanda"
                                    className="bg-purple-600 text-white px-4 py-1.5 rounded-full hover:bg-purple-700 transition-colors inline-block text-sm"
                                >
                                    Acquista
                                </Link>
                            </div>
                        </div>

                        {/* Prodotto 2 - Alloro */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative h-64">
                                <Image
                                    src="/images/alloro.jpg"
                                    alt="Olio essenziale di alloro"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-purple-900 mb-2">
                                    Olio Essenziale di Alloro
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Estratto dalle nostre piante di alloro
                                </p>
                                <Link 
                                    href="/negozio/alloro"
                                    className="bg-purple-600 text-white px-4 py-1.5 rounded-full hover:bg-purple-700 transition-colors inline-block text-sm"
                                >
                                    Acquista
                                </Link>
                            </div>
                        </div>

                        {/* Prodotto 3 - Rosmarino */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative h-64">
                                <Image
                                    src="/images/rosmarino.jpg"
                                    alt="Olio essenziale di rosmarino"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-purple-900 mb-2">
                                    Olio Essenziale di Rosmarino
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Estratto dalle nostre piante di rosmarino
                                </p>
                                <Link 
                                    href="/negozio/rosmarino"
                                    className="bg-purple-600 text-white px-4 py-1.5 rounded-full hover:bg-purple-700 transition-colors inline-block text-sm"
                                >
                                    Acquista
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-xl text-gray-700 mb-8">
                            Scrivici su WhatsApp o Email per ricevere i tuoi oli essenziali
                        </p>
                        <div className="grid grid-cols-1 gap-8">
                            {/* WhatsApp */}
                            <div className="bg-purple-50 rounded-lg p-6 shadow-lg">
                                <div className="text-4xl mb-4">
                                    📱
                                </div>
                                <h3 className="text-2xl font-semibold text-purple-900 mb-3">
                                    WhatsApp
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Scrivici su WhatsApp per ricevere informazioni sui prezzi e effettuare il tuo ordine
                                </p>
                                <a 
                                    href="https://wa.me/TUONUMERO" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors inline-block w-full text-center"
                                >
                                    Contattaci su WhatsApp
                                </a>
                            </div>

                            {/* Email */}
                            <div className="bg-purple-50 rounded-lg p-6 shadow-lg">
                                <div className="text-4xl mb-4">
                                    ✉️
                                </div>
                                <h3 className="text-2xl font-semibold text-purple-900 mb-3">
                                    Email
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Inviaci una email per ricevere il nostro catalogo completo e i prezzi
                                </p>
                                <a 
                                    href="mailto:TUOEMAIL@example.com"
                                    className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors inline-block w-full text-center"
                                >
                                    Scrivici una Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form di Contatto */}
            <section id="contatti" className="py-20 bg-purple-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
                        Contattaci
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-purple-900">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-purple-900">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-purple-900">
                                    Messaggio
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
                            >
                                Invia Messaggio
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
} 