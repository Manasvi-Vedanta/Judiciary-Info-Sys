test("Login API Route Returns Correct", async () => {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData: {
        email: "aryantomar03@gmail.com",
        password: "1234567890",
      },
    }),
  });

  const data = await response;

  // console.log(data);

  expect(data).toHaveProperty("status", 200);
});

test("Login API Route checks for invalid user", async () => {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData: {
        email: "invalid@gmail.com",
        password: "1234567890",
      },
    }),
  });

  const data = await response;

  // console.log(data);

  expect(data).toHaveProperty("status", 500);
});

test("Login API Route checks for missing input", async () => {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData: {
        email: "",
        password: "1234567890",
      },
    }),
  });

  const data = await response;

  // console.log(data);

  expect(data).toHaveProperty("status", 500);
});
