import logoFooter from "../assets/logo-footer.png";
import bgshadow from "../assets/bg-shadow.png";

const Footer = () => {
  return (
    <div className=" font-sora bg-[#06091A] pt-60 relative ">
      <div className="container mx-auto lg:w-[70%] absolute -top-1/4 left-1/2 -translate-x-1/2 sm:border-2 p-4 rounded-xl">
        <div
          className=" bg-white text-center flex flex-col items-center justify-center gap-5 py-24 rounded-xl bg-cover"
          style={{
            backgroundImage: `url(${bgshadow}) `,
          }}
        >
          <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text-gray-400 font-semibold text-sm">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-2">
            <input
              className="border-2 border-gray-300  p-2 rounded-md"
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn bg-gradient-to-r from-[#d476a8] to-[#fbd06c]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <img src={logoFooter} alt="" className="mx-auto" />
      <footer className="container mx-auto footer  text-white p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-gradient-to-r from-[#d476a8] to-[#fbd06c] join-item font-bold">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
