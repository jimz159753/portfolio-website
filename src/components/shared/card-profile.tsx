export const CardProfile = () => (
  <div className="card-border rounded-lg p-10 flex flex-col gap-4">
    <p className="text-color-white-50 text-2xl font-light">
      Hello, I'm Luis Jimenez
      <br />
      Software Engineer Based in México.
    </p>
    <div className="flex flex-col gap-4">
      <div className="social-media-icons">
        <p>social media icons</p>
      </div>
      <div className="w-full border border-gray-500 " />
      <button className="bg-transparent border border-white-50 shadow-lg hover:shadow-white-50/20 transition-all duration-300 w-fit p-2 text-white-50 px-4 py-2 rounded-lg cursor-pointer">
        Connect with me
      </button>
    </div>
  </div>
);
