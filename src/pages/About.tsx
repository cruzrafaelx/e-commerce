import { Link } from "react-router-dom"
import { FaArrowRightLong, FaGem, FaLeaf, FaShirt, FaHeadphones, FaHandshake, FaMagnifyingGlass } from "react-icons/fa6"

//Brand values shown as cards
const values = [
  {
    icon: FaMagnifyingGlass,
    title: "Chosen with care",
    text: "Every product earns its place. We test, compare and only keep what we would buy ourselves.",
  },
  {
    icon: FaLeaf,
    title: "Made to last",
    text: "We prefer fewer, better things. Pieces that stay in your wardrobe and on your desk for years.",
  },
  {
    icon: FaHandshake,
    title: "Honest prices",
    text: "Clear pricing, no hidden fees and a flat delivery charge you see before checkout.",
  },
]

//Product categories we carry
const categories = [
  { icon: FaShirt, name: "Clothing", text: "Everyday staples for men and women." },
  { icon: FaGem, name: "Jewellery", text: "Simple pieces that go with everything." },
  { icon: FaHeadphones, name: "Electronics", text: "Reliable tech for work and play." },
]

const About = () => {
  return (
    <main className="flex-1 flex flex-col gap-10 w-full max-w-6xl mx-auto px-10 py-12 ">

      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">About Taljer</p>
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
          Everyday essentials, thoughtfully chosen.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Taljer is a small online store for people who would rather own a few good things
          than a lot of okay ones. We bring together clothing, jewellery and electronics
          that are simple, well made and fairly priced.
        </p>
      </section>

      {/* Story */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Our story</h2>
          <p className="text-gray-600">
            Taljer started with a simple frustration: shopping online meant scrolling through
            endless pages of products that all looked the same. We wanted one place with a
            short, trustworthy selection, where every item had a reason to be there.
          </p>
          <p className="text-gray-600">
            So we built it. Instead of selling everything, we curate. Instead of chasing trends,
            we look for pieces that work today and still feel right years from now.
          </p>
        </div>
        <div className="rounded-xl bg-blue-500 text-white p-10 flex flex-col gap-3">
          <p className="text-sm uppercase tracking-widest text-blue-100">Our promise</p>
          <p className="text-2xl font-semibold leading-snug">
            "Less searching, better choices. If it's on Taljer, it's worth your time."
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-center">What we stand for</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl bg-gray-100 p-6 flex flex-col gap-3">
              <Icon className="text-2xl text-blue-500" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-center">What you'll find</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, name, text }) => (
            <div key={name} className="rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center gap-2">
              <Icon className="text-3xl text-blue-500 mb-2" />
              <h3 className="font-semibold uppercase">{name}</h3>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="rounded-xl bg-gray-100 p-10 flex flex-col items-center text-center gap-5">
        <h2 className="text-2xl font-bold">Ready to take a look?</h2>
        <p className="text-gray-600 max-w-xl">Browse the full collection and find something you'll keep.</p>
        <Link
          to="/products"
          className="group flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 text-white font-semibold uppercase transition-colors hover:bg-blue-600"
        >
          Shop the collection
          <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

    </main>
  )
}

export default About
