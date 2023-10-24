// server.test.js
describe('Server Tests', function() {
    afterEach(function() {
      // Clean up the DOM after each test
      document.body.innerHTML = '';
    });
  
    // Write tests for each function found in server.js
    it('should testFunctionOne', function() {
      // Write your test for testFunctionOne
    });
  
    it('should testFunctionTwo', function() {
      // Write your test for testFunctionTwo
    });
  });
  
  // helpers.test.js
  describe('Helpers Tests', function() {
    // tests for each function found in helpers.js
    it('should testHelperFunctionOne', function() {
      // test for testHelperFunctionOne
    });
  
    it('should testHelperFunctionTwo', function() {
      //  test for testHelperFunctionTwo
    });
  });
  
  // payments.test.js
  describe('Payments Tests', function() {
    // tests for each function found in payments.js
    it('should testPaymentsFunctionOne', function() {
      // test for testPaymentsFunctionOne
    });
  
    it('should testPaymentsFunctionTwo', function() {
      // test for testPaymentsFunctionTwo
    });
  });
  
  // Your own code tests
  describe('Your Code Tests', function() {
    it('should test appendDeleteBtn', function() {
      const testElement = document.createElement('div');
      document.body.appendChild(testElement);
  
      // Calls the function
      appendDeleteBtn(testElement);
  
      // Simulate a click event
      const deleteButton = testElement.querySelector('td');
      deleteButton.click();
  
      // Expectations/ Answer 
      expect(testElement.parentElement).toBe(null);
    });
  });
  

