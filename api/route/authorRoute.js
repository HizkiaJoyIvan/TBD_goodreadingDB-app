const router = require('express').Router()
const pool = require('../configDB')
const queries = require('../queries')

router.get('/', (req,res) => {
    pool.query(queries.getAuthors, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
})

router.post('/', (req,res) => {
    const {fullname, age} = req.body
    pool.query(queries.checkAuthorIfExits, [fullname], (error, results) => {
        if(results.rows.length) res.json('Data already exists')

        pool.query(queries.postAuthor, [fullname, age], (error, results) => {
            res.status(200).json('Data is successfully added to table')
        })
    })
})

router.delete('/:id', (req,res) => {
    const author_id = parseInt(req.params.id)
    pool.query(queries.getAuthorById, [author_id], (error, results) => {
        if(!results.rows.length) res.json('Data already deleted')

        pool.query(queries.deleteAuthor, [author_id], (error,results) => {
            if(error) throw(error)
            res.status(200).json('Data is successfully deleted')
        })
    })
})

router.put('/:id', (req,res) => {
    const author_id = parseInt(req.params.id)
    const {fullname, age} = req.body
    pool.query(queries.getAuthorById, [author_id], (error,results) => {
        if(!results.rows.length) res.json('Data doesnt exist')

        pool.query(queries.updateAuthor, [fullname, age, author_id], (error,results) => {
            if(error) throw error
            res.status(200).json('Data is successfully updated')
        })
    })
})

module.exports = router