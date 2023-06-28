const router = require('express').Router()
const pool = require('../configDB')
const queries = require('../queries')

router.get('/', (req,res) => {
    pool.query(queries.getAddresses, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
})

router.post('/', (req,res) => {
    const {street, city_id, country_id} = req.body
    pool.query(queries.checkAddressIfExits, [street, city_id, country_id], (error, results) => {
        if(results.rows.length) res.json('Data already exists')

        pool.query(queries.postAddress, [street, city_id, country_id], (error, results) => {
            res.status(200).json('Data is successfully added to table')
        })
    })
})

router.delete('/:id', (req,res) => {
    const address_id = parseInt(req.params.id)
    pool.query(queries.getAddressById, [address_id], (error, results) => {
        if(!results.rows.length) res.json('Data already deleted')

        pool.query(queries.deleteAddress, [address_id], (error,results) => {
            if(error) throw(error)
            res.status(200).json('Data is successfully deleted')
        })
    })
})

router.put('/:id', (req,res) => {
    const address_id = parseInt(req.params.id)
    const {street, city_id, country_id} = req.body
    pool.query(queries.getAddressById, [address_id], (error,results) => {
        if(!results.rows.length) res.json('Data doesnt exist')

        pool.query(queries.updateAddress, [street, city_id, country_id, address_id], (error,results) => {
            if(error) throw error
            res.status(200).json('Data is successfully updated')
        })
    })
})

module.exports = router