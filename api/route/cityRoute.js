const router = require('express').Router()
const pool = require('../configDB')
const queries = require('../queries')

router.get('/', (req,res) => {
    pool.query(queries.getCities, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
})

router.post('/', (req,res) => {
    const {city_name} = req.body
    pool.query(queries.checkCityIfExists, [city_name], (error, results) => {
        if(results.rows.length) res.json('Data already exists')

        pool.query(queries.postCity, [city_name], (error, results) => {
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
            pool.query(queries.deleteMultipleCities, [id1, id2, id3], (error, results) =>{
                if(error) throw error
                pool.query('COMMIT')
                res.status(200).send('Data with selected ID is successfully deleted')
            })
        })
    })
})

router.delete('/:id', (req,res) => {
    const city_id = parseInt(req.params.id)
    pool.query(queries.getCityById, [city_id], (error, results) => {
        if(!results.rows.length) res.json('Data already deleted')

        pool.query(queries.deleteCity, [city_id], (error,results) => {
            if(error) throw(error)
            res.status(200).json('Data is successfully deleted')
        })
    })
})

router.put('/:id', (req,res) => {
    const city_id = parseInt(req.params.id)
    const {city_name} = req.body
    pool.query(queries.getCityById, [city_id], (error,results) => {
        if(!results.rows.length) res.json('Data doesnt exist')

        pool.query(queries.updateCity, [city_name, city_id], (error,results) => {
            if(error) throw error
            res.status(200).json('Data is successfully updated')
        })
    })
})



module.exports = router