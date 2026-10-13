
import { test, expect } from '@playwright/test';

// PUT - Update an existing object
test('API Example 4 - Update specific object', async ({ request }) => {

  // Send PUT request to update the object with ID 7
  const response = await request.put(
    // 'https://api.restful-api.dev/objects/7',
    'https://api.restful-api.dev/objects/ff808181a09d98f701a13406884b50ea',

    {
      // Provide the updated object details in JSON format
      data: {
        name: 'Android Samsung Galaxy S21 Ultra Updated',
        data: {
          year: 2027,
          price: 55555.99,
          CPU: 'Intel Core i9',
          RAM: '64 GB'
        }
      }
    }
  );

  // Print the HTTP status code
  console.log('Status Code:', response.status());

  // Assert the expected HTTP status code
  expect(response.status()).toBe(200);

  // Print the HTTP status text
  console.log('Status Text:', response.statusText());

  // Assert the expected HTTP status text
  expect(response.statusText()).toBe('OK');

  // Convert the response body into JSON format
  const data = await response.json();

  console.log('Complete Response Data:');
  console.log(JSON.stringify(data, null, 2));


  // Assert the object ID
  expect(data.id).toBe('ff808181a09d98f701a13406884b50ea');

  // Assert the updated object name
  expect(data.name).toBe('Android Samsung Galaxy S21 Ultra Updated');

  // Assert the updated year
  expect(data.data.year).toBe(2027);

  // Assert the updated price
  expect(data.data.price).toBe(55555.99);

});