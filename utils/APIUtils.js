export class APIUtils {

    constructor(request) {
        this.request = request;
    }

    async setToken(loginPayload) {
        console.log('Requesting token - https://rahulshettyacademy.com/api/ecom/auth/login')
        let loginResponse = await this.request.post(
            'https://rahulshettyacademy.com/api/ecom/auth/login', {
            data: loginPayload
        });

        // assert on response OK (HTTP 200)
        console.log("Get token response - " + loginResponse.status());

        // Wait for response body 
        let res = await loginResponse.json();
        console.log("loginResponse.json - " + JSON.stringify(res)); // print the json object
        console.log("Token - " + this.token);
        this.token = res.token;
    }

    async setOrderId(orderPayload) {
        // Create order via api 
        let orderResponse = await this.request.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
            {
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                },
                data: orderPayload
            }
        )
        let orderJsonResponse = await orderResponse.json();
        console.log("Order response - " + JSON.stringify(orderJsonResponse));
        let orderId = orderJsonResponse.orders[0];
        console.log("order id = " + orderId)
        this.orderId = orderId;
    }

}