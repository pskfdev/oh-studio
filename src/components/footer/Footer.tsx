function Footer() {
  return (
    <footer className="w-full flex flex-col lg:flex-row justify-between items-center p-10 text-sm text-center space-y-2 lg:space-y-0">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-3 space-y-2 lg:space-y-0">
        <p>Logo</p>
        <p>© Oli Harris 2023</p>
      </div>
      <div className="flex justify-center items-center space-x-3">
        <p>Twitter</p>
        <p>Linkedin</p>
        <p>Mail</p>
      </div>
    </footer>
  );
}

export default Footer;
