function Footer() {
  return (
    <footer className="w-full flex flex-col lg:flex-row justify-between items-center p-10 text-sm text-center space-y-2 lg:space-y-0">
      <article className="flex flex-col lg:flex-row items-center lg:space-x-3 space-y-2 lg:space-y-0">
        <i className="bx bx-health text-2xl animate-spin"></i>
        <p>© Oli Harris 2023</p>
      </article>
      <article className="flex justify-center items-center space-x-3">
        <p className="hover:text-custom-gray cursor-pointer">Twitter</p>
        <p className="hover:text-custom-gray cursor-pointer">Linkedin</p>
        <p className="hover:text-custom-gray cursor-pointer">Mail</p>
      </article>
    </footer>
  );
}

export default Footer;
