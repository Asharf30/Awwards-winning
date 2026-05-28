import { useRef, useEffect, useState } from "react";
import Button from "./Button";
import { TiLocationArrowOutline } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const NAVITEMS = ["Prologue", "Vault", "Nexus", "About", "Contact"];

const Navbar = () => {
  const ContainerRefNav = useRef(null);
  const lastScrollYRef = useRef(0);
  const { y: currentScrollY } = useWindowScroll();
  const [isnavVisible, setIsnavVisible] = useState(true);

  useEffect(() => {
    let shouldBeVisible = true;

    if (currentScrollY === 0) {
      ContainerRefNav.current?.classList.remove("floating-nav");
      shouldBeVisible = true;
    } else if (currentScrollY > lastScrollYRef.current) {
      shouldBeVisible = false;
      ContainerRefNav.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollYRef.current) {
      shouldBeVisible = true;
      ContainerRefNav.current?.classList.add("floating-nav");
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsnavVisible(shouldBeVisible);
      });
    });

    lastScrollYRef.current = currentScrollY;
  }, [currentScrollY, lastScrollYRef]);

  useEffect(() => {
    if (ContainerRefNav.current) {
      gsap.to(ContainerRefNav.current, {
        y: isnavVisible ? 0 : -100,
        opacity: isnavVisible ? 1 : 0,
        duration: 0.2,
      });
    }
  }, [isnavVisible]);
  return (
    <div
      className="fixed inset-x-0 top-4  z-50 h-1 border-none transition-all duration-700 
      sm:inset-x-6
      "
    >
      <header
        className=" absolute top-1/2 w-full translate-y-1/2"
        ref={ContainerRefNav}
      >
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7 ">
            <img
              src="/img/logo.webp"
              alt="Logo"
              width={56}
              height={56}
              className="w-14 -mt-2 sm:mt-0 cursor-pointer transition-all duration-300 ease-in-out
             hover:scale-110 hover:drop-shadow-[0_0_12px_#edff66]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <Button
              title="Products"
              id="product-button"
              rightIcon={<TiLocationArrowOutline />}
              containerClass="bg-[#00D4FF] hover:!bg-[#00A8CC] active:!bg-yellow-300 focus-visible:!bg-yellow-300 md:flex items-center hidden gap-1 justify-center"
            />
          </div>
          <div className="flex h-full items-center ">
            <div className="hidden md:block">
              {NAVITEMS.map((item) => (
                <a
                  key={item}
                  className="nav-hover-btn "
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
