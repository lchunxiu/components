import React from 'react'
import './table.less'

class Table extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="show-table-header" >
                    <table className="show-table">
                        <tbody>
                            <tr>
								<td style={{width:100}}>姓名</td>
								<td style={{width:100}}>年龄</td>
								<td style={{width:100}}>地址</td>
							</tr>
						</tbody>
                    </table>
                </div>
				<div className="show-table-body" >
					<table className="show-table">
						<tbody>
							<tr>
								<td style={{width:100}}>李雷雷</td>
								<td style={{width:100}}>23</td>
								<td style={{width:100}}>进洞里337号</td>
							</tr>
						</tbody>
					</table>
				</div>
			</React.Fragment>
		)
	}
}
export default Table
