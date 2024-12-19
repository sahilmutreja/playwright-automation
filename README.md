# playwright-automation

### When starting a fresh playwright project - 
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