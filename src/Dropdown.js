import React from 'react'
import { Dropdown } from "@nextui-org/react";

function DropdownComp(props) {
  return (
    <div>

        <Dropdown>
            <Dropdown.Button light>
              PRODUCTS
            </Dropdown.Button>
            <Dropdown.Menu
              variant="light"
              aria-label="Actions"
            >
              <Dropdown.Item key="new">{props.op1}</Dropdown.Item>
              <Dropdown.Item key="copy">{props.op2}</Dropdown.Item>
              <Dropdown.Item key="edit">{props.op3}</Dropdown.Item>
              <Dropdown.Item key="delete">{props.op4}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}

export default DropdownComp