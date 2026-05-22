import React from "react";

const Button = ({ id, title, leftIcon, containerClass }) => {
  return (
    <div>
      <button
        id={id}
        className={`${containerClass} group relative z-10 w-fit cursor-pointer
         rounded-full overflow-hidden px-7 py-3 text-black
         transition-all duration-300 ease-out
         hover:-translate-y-0.5 hover:shadow-[0_12px_25px_-15px_rgba(0,0,0,0.45)]
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30
        `}
      >
        {leftIcon}

        <span className="relative inline-flex overflow-hidden font-general  text-xs uppercase">
          <div>{title}</div>
        </span>
      </button>
    </div>
  );
};

export default Button;
