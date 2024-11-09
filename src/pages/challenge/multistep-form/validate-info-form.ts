export function validateInfoForm(form: {
  name: string | null;
  email: string | null;
  phone: string | null;
}) {
  let status = true;
  const formError: {
    name: string | null;
    email: string | null;
    phone: string | null;
  } = {
    name: null,
    email: null,
    phone: null,
  };

  if (!form.name?.trim()) {
    formError.name = "Name is required";
    status = false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!form.email?.trim()) {
    formError.email = "Email is required";
    status = false;
  } else if (!emailPattern.test(form.email)) {
    formError.email = "Invalid email";
    status = false;
  }

  const phonePattern = /^\d+$/;
  if (!form.phone?.trim()) {
    formError.phone = "Phone number is required";
    status = false;
  } else if (!phonePattern.test(form.phone)) {
    formError.phone = "Only numbers allowed";
    status = false;
  } else if (form.phone.length < 10) {
    formError.phone = "Minimum 10 digits";
    status = false;
  } else if (form.phone.length > 15) {
    formError.phone = "Maximum 15 digits";
    status = false;
  }

  return {
    success: status,
    error: status ? null : formError,
  };
}
