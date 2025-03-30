function BannerHome() {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <div className="text-center space-y-7">
        <div className="w-full max-w-[700px] mx-auto">
          <h1 className="text-4xl lg:text-6xl">
            A brand and product designer working with clients globally
          </h1>
        </div>
        <div className="hidden mx-auto md:flex justify-center items-center space-x-2">
          <p>Expertise</p>
          <p className="px-2.5 py-1 bg-custom-cream rounded-full">Branding</p>
          <p className="px-2.5 py-1 bg-custom-cream rounded-full">Product</p>
          <p className="px-2.5 py-1 bg-custom-cream rounded-full">
            Design Systems
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
