import { useState } from "react";
import { IoIosClose } from "react-icons/io";

import ToastContext from "./ToastService";

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const open = (component, timeout = 5000) => {
    const id = Date.now();
    setToasts((toasts) => [...toasts, { id, component }]);

    setTimeout(() => close(id), timeout);
  };

  const close = (id) =>
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));

  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div className="absolute bottom-4 right-4 space-y-2">
        {toasts.map(({ id, component }) => (
          <div className="relative" key={id}>
            <button
              className="neomorph-shadow-sm absolute right-2 top-2 rounded-lg bg-gray-200/20 text-gray-800/60 hover:bg-gray-200/40"
              onClick={() => close(id)}
            >
              <IoIosClose size={32} />
            </button>
            {component}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
export default ToastProvider;
