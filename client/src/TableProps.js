const tableTypes = [
    {
        tableName: 'city',
    },
    {
        tableName: 'country',
    },
    {
        tableName: 'publisher',
        tableId: 'publisher_id',
        prop1: 'publisher_name',
        prop2: 'year_founded',
        prop3: 'city_id',
        prop4: 'country_id'
    },
    {
        tableName: 'author',
        tableId: 'author_id',
        prop1: 'fullname',
        prop2: 'age'
    },
    {
        tableName: 'book',
        tableId: 'book_id',
        prop1: 'title',
        prop2: 'publisher_id',
        prop3: 'author_id',
        prop4: 'price',
        prop5: 'amount'
    },
    {
        tableName: 'transactions',
        tableId: 'transactions_id',
        prop1: 'customer_id',
        prop2: 'book_id',
        prop3: 'count',
        prop4: 'transactions_date'
    },
]

export default tableTypes