const getBooks = "SELECT * FROM book"
const getAuthors = "SELECT * FROM author"
const getPublishers = "SELECT * FROM publisher"
const getCustomers = "SELECT * FROM customer"
const getCountries = "SELECT * FROM country"
const getCities = "SELECT * FROM city"
const getAddresses = "SELECT * FROM address_"

const getBookById = "SELECT * FROM book WHERE book.book_id = $1"
const getCityById = "SELECT * FROM city WHERE city.city_id = $1"
const getCountryById = "SELECT * FROM country WHERE country.country_id = $1"
const getPublisherById = "SELECT * FROM publisher WHERE publisher.publisher_id = $1"
const getAuthorById = "SELECT * FROM author WHERE author.author_id = $1"
const getAddressById = "SELECT * FROM address_ WHERE address_.address_id = $1"
const getCustomerById = "SELECT * FROM customer WHERE customer.customer_id = $1"

const checkCityIfExists = "SELECT * FROM city WHERE city.city_name = $1"
const checkCountryIfExists = "SELECT * FROM country WHERE country.country_name = $1"
const checkPublisherIfExits = "SELECT * FROM publisher WHERE publisher.publisher_name = $1"
const checkBookIfExits = "SELECT * FROM book WHERE book.title = $1"
const checkAuthorIfExits = "SELECT * FROM author WHERE author.fullname = $1"
const checkAddressIfExits = "SELECT * FROM address_ WHERE address_.street = $1"
const checkCustomerIfExits = "SELECT * FROM customer WHERE customer.fullname = $1"

const postCity = "INSERT INTO city (city_name) VALUES ($1)"
const postCountry = "INSERT INTO country (country_name) VALUES ($1)"
const postPublisher = "INSERT INTO publisher (publisher_name, year_founded, city_id, country_id) VALUES($1, $2, $3, $4)"
const postAuthor = "INSERT INTO author (fullname, age) VALUES($1, $2)"
const postBook = "INSERT INTO book (title, publisher_id, author_id, price, amount) VALUES($1, $2, $3, $4, $5)"
const postAddress = "INSERT INTO address_ (street, city_id, country_id) VALUES($1, $2, $3)"
const postCustomer = "INSERT INTO customer (fullname, email, pwd, address_id) VALUES($1, $2, $3, $4)"

const deleteCity = "DELETE FROM city WHERE city_id = $1"
const deleteCountry = "DELETE FROM country WHERE country_id = $1"
const deletePublisher = "DELETE FROM publisher WHERE publisher_id = $1"
const deleteBook = "DELETE FROM book WHERE book_id = $1"
const deleteAuthor = "DELETE FROM author WHERE author_id = $1"
const deleteAddress = "DELETE FROM address_ WHERE address_id = $1"
const deleteCustomer = "DELETE FROM customer WHERE customer_id = $1"

const deleteMultipleCities = "DELETE FROM city WHERE city_id IN ($1, $2, $3)"
const deleteMultipleCountries = "DELETE FROM country WHERE country_id IN($1, $2, $3)"
const deleteMultiplePublishers = "DELETE FROM publisher WHERE publisher_id IN($1, $2, $3)"
const deleteMultipleBooks = "DELETE FROM book WHERE book_id IN($1, $2, $3)"
const deleteMultipleAuthors = "DELETE FROM author WHERE author_id IN($1, $2, $3)"

const updateCity = "UPDATE city SET city_name = $1 WHERE city_id = $2"
const updateCountry = "UPDATE country SET country_name = $1 WHERE country_id = $2"
const updatePublisher = "UPDATE publisher SET publisher_name = $1, year_founded = $2, city_id = $3, country_id = $4 WHERE publisher_id = $5"
const updateBook = "UPDATE book SET title = $1, publisher_id = $2, author_id = $3, price = $4, amount = $5 WHERE book_id = $6"
const updateAuthor = "UPDATE author SET fullname = $1, age = $2 WHERE author_id = $3"
const updateAddress = "UPDATE address_ SET street = $1, city_id = $2, country_id = $3 WHERE address_id = $4"
const updateCustomer = "UPDATE customer SET fullname = $1, email = $2, pwd = $3, address_id = $4 WHERE customer_id = $5"




module.exports = {
    getBooks,
    getAuthors,
    getPublishers,
    getCustomers,
    getCountries,
    getCities,
    getAddresses,
    getBookById,
    getCityById,
    getCountryById,
    getPublisherById,
    getAuthorById,
    getAddressById,
    getCustomerById,
    checkCityIfExists,
    checkCountryIfExists,
    checkBookIfExits,
    checkAuthorIfExits,
    checkPublisherIfExits,
    checkAddressIfExits,
    checkCustomerIfExits,
    postCity,
    postCountry,
    postPublisher,
    postAuthor,
    postBook,
    postAddress,
    postCustomer,
    deleteCity,
    deleteCountry,
    deletePublisher,
    deleteBook,
    deleteAuthor,
    deleteAddress,
    deleteCustomer,
    updateCity,
    updateCountry,
    updatePublisher,
    updateBook,
    updateAuthor,
    updateAddress,
    updateCustomer,
    deleteMultipleAuthors,
    deleteMultipleBooks,
    deleteMultipleCities,
    deleteMultipleCountries,
    deleteMultiplePublishers
}