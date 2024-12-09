# playwright-automation

## When starting a fresh playwright project install following 
    1. install node (brew install node)
    2. install playwright (npm init playwright)

## If cloning existing project install all dependencies using - 
    npm install

## Execute all the tests using - 
    npx playwright test 

## Execute tests in specific file using - 
    npx playwright test tests/login-test.spec.js

## Execute tests with matching regex in any file using - 
    npx playwright test --grep 'UI'

## Debug tests using debug flag - 
    npx playwright test tests/login-test.spec.js --debug 