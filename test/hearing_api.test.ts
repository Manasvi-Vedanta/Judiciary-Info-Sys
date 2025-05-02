// hearings_api.test.ts
import { describe, expect, test, beforeAll } from '@jest/globals';

describe('Hearings API', () => {
  let validCaseId: number;

  // Create a case first to get a valid case ID
  beforeAll(async () => {
    // Create a test case to get a valid case ID
    const caseResponse = await fetch("http://localhost:3000/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Test123 Case for Hearings",
        type: "Civil",
        filedDate: new Date().toISOString(),
        plaintiffName: "John Doe",
        defendantName: "Jane Smith",
        judge: "Judge Brown"
      }),
    });

    if (caseResponse.status !== 201) {
      console.error("Failed to create test case for hearings tests");
      throw new Error("Setup failed: Could not create test case");
    }

    const caseData = await caseResponse.json();
    validCaseId = caseData.id; // Store the ID of the newly created case
    console.log(`Created test case with ID: ${validCaseId}`);
  });

  test("Hearing Scheduling API Creates Hearing Successfully - Returns 201", async () => {
    const response = await fetch("http://localhost:3000/api/hearings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Bail Hearing",
        description: "Initial bail hearing for defendant",
        type: "BAIL",
        date: new Date().toISOString(),
        duration: 60,
        location: "Courtroom 3",
        caseId: validCaseId,
        notes: "Defendant requests reduced bail"
      }),
    });
  
    // Log the response body for debugging
    const responseBody = await response.text();
    console.log(`Response: ${response.status}, Body: ${responseBody}`);
    
    // Parse the JSON again for assertions
    const data = JSON.parse(responseBody);
    
    expect(response.status).toBe(201);
    expect(data).toHaveProperty("id");
    expect(data.status).toBe("SCHEDULED");
    expect(data.title).toBe("Bail Hearing");
    expect(data.description).toBe("Initial bail hearing for defendant");
    expect(data.location).toBe("Courtroom 3");
    expect(data.duration).toBe(60);
    expect(data.caseId).toBe(validCaseId);
    expect(data.notes).toBe("Defendant requests reduced bail");
    expect(data.cases).toBeDefined();
  });
  
  test("Hearing Scheduling API Rejects Missing Mandatory Fields - Returns 500", async () => {
    const testCases = [
      { 
        description: "missing title", 
        payload: {
          description: "Test description",
          type: "MOTION",
          date: new Date().toISOString(),
          duration: 60,
          location: "Courtroom 1",
          caseId: validCaseId
        }
      },
      { 
        description: "missing type", 
        payload: {
          title: "Test Hearing",
          description: "Test description",
          date: new Date().toISOString(),
          duration: 60,
          location: "Courtroom 1",
          caseId: validCaseId
        }
      },
      { 
        description: "missing date", 
        payload: {
          title: "Test Hearing",
          description: "Test description",
          type: "MOTION",
          duration: 60,
          location: "Courtroom 1",
          caseId: validCaseId
        }
      },
      { 
        description: "missing duration", 
        payload: {
          title: "Test Hearing",
          description: "Test description",
          type: "MOTION",
          date: new Date().toISOString(),
          location: "Courtroom 1",
          caseId: validCaseId
        }
      },
      { 
        description: "missing location", 
        payload: {
          title: "Test Hearing",
          description: "Test description",
          type: "MOTION",
          date: new Date().toISOString(),
          duration: 60,
          caseId: validCaseId
        }
      },
      { 
        description: "missing caseId", 
        payload: {
          title: "Test Hearing",
          description: "Test description",
          type: "MOTION",
          date: new Date().toISOString(),
          duration: 60,
          location: "Courtroom 1"
        }
      }
    ];
  
    for (const testCase of testCases) {
      const response = await fetch("http://localhost:3000/api/hearings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testCase.payload),
      });
      
      expect(response.status).toBe(500);
      const data = await response.json();
      expect(data).toHaveProperty("error");
    }
  });
  
  test("Hearing Scheduling API Accepts Optional Fields - Returns 201", async () => {
    const response = await fetch("http://localhost:3000/api/hearings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Motion Hearing",
        type: "MOTION",
        date: new Date().toISOString(),
        duration: 30,
        location: "Courtroom 5",
        caseId: validCaseId,
        description: "Defendant's motion to dismiss",
        notes: "Plaintiff objects to motion"
      }),
    });
  
    // Log the response body for debugging
    const responseBody = await response.text();
    console.log(`Optional Fields Response: ${response.status}, Body: ${responseBody}`);
    
    // Parse the JSON again for assertions
    const data = JSON.parse(responseBody);
    
    expect(response.status).toBe(201);
    expect(data).toHaveProperty("description");
    expect(data.description).toBe("Defendant's motion to dismiss");
    expect(data).toHaveProperty("notes");
    expect(data.notes).toBe("Plaintiff objects to motion");
  });
  
  test("Hearing Scheduling API Handles Invalid Date Format - Returns 500", async () => {
    const response = await fetch("http://localhost:3000/api/hearings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Invalid Date Test",
        type: "SENTENCING",
        date: "invalid-date-format",
        duration: 60,
        location: "Courtroom 2",
        caseId: validCaseId
      }),
    });
  
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data).toHaveProperty("error");
    expect(data).toHaveProperty("details");
  });
  
  test("Hearing Scheduling API Sets Default Status to SCHEDULED - Returns 201", async () => {
    const response = await fetch("http://localhost:3000/api/hearings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Status Test Hearing",
        type: "TRIAL",
        date: new Date().toISOString(),
        duration: 90,
        location: "Courtroom 4",
        caseId: validCaseId
      }),
    });
  
    // Log the response body for debugging
    const responseBody = await response.text();
    console.log(`Status Test Response: ${response.status}, Body: ${responseBody}`);
    
    // Parse the JSON again for assertions
    const data = JSON.parse(responseBody);
    
    expect(response.status).toBe(201);
    expect(data.status).toBe("SCHEDULED");
  });
  
  test("Hearing Scheduling API Validates Case ID Exists - Returns 500 for Invalid Case ID", async () => {
    const NON_EXISTENT_CASE_ID = 99999; // This case ID should not exist
    
    const response = await fetch("http://localhost:3000/api/hearings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Non-existent Case Test",
        type: "PRETRIAL",
        date: new Date().toISOString(),
        duration: 60,
        location: "Courtroom 6",
        caseId: NON_EXISTENT_CASE_ID
      }),
    });
  
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data).toHaveProperty("error");
    expect(data.error).toBe("Failed to schedule hearing");
  });

  test("Hearing Scheduling API Sets Created and Updated Timestamps - Returns 201", async () => {
    const response = await fetch("http://localhost:3000/api/hearings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Timestamp Test Hearing",
        type: "ARRAIGNMENT",
        date: new Date().toISOString(),
        duration: 45,
        location: "Courtroom 7",
        caseId: validCaseId
      }),
    });
  
    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data).toHaveProperty("createdAt");
    expect(data).toHaveProperty("updatedAt");
    expect(new Date(data.createdAt)).toBeInstanceOf(Date);
    expect(new Date(data.updatedAt)).toBeInstanceOf(Date);
  });

  test("Hearing Scheduling API Includes Case Information in Response - Returns 201", async () => {
    const response = await fetch("http://localhost:3000/api/hearings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Case Include Test Hearing",
        type: "STATUS",
        date: new Date().toISOString(),
        duration: 30,
        location: "Courtroom 8",
        caseId: validCaseId
      }),
    });
  
    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data.cases).toBeDefined();
    expect(data.cases).toHaveProperty("id");
  });
});