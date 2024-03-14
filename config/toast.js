import { toast } from 'react-toastify';
export const successToast = (text) => toast.success(text, {
    position: "bottom-center",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    // transition: Bounce,
    });

export const errorToast = (text) => toast.error(text, {
    position: "bottom-center",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    // transition: Bounce,
    });