const rewire = require("rewire")
const Bai1 = rewire("./Bai1")
const calSalary = Bai1.__get__("calSalary")
// @ponicode
describe("calSalary", () => {
    test("0", () => {
        let callFunction = () => {
            calSalary()
        }
    
        expect(callFunction).not.toThrow()
    })
})
