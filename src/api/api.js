export const uploadImg = (formData) =>
  fetch(import.meta.env.VITE_PHOTOHOSTAPI, {
    method: "POST",
    body: formData,
  });
