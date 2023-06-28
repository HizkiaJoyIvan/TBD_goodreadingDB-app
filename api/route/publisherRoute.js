const router = require('express').Router()
const pool = require('../configDB')
const queries = require('../queries')

router.get('/', (req,res) => {
    pool.query(queries.getPublishers, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
})

router.post('/', (req,res) => {
    const {publisher_name, year_founded, city_id, country_id} = req.body
    pool.query(queries.checkPublisherIfExits, [publisher_name], (error, results) => {
        if(results.rows.length) res.json('Data already exists')

        pool.query(queries.postPublisher, [publisher_name, year_founded, city_id, country_id], (error, results) => {
            res.status(200).json('Data is successfully added to table')
        })
    })
})

router.delete('/deleteMultiple', (req,res) => {
    const {id1, id2, id3} = req.body
    pool.query('BEGIN', (error, results) => {
        if(error) {
            pool.query('ROLLBACK')
            return res.status(500).send('Error')   
        }
        pool.query(queries.getCityById, [id1], (error, results) => {
            // if(!results.rows.length) throw error
            pool.query(queries.deleteMultiplePublishers, [id1, id2, id3], (error, results) =>{
                if(error) throw error
                pool.query('COMMIT')
                res.status(200).send('Data with selected ID is successfully deleted')
            })
        })
    })
})

router.delete('/:id', (req,res) => {
    const publisher_id = parseInt(req.params.id)
    pool.query(queries.getPublisherById, [publisher_id], (error, results) => {
        if(!results.rows.length) res.json('Data already deleted')

        pool.query(queries.deletePublisher, [publisher_id], (error,results) => {
            if(error) throw(error)
            res.status(200).json('Data is successfully deleted')
        })
    })
})

router.put('/:id', (req,res) => {
    const publisher_id = parseInt(req.params.id)
    const {publisher_name, year_founded, city_id, country_id} = req.body
    pool.query(queries.getPublisherById, [publisher_id], (error,results) => {
        if(!results.rows.length) res.json('Data doesnt exist')

        pool.query(queries.updatePublisher, [publisher_name, year_founded, city_id, country_id, publisher_id], (error,results) => {
            if(error) throw error
            res.status(200).json('Data is successfully updated')
        })
    })
})

module.exports = router