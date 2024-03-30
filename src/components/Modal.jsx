import { LuX } from "react-icons/lu";

const Modal = ({ open, onClose, children }) => {
  return (
    // Backdrop
    <section
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-2 backdrop-blur-md md:px-10 ${open ? "visible bg-black25" : "invisible"}`}
    >
      {/* Modal */}
      <div
        className={`container relative h-full overflow-hidden rounded-xl bg-white  transition-all duration-500 ease-in-out ${open ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="neomorph-shadow-sm absolute right-2 top-2 z-40 rounded bg-primary p-2 "
          onClick={onClose}
        >
          <LuX />
        </button>
        {children}
      </div>
    </section>
  );
};
export default Modal;
