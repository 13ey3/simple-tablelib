const Datagrid = (options) => {
  const DATAGRID_DATA = {
    filter: {},
    sorting: {},
    pagination: { pageNumber: 0, pageSize: 10 },
  };
  const DATAGRID_URL = "";
  const DATAGRID_TABLE = "";
  const DATAGRID_ACTION = [];
  const DATAGRID_COLUMNS = [];
  const DATAGRID_ORDERS = [];
  const DATAGRID_SIZE = [5, 10, 25, 50, 100];
  const DATAGRID_NO_DATA_MESSAGE_HEADER = "Belum Ada Data Tersedia";
  const DATAGRID_NO_DATA_MESSAGE_DESCRIPTION =
    "Mohon maaf, sepertinya belum ada data yang dapat kami tampilkan";

  let params = {};
  _init();

  function _init() {
    // Set default values of parameters
    params = {
      url: options.url == null ? DATAGRID_URL : options.url,
      table: options.table == null ? DATAGRID_TABLE : options.table,
      data: options.data == null ? DATAGRID_DATA : options.data,
      action: options.action == null ? DATAGRID_ACTION : options.action,
      columns: options.columns == null ? DATAGRID_COLUMNS : options.columns,
      orders: options.orders == null ? DATAGRID_ORDERS : options.orders,
      size: DATAGRID_SIZE,
    };

    console.log(getTableId());
    createPagination(params.table);
  }

  function getTableId() {
      return "_" + params.table.substring();
  }

  function createPagination(existingNode) {
    let table = document.getElementById(existingNode);
    let containerPagination = document.createElement("div");
    let elHtml = `<div class="col">Data tampil 1 s/d 10</div>
        <div class="col">
            <div class="row justify-content-center">
                <div class="col-3">
                    <select class="form-select" aria-label=".form-select-sm">
                        <option value="1">5</option>
                        <option value="2">10</option>
                        <option value="3">15</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col">
            <nav class="pt-2">
            <ul class="pagination justify-content-end">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </div>`;

    containerPagination.className = "row align-items-center bg-warning";
    containerPagination.innerHTML = elHtml;

    table.parentNode.insertBefore(
      containerPagination,
      existingNode.nextSibling
    );
  }
};

export default Datagrid;
