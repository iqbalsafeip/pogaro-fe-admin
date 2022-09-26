export const toFormData = (data) => {
  let fd = new FormData();
  Object.keys(data).map((e) => {
    fd.append(e, data[e]);
  });

  return fd;
};
