<template>
    <div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-row flex-column-fluid">

				<!--begin::Aside-->
                <base-sidbar></base-sidbar>
				<!--end::Aside-->

				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                    <base-navbar></base-navbar>
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<router-view></router-view>
					</div>

					<!--begin::Footer-->
                    <base-footer></base-footer>
					<!--end::Footer-->
				</div>
			</div>
		</div>
</template>

<script>
    import BaseNavbar from '../pages/admin/sections/Navbar.vue';
    import BaseSidbar from '../pages/admin/sections/Sidbar.vue';
    import BaseFooter from '../pages/admin/sections/Footer.vue';

    export default {
        components : {
            BaseNavbar,
            BaseSidbar,
            BaseFooter,
        }
    }
</script>