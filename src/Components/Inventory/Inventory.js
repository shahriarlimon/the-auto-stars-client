import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {ID} = useParams();
    console.log(ID);
    return (
        <div>
            <h1>this is Inventory page</h1>
        </div>
    );
};

export default Inventory;