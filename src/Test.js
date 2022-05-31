import React from 'react';
import LinkFormTable from 'modules/ac/setup/link_inventory/LinkInventory/LinkFormTable';

function Test(props) {
    const itemDetail=[];
    return (
        <>
          <LinkFormTable itemDetail={itemDetail} remove={()=>{}} edit={()=>{}} />  
        </>
    );
}

export default Test;