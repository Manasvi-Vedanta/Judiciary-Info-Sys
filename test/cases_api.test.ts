// cases_api.test.ts
test("Case Filing API Creates New Case Successfully - Returns 201", async () => {
    const currentYear = new Date().getFullYear();
    const nextNumber = Math.random() * 10000;
    const caseNumber = `CR-${currentYear}-${nextNumber
      .toString()
      .padStart(4, "0")}`;

    const nextHearingDate = new Date();
    nextHearingDate.setDate(nextHearingDate.getDate() + 30);

    const response = await fetch("http://localhost:3000/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Test Case",
        type: "Civil",
        caseNumber,
        filedDate: new Date(),
        crimeDate: new Date(),
        arrestDate: new Date(),
        updatedAt: new Date(),
        nextHearing: nextHearingDate, // Set to 30 days from now
        plaintiffName: "John Doe",
        defendantName: "Jane Smith",
        judge: "Judge Brown"
      }),
    });
  
    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data).toHaveProperty("caseNumber");
    expect(data.caseNumber).toMatch(/^CR-\d{4}-\d{4}$/);
    expect(data).toHaveProperty("nextHearing");
  });
  
  test("Case Filing API Rejects Missing Mandatory Fields - Returns 500", async () => {
    const testCases = [
      { description: "missing title", payload: {
        type: "Civil",
        filedDate: new Date().toISOString(),
        plaintiffName: "John Doe",
        defendantName: "Jane Smith",
        judge: "Judge Brown"
      }},
      { description: "missing type", payload: {
        title: "Test Case",
        filedDate: new Date().toISOString(),
        plaintiffName: "John Doe",
        defendantName: "Jane Smith",
        judge: "Judge Brown"
      }},
      { description: "missing filedDate", payload: {
        title: "Test Case",
        type: "Civil",
        plaintiffName: "John Doe",
        defendantName: "Jane Smith",
        judge: "Judge Brown"
      }},
      { description: "missing plaintiffName", payload: {
        title: "Test Case",
        type: "Civil",
        filedDate: new Date().toISOString(),
        defendantName: "Jane Smith",
        judge: "Judge Brown"
      }},
      { description: "missing defendantName", payload: {
        title: "Test Case",
        type: "Civil",
        filedDate: new Date().toISOString(),
        plaintiffName: "John Doe",
        judge: "Judge Brown"
      }},
      { description: "missing judge", payload: {
        title: "Test Case",
        type: "Civil",
        filedDate: new Date().toISOString(),
        plaintiffName: "John Doe",
        defendantName: "Jane Smith"
      }}
    ];
  
    for (const testCase of testCases) {
      const response = await fetch("http://localhost:3000/api/cases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testCase.payload),
      });
      expect(response.status).toBe(500);
    }
  });
  
  test("Case Filing API Accepts Optional Fields - Returns 201", async () => {
    const response = await fetch("http://localhost:3000/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Complete Test Case",
        type: "Criminal",
        filedDate: new Date().toISOString(),
        plaintiffName: "John Doe",
        defendantName: "Jane Smith",
        judge: "Judge Brown",
        description: "Test description",
        location: "Courtroom 5",
        plaintiffAddress: "123 Main St",
        defendantAddress: "456 Oak Ave",
        crimeType: "Burglary",
        crimeDate: new Date().toISOString(),
        crimeLocation: "789 Elm St",
        arrestingOfficer: "Officer Smith",
        arrestDate: new Date().toISOString()
      }),
    });
  
    expect(response.status).toBe(201);
  });
  
  test("Case Filing API Generates Correct Case Number - Returns 201", async () => {
    const response = await fetch("http://localhost:3000/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Case Number Test",
        type: "Civil",
        filedDate: new Date().toISOString(),
        plaintiffName: "John Doe",
        defendantName: "Jane Smith",
        judge: "Judge Brown"
      }),
    });
  
    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data.caseNumber).toMatch(/^CR-\d{4}-\d{4}$/);
  });
  
  test("Case Filing API Sets Correct Hearing Date - Returns 201", async () => {
    const testDate = new Date();
    const response = await fetch("http://localhost:3000/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hearing Date Test",
        type: "Civil",
        filedDate: testDate.toISOString(),
        plaintiffName: "John Doe",
        defendantName: "Jane Smith",
        judge: "Judge Brown"
      }),
    });
  
    expect(response.status).toBe(201);
    const data = await response.json();
    const nextHearing = new Date(data.nextHearing);
    const expectedDate = new Date(testDate);
    expectedDate.setDate(expectedDate.getDate() + 30);
    
    expect(nextHearing.getDate()).toBe(expectedDate.getDate());
    expect(nextHearing.getMonth()).toBe(expectedDate.getMonth());
    expect(nextHearing.getFullYear()).toBe(expectedDate.getFullYear());
  });