import React from 'react'

function Products() {





  return (
    <>
        <form action="">
            <br />
            <div>
                <label htmlFor="">Name: </label>
                <input type="text" />
            </div> <br />
            <div>
                <label htmlFor="">Unit Price: </label>
                <input type="number" name="" />
            </div>    <br />
                <label htmlFor="">Stock: </label>
                <input type="number" name="" />
            <div><br />
                <label htmlFor="">Quantity Per Unit: </label>
                <input type="number" name="" />
            </div><br />

            <div>
                <button>Add</button>
            </div>
        </form>
    </>
  )
}

export default Products