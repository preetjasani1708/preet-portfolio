export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {`Hi, I'm a passionate web developer with experience in building
          interactive, responsive websites. I love solving challenges and
          bringing ideas to life.`}
        </p>
        <p className="text-lg text-gray-600 mb-6">
          {`Explore my portfolio and feel free to reach out if you're interested
          in working together.`}
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
