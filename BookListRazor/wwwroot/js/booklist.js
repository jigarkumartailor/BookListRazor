var dataTable;

$(document).ready(function() {
    loadDatatable();
})

function loadDatatable() {
    datatable = $('#DT_load').dataTable({
        "ajax": {
            "url": "/api/Book",
            "type": "GET",
            "datatype": "JSON"
        },
        "columns": [
            { "data": "name", "width": "20%" },
            { "data": "author", "width": "20%" },
            { "data": "isbn", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return ` <div class="text-center">
                    <a href="/BookList/Edit?id=${data}" class='btn btn-success btn-sm text-white' style='cursor:pointer;width:70px'>
                    Edit
                    </a>
                    &nbsp;
                    <a class='btn btn-danger btn-sm text-white' style='cursor:pointer;width:70px'>
                    Delete
                    </a>
                </div>`;
                }, "width": "40%"
            }
        ],
        "language": {
            "emptyTable": "No data found"
        },
        "width": "100%"
    });
}