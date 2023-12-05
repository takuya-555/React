import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface RowData {
  name: string;
  description: string;
  // Other row data properties
}

interface SwipeableTableRowProps {
  rowData: RowData;
}

const SwipeableTableRow: React.FC<SwipeableTableRowProps> = ({ rowData }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handlers = useSwipeable({
    onSwiping: ({ deltaX }) => {
      if (deltaX < -100) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    }
  });

  return (
    <tr {...handlers}>
      <td>{rowData.name}</td>
      <td>{rowData.description}</td>
      {/* Other row data */}
      <td>
        {showMenu && (
          <div className="menu">
            {/* Your menu content here */}
          </div>
        )}
      </td>
    </tr>
  );
};

export default function App() {
  const tableData: RowData[] = [
    { name: 'Item 1', description: 'Description 1' },
    { name: 'Item 2', description: 'Description 2' },
    // Add more data items
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          {/* Other table headers */}
          <th>Menu</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData, index) => (
          <SwipeableTableRow key={index} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
};
