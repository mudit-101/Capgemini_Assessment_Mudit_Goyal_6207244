//annotation means adding some extra label
import {test} from "@playwright/test"

/**
 * skip
 * only
 * fixme
 * fail
 * describe
 * slow
 * setTimeout
 */
test.skip("test1", async()=> {
    console.log("hii");
})
test.describe("test2", async()=> {
    console.log("hii");
    test("t1", async({page})=>{
        console.log("hello")
    })
    test("t2", async({page})=>{
        console.log("hello")
    })
    test("t3", async({page})=>{
        console.log("hello")
    })
})
test.fixme("test3", async()=> {
    console.log("hii");
})
test("test4", async()=> {
    test.slow()
    console.log("hii");
})
test("test5", async()=> {
    console.log("hii");
})
