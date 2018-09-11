const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const db = new Sequelize(
    'sampleblogdb' , 'samplebloguser' , 'sampleblogpass' , 
    {
        dialect : 'mysql' , 
        host : 'localhost'
    }
)

const User = db.define('user' , {
    username : {type : DT.STRING(30) , unique : true , allowNull : false},

    password : {type : DT.STRING , allowNull : true}
})

const Article = db.define('article' , {

    title : {
        type : DT.STRING(150) ,
        allowNull : true
    } ,

    message : {
        type : DT.STRING
    }


})

const comment = db.define('comment' , {

    title : {
        type : DT.STRING(150) ,
        allowNull : true
    } ,

    message : {
        type : DT.STRING
    }
})

// These are associations 

Article.belongsTo(User , {as : 'author'})
User.hasMany(Article, { foreignKey: 'authorId' })

comment.belongsTo(Article)
Article.hasMany(comment)

comment.belongsTo(User)
User.hasMany(comment)

module.exports = {
    db , User ,Article , comment
}