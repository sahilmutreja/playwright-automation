# playwright-automation

## Tutorials Index 
1. [Basic test to open google website.](tests/open-google-test.spec.js)
2. [Login test](tests/login-test.spec.js)
3. [Basic UI controls test](tests/login-page-practice/ui-controls-test.spec.js)
4. [Test to check if a new child page is opened](tests/login-page-practice/child-page-test.spec.js)
5. [Test to learn different types of waits in playwright](tests/client-app-tests/adding-waits-test.spec.js)
6. [Test to checkout a product from an ecommerce website](tests/client-app-tests/checkout-test.spec.js)
7. [Learn different getBy locators in playwright](tests/getby-locators-test.spec.js)
8. [Test to set and verify a calendar date](tests/Calendar.spec.js)
9. [More validations possible in playwright](tests/more-validations.spec.js)
10. [Web + API Testing combination](tests/client-app-tests/checkout-with-api-test.spec.js)

<hr/>

## Useful terminal commands 
### When starting a fresh playwright project 
    1. install node (brew install node)
    2. install playwright (npm init playwright)

### If cloning existing project install all dependencies using - 
    npm install

### Execute all the tests using - 
    npx playwright test 

### Execute tests in specific file using - 
    npx playwright test <test-file>
    Example: 
    npx playwright test tests/login-test.spec.js

### Execute tests with matching regex in any file using - 
    npx playwright test --grep <partial name of the test>
    Example: 
    npx playwright test --grep 'UI'

### Debug tests using debug flag - 
    npx playwright test <test-file> --debug 
    Example: 
    npx playwright test --grep 'UI'

### Run required tests from the playwright test runner - 
    npx playwright test --ui 

### Record and generate test script for any website url 
    npx playwright codegen <URL of the website>
    Example: 
    npx playwright codegen https://google.com/

### View traces locally 
    npx playwright show-trace <path to the traces.zip file>
    Example: 
    npx playwright show-trace ./test-results/open-google-test-open-google-page/trace.zip