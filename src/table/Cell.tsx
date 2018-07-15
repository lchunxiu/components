import React, { Component } from 'react'

export interface CellProps {
    children?: React.ReactNode,
}

class Cell extends Component<CellProps,{}>{
    render(){
        const {children} = this.props;
        return <td>
            {children}
        </td>
    }
}

export default Cell;