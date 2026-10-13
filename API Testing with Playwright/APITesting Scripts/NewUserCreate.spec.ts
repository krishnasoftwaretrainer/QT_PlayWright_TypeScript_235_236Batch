import { test, expect } from '@playwright/test';

// POST - Create a new object
test('API Example 3 - Create new object', async ({ request }) => {

  // Send POST request with JSON request body
  const response = await request.post(
    'https://api.restful-api.dev/objects',
    {
      data: {
        name: 'Apple MacBook Pro 16',
        data: {
          year: 2025,
          price: 1999.99,
          CPU: 'Intel Core i9',
          RAM: '16 GB'
        }
      }
    }
  );

  // Print the HTTP status code
  console.log('Status Code:', response.status());

  // Assert the expected HTTP status code
  // This API typically returns 200 OK for successful object creation
  expect(response.status()).toBe(200);

  // Print the HTTP status text
  console.log('Status Text:', response.statusText());

  // Assert the expected HTTP status text
  expect(response.statusText()).toBe('OK');

  // Convert the response body into JSON
  const data = await response.json();

//   // Print the created object's details
//   console.log('Created Object ID:', data.id);
//   console.log('Object Name:', data.name);
//   console.log('Object Data:', data.data);

console.log('Complete Response Data:');
  console.log(JSON.stringify(data, null, 2));

  
  // Assert the object name
  expect(data.name).toBe('Apple MacBook Pro 16');

  // Assert the year
  expect(data.data.year).toBe(2025);

  // Assert the price
  expect(data.data.price).toBe(1999.99);

});