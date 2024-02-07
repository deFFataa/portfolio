import { CustomerReviews, Hero, PopularProducts, SuperQuality, SpecialOffer, Subscribe, Footer } from "./sections";
import Nav from './components/Nav';
const App = () => (
  <main className="relative">
    <Nav />
    <section className="padding bg-zinc-900"
    id="home"
    >
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      Services
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;