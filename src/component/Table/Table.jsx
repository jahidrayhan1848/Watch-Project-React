import { RxCross2 } from "react-icons/rx";

const Table = ({ cart, idx }) => {
  // eslint-disable-next-line react/prop-types
  const { model, price, warranty } = cart;
  return (
    <tr>
      <th>{idx + 1}</th>
      <th>{model}</th>
      <th>{price}</th>
      <th>{warranty}</th>
      <th>
        <button>
          <RxCross2 />
        </button>
      </th>
    </tr>
  );
};

export default Table;
