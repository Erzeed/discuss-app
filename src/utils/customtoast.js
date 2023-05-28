import Swal from 'sweetalert2';

const customToast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 800,
  width: 400,
  timerProgressBar: true,
});

const succes = (title) => {
  customToast.fire({
    title: `${title}`,
    icon: 'success',
  });
};
const error = (title) => {
  customToast.fire({
    title: `${title}`,
    icon: 'error',
    timer: 2000,
  });
};

const loading = (data, message) => {
  customToast
    .fire({
      title: 'Loading',
      didOpen: () => {
        Swal.showLoading();
      },
    })
    .then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        if (data === true) {
          error(message);
        } else {
          succes(message);
        }
      }
    });
};
export default loading;
