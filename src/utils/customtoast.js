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
  });
};
const loading = (title, data) => {
  customToast
    .fire({
      title: `${title}`,
      didOpen: () => {
        Swal.showLoading();
      },
    })
    .then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        if (data.error === false) {
          succes(data.message);
        } else {
          error(data.error);
        }
      }
    });
};

export default loading;
