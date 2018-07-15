import React , { Component } from 'react'
import './table.less'

class Table extends Component {
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
				<div className="show-table-body" style={{width:317,height:100,overflowY:'auto'}}>
					<table className="show-table">
						<tbody>
							<tr>
								<td style={{width:100}}>李雷雷</td>
								<td style={{width:100}}>23</td>
								<td style={{width:100}}>进洞里337号</td>
							</tr>
							<tr>
								<td style={{width:100}}>李雷雷</td>
								<td style={{width:100}}>23</td>
								<td style={{width:100}}>进洞里337号</td>
							</tr>
							<tr>
								<td style={{width:100}}>李雷雷</td>
								<td style={{width:100}}>23</td>
								<td style={{width:100}}>进洞里337号</td>
							</tr>
							<tr>
								<td style={{width:100}}>李雷雷</td>
								<td style={{width:100}}>23</td>
								<td style={{width:100}}>进洞里337号</td>
							</tr>
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
