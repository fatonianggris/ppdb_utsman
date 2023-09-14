<head>
    <base href="">
    <meta charset="utf-8" />
    <title>Sistem PPDB | Sekolah Utsman</title>
    <meta name="description" content="Metronic admin dashboard live demo. Check out all the features of the admin panel. A large number of settings, additional services and widgets." />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="canonical" href="https://keenthemes.com/metronic" />
    <!--begin::Fonts-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
    <!--end::Fonts-->
    <!--begin::Page Vendors Styles(used by this page)-->
    <link href="<?php echo base_url(); ?>assets/ppdb/dist/assets/css/pages/wizard/wizard-2.css" rel="stylesheet" type="text/css">
    <link href="<?php echo base_url(); ?>assets/ppdb/dist/assets/css/pages/fonts/dropify.css" rel="stylesheet" type="text/css" />

    <!--end::Page Vendors Styles-->
    <!--begin::Global Theme Styles(used by all pages)-->
    <link href="<?php echo base_url(); ?>assets/ppdb/dist/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>assets/ppdb/dist/assets/plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>assets/ppdb/dist/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
    <!--end::Global Theme Styles-->
    <!--end::Layout Themes-->
    <link rel="shortcut icon" href="<?php echo base_url(); ?>assets/ppdb/dist/assets/media/logos/favicon.ico" />
    <style>
		.g-recaptcha {
			display: inline-block;
		}
		#recaptcha_confirm > div {
			margin: 0 auto .5em;
		}
        .select2-container {
            box-sizing: border-box;
            display: block;
            margin: 0;
            position: relative;
            vertical-align: middle;
        }
        .select2-container--default .select2-selection--single,
        .select2-container--default .select2-selection--multiple {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #E4E6EF;
            outline: none !important;
            border-radius: 0.42rem;
            height: auto;
            line-height: 0;
            padding: 0.43rem 0.42rem;
            background: #F3F6F9;
        }
        .blockMsg {
            max-width: 75px;
        }

    </style>
	<script src='https://www.google.com/recaptcha/api.js'></script>
    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
    <?php $key = $this->db->get_where('third_party_ppdb', array('id_third_party_ppdb' => 1))->result(); ?>
    <script>
        var OneSignal = window.OneSignal || [];
        var initConfig = {
            appId: "<?php echo $key[0]->onesignal_app_id_ppdb; ?>",
            safari_web_id: "<?php echo $key[0]->onesignal_app_id_ppdb_safari; ?>",
            notifyButton: {
                enable: true,
                size: 'medium', /* One of 'small', 'medium', or 'large' */
                theme: 'default', /* One of 'default' (red-white) or 'inverse" (white-red) */
                position: 'bottom-left',
                text: {
                    'tip.state.unsubscribed': 'Kilk untuk mendapatkan notifikasi',
                    'tip.state.subscribed': "Anda telah mengaktifkan notifikasi",
                    'tip.state.blocked': "Anda memblokir notifikasi",
                    'message.prenotify': 'Kilk untuk mendapatkan notifikasi',
                    'message.action.subscribed': "Terima kasih telah menambahkan notifikasi!",
                    'message.action.resubscribed': "Anda telah mengaktifkan notifikasi",
                    'message.action.unsubscribed': "Anda tidak akan mendapatkan notifikasi",
                    'dialog.main.title': 'KELOLA NOTIFIKASI',
                    'dialog.main.button.subscribe': 'AKTIFKAN',
                    'dialog.main.button.unsubscribe': 'NON-AKTIFKAN',
                    'dialog.blocked.title': 'Unblock Notifikasi',
                    'dialog.blocked.message': "Ikuti intruksi untuk mengaktifkan notifikasi:"
                },
            },
        };
        OneSignal.push(function () {
            OneSignal.SERVICE_WORKER_PARAM = {scope: '/push/onesignal/'};
            OneSignal.SERVICE_WORKER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
            OneSignal.SERVICE_WORKER_UPDATER_PATH = 'push/onesignal/OneSignalSDKUpdaterWorker.js'
            OneSignal.init(initConfig);
        });
    </script>
</head>
<!--begin::Global Theme Bundle(used by all pages)-->
<script src="<?php echo base_url(); ?>assets/ppdb/dist/assets/plugins/global/plugins.bundle.js"></script>
<script src="<?php echo base_url(); ?>assets/ppdb/dist/assets/plugins/custom/prismjs/prismjs.bundle.js"></script>
<script src="<?php echo base_url(); ?>assets/ppdb/dist/assets/js/scripts.bundle.js"></script>
