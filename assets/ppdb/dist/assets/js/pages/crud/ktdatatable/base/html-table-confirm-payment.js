/******/ (() => { // webpackBootstrap
    /******/ 	"use strict";
	var __webpack_exports__ = {};
	/*!*****************************************************************!*\
	 !*** ../demo1/src/js/pages/crud/ktdatatable/base/html-table.js ***!
	 \*****************************************************************/

	// Class definition

	var KTDatatableHtmlTableDemo = function () {
		// Private functions

		// demo initializer
		var demo = function () {

			var datatable = $('#kt_datatable_confirm_payment').KTDatatable({
				sortable: false,
				data: {
					saveState: { cookie: false },
					pageSize: 5
				},
				search: {
					input: $('#kt_datatable_search_query'),
					key: 'generalSearch',
				},
				layout: {
					class: 'datatable-bordered datatable-head-custom',
				},
				columns: [{
					field: 'No Daftar',
					title: 'No Daftar',
					width: 55,
					type: 'number',
					autoHide: false
				},
				{
					field: 'Nama Calon',
					title: 'Nama Calon',
					width: 200,
					autoHide: false
				},
				{
					field: 'JK',
					title: 'JK',
					width: 40,
					template: function (row) {
						var status = {
							1: {
								'title': 'L',
								'class': 'label-light-warning'
							},
							2: {
								'title': 'P',
								'class': 'label-light-success'
							}
						};
						return '<span class="label font-weight-bold label-lg ' + status[row.JK].class + ' label-inline">' + status[row.JK].title + '</span>';
					},
				},
				{
					field: 'Jenjang',
					title: 'Jenjang',
					width: 65,
					template: function (row) {
						var status = {
							1: {
								'title': 'KB',
								'class': 'label-light-info'
							},
							2: {
								'title': 'TK',
								'class': 'label-light-primary'
							},
							3: {
								'title': 'SD',
								'class': 'label-light-success'
							},
							4: {
								'title': 'SMP',
								'class': 'label-light-warning'
							},
							5: {
								'title': 'KB-TK',
								'class': 'label-light-danger'
							},
							6: {
								'title': 'DC',
								'class': 'label-light-default'
							}
						};
						return '<span class="label font-weight-bold label-lg ' + status[row.Jenjang].class + ' label-inline">' + status[row.Jenjang].title + '</span>';
					},
				},
				{
					field: 'Program',
					title: 'Program',
					width: 75,
					template: function (row) {
						var status = {
							1: {
								'title': 'REGULER',
								'class': 'label-light-info'
							},
							2: {
								'title': 'ICP',
								'class': 'label-light-success'
							}
						};
						return '<span class="label font-weight-bold label-lg ' + status[row.Program].class + ' label-inline">' + status[row.Program].title + '</span>';
					},
				},
				{
					field: 'Verifikasi',
					title: 'Verifikasi',
					width: 130,
					template: function (row) {
						var status = {
							1: {
								'title': 'PROSES VERIFIKASI',
								'class': 'label-light-warning'
							},
							2: {
								'title': 'DISETUJUI',
								'class': 'label-light-success'
							},
							3: {
								'title': 'DITOLAK',
								'class': 'label-light-danger'
							}

						};
						return '<span class="label font-weight-bold label-lg ' + status[row.Verifikasi].class + ' label-inline">' + status[row.Verifikasi].title + '</span>';
					},
				},
				{
					field: 'No Whatsapp',
					title: 'No Whatsapp',
					width: 110,
					type: 'number',
				},
				{
					field: 'Voucher',
					title: 'Voucher',
					width: 80,
					template: function (row) {
						if (row.Voucher == '') {
							return '<span class="label font-weight-bold label-lg label-light-warning label-inline">KOSONG</span>';
						} else {
							return '<span class="label font-weight-bold label-lg label-light-success label-inline">' + row.Voucher + '</span>';
						}
					}
				},
				{
					field: 'TA',
					title: 'TA',
					width: 70,
				},
				{
					field: 'Masuk',
					title: 'Masuk',
					width: 85,
					template: function (row) {
						return '<span class="label font-weight-bold label-lg label-light-default label-inline">' + row.Masuk + '</span>';
					}
				},
				]
			});

			var th = $('#kt_datatable_search_schoolyear').find("option:selected");
			datatable.search(th.val().toLowerCase(), 'TA');
			datatable.sort('No Daftar', 'desc');

			$('#kt_datatable_search_grade').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Jenjang');
			});

			$('#kt_datatable_search_program').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Program');
			});

			$('#kt_datatable_search_gender').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'JK');
			});

			$('#kt_datatable_search_verification').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'Verifikasi');
			});

			$('#kt_datatable_search_schoolyear').on('change', function () {
				datatable.search($(this).val().toLowerCase(), 'TA');
			});

			$('#kt_datatable_search_grade', '#kt_datatable_search_program', '#kt_datatable_search_gender', '#kt_datatable_search_verification', '#kt_datatable_search_schoolyear').selectpicker();
		};

		return {
			// Public functions
			init: function () {
				// init dmeo
				demo();
			},
		};
	}();

	jQuery(document).ready(function () {
		KTDatatableHtmlTableDemo.init();
	});

	/******/
})()
	;
//# sourceMappingURL=html-table.js.map
