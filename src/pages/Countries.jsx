import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
    borderWidth: "2px",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer"
  };

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('blue');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all')
                if (response.status === 200) {
                    setCountries(response.data);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
            }
        };

        getData();
    }, []);


    if (loading) {
        return (
            <div style={{ width: '100vw', height: '80vh' }} className="d-flex justify-content-center align-items-center">
              <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          );
    }

    return (
        <main className=' container mt-3'>
            {/*  */}
            <div className=' d-flex justify-content-between '>
                <div class="input-group mb-3" style={{ maxWidth: "400px" }}>
                    <span class="input-group-text" id="inputGroup-sizing-default">
                        <IoSearch />
                    </span>
                    <input type="text" className="form-control" ariaLabel="Sizing example input" ariaDescribedby="inputGroup-sizing-default" />
                </div>


                <div style={{ maxWidth: "400px" }}>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

            <div className="row mt-4">
                    {countries.map((country) => (
                        <div key={country.cca3} className="col-md-4 ">
                            <Link to={`country/:uzbekitan`} className="card mb-4 card-css">
                                <img
                                    src={country.flags.svg}
                                    className="card-img-top"
                                    alt={`${country.name.common} flag`}
                                    style={{ height: '240px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{country.name.common}</h5>
                                    <p className="card-text">Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                                    <p className="card-text">Region: {country.region}</p>
                                    <p className="card-text">Population: {country.population.toLocaleString()}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
        </main>
    )
}
