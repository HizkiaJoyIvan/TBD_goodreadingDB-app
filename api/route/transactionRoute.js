const router = require('express').Router()
const pool = require('../configDB')
const queries = require('../queries')

router.get('/', (req,res) => {
    pool.query(queries.getCountries, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
})

router.post('/', (req,res) => {
    const {country_name} = req.body
    pool.query(queries.checkCountryIfExists, [country_name], (error, results) => {
        if(results.rows.length) res.json('Data already exists')

        pool.query(queries.postCountry, [country_name], (error, results) => {
            res.status(200).json('Data is successfully added to table')
        })
    })
})

router.delete('/:id', (req,res) => {
    const country_id = parseInt(req.params.id)
    pool.query(queries.getCountryById, [country_id], (error, results) => {
        if(!results.rows.length) res.json('Data already deleted')

        pool.query(queries.deleteCountry, [country_id], (error,results) => {
            if(error) throw(error)
            res.status(200).json('Data is successfully deleted')
        })
    })
})

router.put('/:id', (req,res) => {
    const country_id = parseInt(req.params.id)
    const {country_name} = req.body
    pool.query(queries.getCountryById, [country_id], (error,results) => {
        if(!results.rows.length) res.json('Data doesnt exist')

        pool.query(queries.updateCity, [country_name], (error,results) => {
            if(error) throw error
            res.status(200).json('Data is successfully updated')
        })
    })
})

module.exports = router