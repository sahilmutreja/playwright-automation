import { test } from '@playwright/test';

exports.customTest = test.extend(
    {
        testDataForCheckout: {
            email: "anshika@gmail.com",
            pass: "Iamking@000",
            productName: "IPHONE 13 PRO",
        }
    }
)