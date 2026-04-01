//products

// import { test,request } from "@playwright/test";
// let token:string;

// test("post_shopperlogin_testing",async({request})=>{
//     let r1 = await request.post("https://www.shoppersstack.com/shopping/users/login",{
//         data:{
//             email:"goyalmudit82@gmail.com",
//             password:"MGoyal@123",
//             role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//     })
//     let resp = await r1.json()
//     token=resp.data.jwtToken
//     console.log(resp)
//     console.log(token);

//     let r2 = await request.get("https://www.shoppersstack.com/shopping/products/alpha",{
//         data:{
//         //     email:"goyalmudit82@gmail.com",
//         //     password:"MGoyal@123",
//         //     role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
//     console.log(await r2.json());

//     let r3 = await request.post("https://www.shoppersstack.com/shopping/shoppers/377759/alpha",{
//         data:{
//         //     email:"goyalmudit82@gmail.com",
//         //     password:"MGoyal@123",
//         //     role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
//     console.log(await r3.json());
// })

//wishlist

// import { test,request } from "@playwright/test";
// let token:string;


// test("post_shopperlogin_testing",async({request})=>{
//     let r1 = await request.post("https://www.shoppersstack.com/shopping/users/login",{
//         data:{
//             email:"goyalmudit82@gmail.com",
//             password:"MGoyal@123",
//             role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//     })
//     let resp = await r1.json()
//     token=resp.data.jwtToken
//     let r2 = await request.post("https://www.shoppersstack.com/shopping/shoppers/377759/wishlist",{
//         headers:{
//             Authorization: `Bearer ${token}`
//         },
//         data:{
//             productId: 51,
//             quantity: 2
//         },ignoreHTTPSErrors:true,
//     })

//     console.log(await r2.json());

//     let r3 = await request.get("https://www.shoppersstack.com/shopping/shoppers/377759/wishlist",{
//         data:{
//         //     email:"goyalmudit82@gmail.com",
//         //     password:"MGoyal@123",
//         //     role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
    

//     let r4 = await request.delete('https://www.shoppersstack.com/shopping/shoppers/336912/wishlist/51',{
//         data:{
//         //     email:"goyalmudit82@gmail.com",
//         //     password:"MGoyal@123",
//         //     role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
//     console.log(await r3.json());
// })

//carts

// import { test,request } from "@playwright/test";
// let token:string;


// test("post_shopperlogin_testing",async({request})=>{
//     let r1 = await request.post("https://www.shoppersstack.com/shopping/users/login",{
//         data:{
//             email:"goyalmudit82@gmail.com",
//             password:"MGoyal@123",
//             role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//     })
//     let resp = await r1.json()
//     token=resp.data.jwtToken
//     let r2 = await request.post("https://www.shoppersstack.com/shopping/shoppers/377759/carts",{
//         headers:{
//             Authorization: `Bearer ${token}`
//         },
//         data:{
//             productId: 51,
//             quantity: 4
//         },ignoreHTTPSErrors:true,
//     })

//     console.log(await r2.json());

//     let r3 = await request.get("https://www.shoppersstack.com/shopping/shoppers/377759/carts",{
//         data:{
//         //     email:"goyalmudit82@gmail.com",
//         //     password:"MGoyal@123",
//         //     role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
    

//     let r4 = await request.delete('https://www.shoppersstack.com/shopping/shoppers/336912/carts/51',{
//         data:{
//         //     email:"goyalmudit82@gmail.com",
//         //     password:"MGoyal@123",
//         //     role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
//     
// })

//orders

// import { test,request } from "@playwright/test";
// let token:string;


// test("post_shopperlogin_testing",async({request})=>{
//     let r1 = await request.post("https://www.shoppersstack.com/shopping/users/login",{
//         data:{
//             email:"goyalmudit82@gmail.com",
//             password:"MGoyal@123",
//             role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//     })
//     let resp = await r1.json()
//     token=resp.data.jwtToken
//     let r2 = await request.post("https://www.shoppersstack.com/shopping/shoppers/377759/orders",{
//         headers:{
//             Authorization: `Bearer ${token}`
//         },
//         data:{     
//        addressId: 152071,
//        paymentMode: "COD"
//         },ignoreHTTPSErrors:true,
//     })

//     console.log(await r2.json());

//     let r3 = await request.get("https://www.shoppersstack.com/shopping/shoppers/377759/carts",{
//         data:{
//         //     email:"goyalmudit82@gmail.com",
//         //     password:"MGoyal@123",
//         //     role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
// })

//address

// import { test,request } from "@playwright/test";
// let token:string;


// test("post_shopperlogin_testing",async({request})=>{
//     let r1 = await request.post("https://www.shoppersstack.com/shopping/users/login",{
//         data:{
//             email:"goyalmudit82@gmail.com",
//             password:"MGoyal@123",
//             role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//     })
//     let resp = await r1.json()
//     token=resp.data.jwtToken
//     let r2 = await request.post("https://www.shoppersstack.com/shopping/shoppers/377759/address",{
//         headers:{
//             Authorization: `Bearer ${token}`
//         },
//        data: 
//     {
//       name: "Mudit Goyal",
//       phone: "9876543210",
//       buildingInfo : "Flat 201",
//       streetInfo: "MG Road",
//       landmark: "Near Mall",
//       city: "Jaipur",
//       state: "Rajasthan",
//       country: "India",
//       pincode: "432102",
//       type: "Home"
//     },ignoreHTTPSErrors:true,
//     })

//     console.log(await r2.json());

//     let r3 = await request.get("https://www.shoppersstack.com/shopping/shoppers/377759/address",{
//         data:{
//         //     email:"goyalmudit82@gmail.com",
//         //     password:"MGoyal@123",
//         //     role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
//     let r4 = await request.delete("https://www.shoppersstack.com/shopping/shoppers/377759/address",{
//         data:{
// //         //     email:"goyalmudit82@gmail.com",
// //         //     password:"MGoyal@123",
// //         //     role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
// })

//reviews

import { test,request } from "@playwright/test";
let token:string;


test("post_shopperlogin_testing",async({request})=>{
    let r1 = await request.post("https://www.shoppersstack.com/shopping/users/login",{
        data:{
            email:"goyalmudit82@gmail.com",
            password:"MGoyal@123",
            role:"SHOPPER"
        },ignoreHTTPSErrors:true,
    })
    let resp = await r1.json()
    token=resp.data.jwtToken
    let r2 = await request.post("https://www.shoppersstack.com/shopping/reviews/?productId=377759",{
        headers:{
            Authorization: `Bearer ${token}`
        },
       data: 
    {
     "dateTime": "2026-03-28T07:11:51.092Z",
   "description": "Great service and smooth shopping experience. Delivery was on time.",
   "heading": "Excellent Experience",
   "rating": 5,
   "shopperId": 377759,
  "shopperName": "Mudit"
    },ignoreHTTPSErrors:true,
    })

    console.log(await r2.json());

    let r3 = await request.get("https://www.shoppersstack.com/shopping/reviews/377759",{
        data:{
        //     email:"goyalmudit82@gmail.com",
        //     password:"MGoyal@123",
        //     role:"SHOPPER"
        },ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
//     let r4 = await request.delete("https://www.shoppersstack.com/shopping/shoppers/377759/address",{
//         data:{
// //         //     email:"goyalmudit82@gmail.com",
// //         //     password:"MGoyal@123",
// //         //     role:"SHOPPER"
//         },ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
})