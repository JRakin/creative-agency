import React, { useEffect, useState } from 'react';
import preLoader from '../../../images/logos/loader.gif';
import Swal from 'sweetalert2';

const AdminServiceList = () => {
  const [allList, setAllList] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetch('https://aqueous-reef-82491.herokuapp.com/getAllOrders')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setAllList(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSelect = (e, id) => {
    const status = e.target.value;
    const data = { status: status };
    console.log(status);
    fetch('https://aqueous-reef-82491.herokuapp.com/updateOrder/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire('Okay', 'Status updated successfully', 'success');
        window.location.reload();
      });

    e.preventDefault();
  };

  return (
    <table className="table table-sm table-hover">
      <thead className="thead-light">
        <tr className="text-center">
          <th>Name</th>
          <th>Email</th>
          <th>Service name</th>
          <th>Details</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {!allList.length ? (
          <tr className="text-center">
            <td colSpan="5">
              <img src={preLoader} alt="" />
            </td>
          </tr>
        ) : (
          allList.map((list) => renderTableData(list, handleSelect))
        )}
      </tbody>
    </table>
  );
};

function renderTableData(list, handleSelect) {
  const { _id, name, email, service, description, status } = list;
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{service}</td>
      <td>{description}</td>
      <td>
        <select
          value={status}
          onChange={(e) => handleSelect(e, _id)}
          className="p-2"
          name="status"
          id="status"
        >
          <option value="pending">Pending</option>
          <option value="on going">On Going</option>
          <option value="done">Done</option>
        </select>
      </td>
    </tr>
  );
}

export default AdminServiceList;
