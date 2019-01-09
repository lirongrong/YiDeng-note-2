const axios = require("axios");
describe("node借口测试",function(){
    it("test接口测试",function(done){
        axios.get("http://localhost:3000/test")
        .then(function(response){
            if(response.data.result=="Hello World!"){
                done()
            }else{
                done(new Error("数据"))
            }
        })
        .catch(function(err){
            done(err);
        })
    })
})