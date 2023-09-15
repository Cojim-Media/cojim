import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import ProgressBar from 'components/ProgressBar';
import { Link, useNavigate } from 'react-router-dom';

const AdminEquipmentList = () => {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  }

  const [isDataReady, setIsDataReady] = useState(false);
  const [equipment, setEquipment] = useState({});

  // const [query, setQuery] = useState('');
  // const handleSearchItem = (e) => {
  //   setQuery(e.target.value);
  // }

  const handleDeleteItem = (_id) => {
    // make user confirm delete before proceeding
    if (!window.confirm('Are you sure you want to delete this item?')) {
      // exit function if false
      return false;
    }

    // delete memeber from server
    // send a delete request to the server to delete memeber
    (async () => {
      const rawResponse = await fetch('/api/equipment', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ equipmentId: _id })
      });
      const content = await rawResponse.json();
      const status = rawResponse.status;
      // Redirect the user to login page if status == 401
      if (status === 401) {
        // redirect to login page
        navigate("/");
        return false;
      }
      // check if there is an error in the response
      if (content.error) {
        alert(content.message);
      } else {
        Swal.fire({
          title: 'Info!',
          text: content.message,
          icon: 'info',
          confirmButtonText: 'Ok'
        });
        refreshPage();
      }
    })();
  }

  useEffect(() => {
    // send a get request to the server to fetch equipment
    (async () => {
      const rawResponse = await fetch(`/api/equipment?query=${''}`, {
        method: 'GET',
      });
      const content = await rawResponse.json();
      const status = rawResponse.status;
      // Redirect the user to login page if status == 401
      if (status === 401) {
        // redirect to login page
        navigate("/admin/login");
        return false;
      }
      // check if there is an error in the response
      if (content.error) {
        alert(content.message);
      } else {
        // update customers
        const dataObj = {};
        content.data.map(item => dataObj[item._id] = item)
        setEquipment({ ...dataObj });
        // stop the progress bar
        setIsDataReady(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ul id="tabs" className="inline-flex w-full px-1 pt-4 my-2">
        <li className="px-4 py-1 font-semibold rounded-t">
          <Link to="../add-equipment" className={`bg-primary text-white rounded-lg px-7 py-3 font-bold text-sm drop-shadow-lg`}>
            Add Equipment
          </Link>
        </li>

      </ul>

      <div className="container my-3 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center lg:text-left">
          <div className="grid lg:grid-cols-3 gap-x-6 lg:gap-x-12">

            {
              // if data is not ready diplay spinners else diplay the table
              !isDataReady ? (
                <tr>
                  <td>
                    <ProgressBar />
                  </td>
                </tr>
              ) : (
                // If there is no customer yet, display a message
                !(Object.values(equipment) === undefined || Object.values(equipment).length === 0) ? (
                  Object.values(equipment).map((item, index) => {
                    return (
                      <div className="bg-white block rounded-lg shadow-lg mb-6 lg:mb-0" data-mdb-ripple="true"
                        data-mdb-ripple-color="light">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover">
                          <img alt="equipment" src={`${item.image.url}`} className="w-full rounded-t-lg" />
                          <a href="#!">
                            <div
                              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                              style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                          </a>
                          <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ left: 0, bottom: 0 }}>
                            <path fill="#fff"
                              d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                            </path>
                          </svg>
                        </div>
                        <div className="p-6">
                          <h5 className="font-bold text-lg mb-3">{item.name}</h5>

                          <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16">
                              <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                              <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                            </svg>
                            Quantity: <b> {item.quantity}</b>
                          </div>

                          <p className="mb-4 pb-2">
                            {item.description}
                          </p>
                          <div className="flex justify-center">
                            <button onClick={() => handleDeleteItem(item._id)} className="w-max bg-red-900 text-white uppercase font-bold rounded-lg p-2 px-3" href="/#">
                              <span className="text-center">Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })

                ) : ''

              )
            }


          </div>
        </section>
      </div>
    </>
  )
}

export default AdminEquipmentList;