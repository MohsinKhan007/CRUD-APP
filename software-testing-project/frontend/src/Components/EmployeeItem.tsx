import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Card, Button, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import IEmployee from '../Interfaces/Employee'

// Employee Detail iterative child component of EmployeeList Component. The Component iterates and provides the edit and delete functionality and view the selected employee

// Employee Item Props is the Props which is passed from EmployeeList Component (Parent Component)
interface EmployeeItemProps {
  employee: IEmployee
  deleteEmployee: (id: number) => void
}

const EmployeeItem = ({ employee, deleteEmployee }: EmployeeItemProps) => {
  const { id, name } = employee
  const handleDelete = () => {
    deleteEmployee(id)
  }

  return (
    <Card className="m-10">
      <div className="flex just-btw">
        <Tooltip placement="bottomLeft" title="Click to see details">
          <Link
            data-testid="EmployeeDetailLink"
            className="w-80"
            to={`/employee/${id}`}
          >
            <p
              data-testid="employeeDetailp"
              className="text-title text-a-l"
            >
              {' '}
              {name}{' '}
            </p>
          </Link>
        </Tooltip>
        <div className="w-18 flex just-btw align-center">
          <Link to={`/edit/${id}`}>
            <Button
              icon={<EditOutlined />}
              className="fontWeight w-100p"
              type="primary"
            >
              Edit{' '}
            </Button>{' '}
          </Link>
          <Button
            icon={<DeleteOutlined />}
            onClick={handleDelete}
            className="fontWeight bg-red text-c-white w-100p"
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default EmployeeItem
