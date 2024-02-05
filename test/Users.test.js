import mongoose from 'mongoose'
import User from "../src/dao/Users.dao.js"
import Assert from 'assert'

mongoose.connect('mongodb+srv://mconsuelobeckett:BtMrTH620ttG7XsN@cluster1.kji7jjj.mongodb.net/test?retryWrites=true&w=majority')

const assert = Assert.strict

describe("testing USERS DAO get method", () => {
    before(function () {
        this.usersDao = new User()
    })

    it("DAO debe agregar a un usuario en la DB ", async function(){
        let mockUser = {
            first_name:  "mConsuelo",
            last_name: "Beckett",
            email: "test@example.com",
            password: "123456",
            role:"user"
        }

        const result = await this.usersDao.get()
        assert.strictEqual(Array.isArray(result) && result.length > 0, true)
        
    })

    it("deberia devolver los usuarios de la BD", async function () {
        this.timeout(5000)
        try {
            const result = await this.usersDao.get()
            assertStrict.strictEqual(Array.isArray(result) && result.length > 0, true)
        } catch (e) {
            console.error("error while the test:", e)
            assert.fail("test with error")
        }
    })

    it("DAO debe agregar a un usuario en la DB ", async function () {
        let mockUser = {
            first_name: "mConsuelo",
            last_name: "Beckett",
            email: "test@example.com",
            password: "123456",
            role: "user"  
        }
    
        try {
            const result = await this.usersDao.save(mockUser)
            assert.ok(result._id)
        } catch (e) {
            console.error("error while the test:", e)
            assert.fail("test with error")
        }
    })
    

    it("el DAO debe obtener n usuario por correo electronico  ", async function(){
        let mockUser = {
            first_name:  "mConsuelo",
            last_name: "Beckett",
            email: "test@example.com",
            password: "123456",
            role:"user"
        }

        const result = await this.usersDao.save(mockUser)
        const user=  await this.usersDao.getBy({email: result.email})
        assert.strictEqual(typeof user, "object")
    })
    
        beforeEach(function(){
            mongoose.connection.collections.users.drop()
            this.timeout(5000)
        })



})