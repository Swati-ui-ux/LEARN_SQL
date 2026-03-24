

const Students = require("./students")
const IdentityCard = require("./identityCard")
const Department = require("./department")
    
Students.hasOne(IdentityCard)
IdentityCard.belongsTo(Students)


// one to many
Department.hasMany(Students)
Students.belongsTo(Department)

module.exports = {
    Students,
    IdentityCard,
}