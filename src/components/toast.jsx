import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const mensaje = () => {
    toast.danger('Soy un toast', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

function Toast (props) {
    return (
        <div>
            <button onClick={mensaje}>
                Toast
            </button>

            <ToastContainer />
        </div>
    )
}
export default Toast;
