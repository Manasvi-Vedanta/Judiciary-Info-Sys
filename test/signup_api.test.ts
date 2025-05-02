// test("Signup API Route Returns Success for Valid Input", async () => {
//   const response = await fetch("http://localhost:3000/api/auth/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       formData: {
//         email: "fieqwuhuiw@example.com",
//         password: "securePassword123",
//         name: "Test User",
//         role: "REGISTRAR"
//       },
//     }),
//   });

//   // const data = await response;

//   // console.log(data)

//   expect(response.status).toBe(200);
//   // expect(data).toHaveProperty("status", 200);
// });

test("Signup API Route Returns Error for Existing User", async () => {
  // First create the user
  await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData: {
        email: "existing@example.com",
        password: "password123",
        name: "Existing User",
        role: "user"
      },
    }),
  });

  // Try to create same user again
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData: {
        email: "existing@example.com",
        password: "password123",
        name: "Existing User",
        role: "user"
      },
    }),
  });

  expect(response.status).toBe(500);
});

test("Signup API Route Returns Error for Missing Email", async () => {
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData: {
        email: "",
        password: "password123",
        name: "Test User",
        role: "user"
      },
    }),
  });

  expect(response.status).toBe(500);
});

test("Signup API Route Returns Error for Missing Password", async () => {
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData: {
        email: "test@example.com",
        password: "",
        name: "Test User",
        role: "user"
      },
    }),
  });

  expect(response.status).toBe(500);
});

test("Signup API Route Returns Error for Missing Name", async () => {
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData: {
        email: "test@example.com",
        password: "password123",
        name: "",
        role: "user"
      },
    }),
  });

  expect(response.status).toBe(500);
});

test("Signup API Role Handling", async () => {
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData: {
        email: "roleTest@example.com",
        password: "password123",
        name: "Role Test",
        role: "admin"
      },
    }),
  });

  expect(response.status).toBe(500);
});