const router = require('express').Router()
const pool = require('../configDB')
const queries = require('../queries')

router.get('/', (req,res) => {
    pool.query(queries.getBooks, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
})

router.post('/', (req,res) => {
    const {title, publisher_id, author_id, price, amount} = req.body
    pool.query(queries.checkBookIfExits, [title], (error, results) => {
        if(results.rows.length) res.json('Data already exists')

        pool.query(queries.postBook, [title, publisher_id, author_id, price, amount], (error, results) => {
            if(error) throw error
            res.status(200).json('Data is successfully added to table')
        })
    })
})

router.delete('/:id', (req,res) => {
    const book_id = parseInt(req.params.id)
    pool.query(queries.getBookById, [book_id], (error, results) => {
        if(!results.rows.length) res.json('Data already deleted')

        pool.query(queries.deleteBook, [book_id], (error,results) => {
            if(error) throw(error)
            res.status(200).json('Data is successfully deleted')
        })
    })
})

router.put('/:id', (req,res) => {
    const book_id = parseInt(req.params.id)
    const {title, publisher_id, author_id, price, amount} = req.body
    pool.query(queries.getCountryById, [book_id], (error,results) => {
        if(!results.rows.length) res.json('Data doesnt exist')

        pool.query(queries.updateCity, [title, publisher_id, author_id, price, amount, book_id], (error,results) => {
            if(error) throw error
            res.status(200).json('Data is successfully updated')
        })
    })
})

module.exports = router