import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import Logo from "./Logo";
import { FaThreads } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 md:py-12
            border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]
          `}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
            © 2024 CAM VIEW SOLUTIONS LLP
            </div>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Cam View Solutions LLP</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  onClick={() => navigate("/")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  onClick={() => navigate("/service")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  onClick={() => navigate("/solar")}
                >
                  Why Solar?
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  onClick={() => navigate("/projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  onClick={() => navigate("/about")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <a
                  className="flex items-center justify-center text-2xl pr-4 text-blue-500 transition hover:text-blue-600"
                  href="https://wa.link/vthvfv"
                  aria-label="Whatsapp"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-2xl pr-4 text-blue-500 transition hover:text-blue-600"
                  href="https://www.instagram.com/camviewsolutions_/"
                  aria-label="Medium"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-2xl pr-4 text-blue-500 transition hover:text-blue-600"
                  href="https://www.threads.net/@camviewsolutions_"
                  aria-label="Github"
                >
                  <FaThreads />
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-2xl pr-4 text-blue-500 transition hover:text-blue-600"
                  href="https://www.youtube.com/@camviewsolutions"
                  aria-label="Github"
                >
                  <FiYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
