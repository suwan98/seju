import Github from "../common/icon/Github";
import Gmail from "../common/icon/Gmail";

function Footer() {
  return (
    <>
      <footer className="mx-auto flex w-full max-w-2xl items-center px-4">
        <div className="mt-5 flex w-full flex-col items-center justify-center gap-4 pt-6 pb-3">
          <p>© {new Date().getFullYear()} 고수완 All Rights Reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/suwan98"
              target="_blank"
              rel="noopener noreferrer">
              <Github />
            </a>
            <a href="mailto:imissyou5466@gamil.com" rel="noopener noreferrer">
              <Gmail />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
