const router = require('express').Router()
const pool = require('../configDB')
const queries = require('../queries')

router.get('/', (req,res) => {
    pool.query(queries.getCustomers, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
})

router.post('/', (req,res) => {
    const {fullname, email, pwd, address_id} = req.body
    pool.query(queries.checkCustomerIfExits, [fullname], (error, results) => {
        if(results.rows.length) res.json('Data already exists')

        pool.query(queries.postCustomer, [fullname, email, pwd, address_id], (error, results) => {
            res.status(200).json('Data is successfully added to table')
        })
    })
})

router.delete('/:id', (req,res) => {
    const customer_id = parseInt(req.params.id)
    pool.query(queries.getCustomerById, [customer_id], (error, results) => {
        if(!results.rows.length) res.json('Data already deleted')

        pool.query(queries.deleteCustomer, [customer_id], (error,results) => {
            if(error) throw(error)
            res.status(200).json('Data is successfully deleted')
        })
    })
})

router.put('/:id', (req,res) => {
    const customer_id = parseInt(req.params.id)
    const {fullname, email, pwd, address_id} = req.body
    pool.query(queries.getCustomerById, [customer_id], (error,results) => {
        if(!results.rows.length) res.json('Data doesnt exist')

        pool.query(queries.updateCustomer, [fullname, email, pwd, address_id, customer_id], (error,results) => {
            if(error) throw error
            res.status(200).json('Data is successfully updated')
        })
    })
})

module.exports = router