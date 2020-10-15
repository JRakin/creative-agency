import React, { useEffect, useState } from 'react';

const AdminServiceList = () => {
  const [allList, setAllList] = useState([]);

  useEffect(() => {
    fetch('https://aqueous-reef-82491.herokuapp.com/getAllOrders')
      .then((res) => res.json())
      .then((data) => {
        setAllList(data);
      });
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Email</th>
            <th>Service name</th>
            <th>Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{allList.map((list) => renderTableData(list))}</tbody>
      </table>
    </div>
  );
};

function renderTableData(list, handleDelete) {
  const { _id, name, email, service, description, status } = list;
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{service}</td>
      <td>{description}</td>
      <td>
        <select className="p-2" name="status" id="">
          <option value="pending">Pending</option>
          <option value="On going">On Going</option>
          <option value="Done">Done</option>
        </select>
      </td>
    </tr>
  );
}

export default AdminServiceList;
