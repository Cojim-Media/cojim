import React, { useEffect, useState } from 'react';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import ProgressBar from 'components/ProgressBar';

const ShopList = () => {
    const [isDataReady, setIsDataReady] = useState(false);
    const [products, setProducts] = useState({});

    const [query, setQuery] = useState('');
    const handleSearchItem = (e) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        // send a get request to the server to fetch products
        (async () => {
            const rawResponse = await fetch(`/api/product/list-product?query=${query}`, {
                method: 'GET',
            });
            const content = await rawResponse.json();
            // check if there is an error in the response
            if (content.error) {
                alert(content.message);
            } else {
                // update customers
                const dataObj = {};
                content.data.map(item => dataObj[item._id] = item)
                setProducts({ ...dataObj });
                // stop the progress bar
                setIsDataReady(true);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])
    return (
        <>
            <Navbar />
            <div className="pt-4  bg-white">
                <h1 className="text-center text-2xl font-bold text-gray-800">All Products</h1>
            </div>

            <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
                <a rel="noopener noreferrer" href="/#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Videos</span>
                </a>
                <a rel="noopener noreferrer" href="/#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                    <span>Audios</span>
                </a>
                <a rel="noopener noreferrer" href="/#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Books</span>
                </a>
                <a rel="noopener noreferrer" href="/#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>Others</span>
                </a>
            </div>

            <section className="py-10 bg-gray-100">
                <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    {
                        // if data is not ready diplay spinners else diplay the table
                        !isDataReady ? (
                            <tr>
                                <td>
                                    <div className="bg-gray-900">
                                        <ProgressBar />
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            // If there is no customer yet, display a message
                            !(Object.values(products) === undefined || Object.values(products).length === 0) ? (
                                Object.values(products).map((product, index) => {
                                    return (
                                        <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                                            <a href="/#">
                                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                                    <img className="max-h-40" src={`${product.thumbnailFile ? product.thumbnailFile.url : ''}`} alt="Hotel" />
                                                </div>

                                                <div className="mt-1 p-2">
                                                    <h2 className="text-slate-700">Adobe Photoshop CC 2022</h2>
                                                    <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                                                    <div className="mt-3 flex items-end justify-between">
                                                        <p className="text-lg font-bold text-blue-500">$850</p>

                                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>

                                                            <button className="text-sm">Add to cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </article>
                                    )
                                })

                            ) : <span></span>

                        )
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ShopList;