function Footer() {
  return (
    <div className="bg-blue-900 text-white text-center p-6 mt-10">
      © {new Date().getFullYear()} Civieways Construction Company. All Rights Reserved. | Powered by{" "}
      <a
        href="https://sentracord.co.ke"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 hover:text-yellow-300 font-semibold underline"
      >
        Sentra Cord
      </a>
    </div>
  );
}

export default Footer;