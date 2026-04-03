import { test,request } from "@playwright/test";

test("post",async({request})=>{
    let r1 = await request.post("https://petstore3.swagger.io/api/v3/pet",{
        data:{
             id: "51",
            name: "dog",
            status: "available"
        }
    })
    console.log(r1);    
    console.log((await r1.json()).name)
    })

   test("get",async({request})=>{
    let r1 = await request.get("https://petstore3.swagger.io/api/v3/pet")
    console.log(r1);    
    })

 

    test("delete",async({request})=>{
    let r1 = await request.delete("https://petstore3.swagger.io/api/v3/pet")
    console.log(r1);    
    
    })
