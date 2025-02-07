import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="font-corps bg-secondary flex justify-around p-4 shadow-inner md:p-8 md:text-lg">
      <div className="flex flex-col gap-3">
        <p className="flex items-center gap-2">
          <IoLocationSharp />
          54 rue Jean Louis David
        </p>
        <p className="flex items-center gap-2">
          <FaPhone />
          07.18.83.33.69
        </p>
        <p className="flex items-center gap-2">
          <FaWhatsapp />
          WhatsApp
        </p>
        <p className="flex items-center gap-2">
          <IoIosMail />
          contact@bhairverly.fr
        </p>
      </div>
      <div className="flex flex-col gap-4 self-end">
        <h3 className="font-logo text-3xl md:text-3xl">Bhair&apos;verly</h3>
        <div className="flex items-center justify-center gap-4">
          <FaFacebook />
          <FaPinterest />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
