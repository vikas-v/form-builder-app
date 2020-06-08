import React from 'react'
import moment from 'moment'

const FormsList = ({ ...props }) => (
	<div className="card w-100">
		<div className="card-body">

			<h2 className="text-center">Forms</h2>
			<p className="pull-right">Total Forms: {props.forms ? props.forms.length : 0}</p>
			{props.forms && props.forms.length ? (
				<table className="table table-bodered">
					<thead>
						<tr>
							<td>S.No.</td>
							<td>Title</td>
							<td>Slug Url</td>
							<td>Created At</td>
							<td>Total Responses</td>
						</tr>
					</thead>
					<tbody>
						{props.forms && props.forms.map((form, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{form.title}</td>
								<td><a href={`/form/${form.slug}`} target="_black">open</a></td>
								<td>{moment(form.created).format('dddd Do MMMM YYYY HH:mm:ss')}</td>
								<td>{form.response_count}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : <p className="alert alert-info text-center">No Form available!</p>}
		</div>
	</div>
);

export default FormsList;