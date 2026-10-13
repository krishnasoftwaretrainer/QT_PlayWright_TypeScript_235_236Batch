import { test, expect } from '@playwright/test';

// GET - Retrieve all objects
test('API Example 1 - Get all objects', async ({ request }) => {

  // Send GET request to retrieve all objects
  const response = await request.get(
    'https://api.restful-api.dev/objects'
  );

  // Assert the expected HTTP status code is 200
  expect(response.status()).toBe(200);

  // Convert the response body into JSON format
  const data = await response.json();

  // Verify that the response data is an array
  expect(Array.isArray(data)).toBe(true);

  // Verify that the array contains at least one object
  expect(data.length).toBeGreaterThan(0);

  // Print the total number of objects returned
  console.log('Total objects:', data.length);

  // Print the first object from the response
  console.log('First object:', data[0]);

  // Print the complete response data in readable JSON format
  console.log('Complete Response Data:');
  console.log(JSON.stringify(data, null, 2));

  // Print the HTTP status text
  console.log('Status Text:', response.statusText());

  // Assert the expected HTTP status text is OK
  expect(response.statusText()).toBe('OK');

});
