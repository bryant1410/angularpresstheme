/**
 * Created by ROGER on 17.01.14.
 */

'use strict';
angularpressApp.controller("angpPaginationCtrl", function ($scope, post, wpAjax) {

	var status = 'publish';
	var page = 1;//first page as default

	$scope.maxSize = 5;
	$scope.itemsPerPage = wpAjax.readingSettings.posts_per_page;
	$scope.currentPage = 2;

	$scope.pageChanged = function (newPage) {

		page = newPage;

		angular.element('.loading-spinner-posts').spin('large-widgets');
		$scope.is_link_visible = true;

		post.get_post_pagination(
			function (data) {
				$scope.posts = data.posts;
				$scope.numPages = data.pages;
				$scope.totalItems = data.count_total;

				angular.element('.loading-spinner-posts').spin(false);
				$scope.is_link_visible = false;

			}, status, page);

	}

});

angularpressApp.controller("angpPaginationCategoryCtrl", function ($scope, post, wpAjax, $route) {

	var status = 'publish';
	var page = 1;//first page as default

	$scope.maxSize = 5;
	$scope.itemsPerPage = wpAjax.readingSettings.posts_per_page;
	$scope.currentPage = 2;

	$scope.pageChanged = function (newPage) {

		page = newPage;

		angular.element('.loading-spinner-posts').spin('large-widgets');
		$scope.is_link_visible = true;

		post.get_post_pagination_category(
			function (data) {

				/** @namespace data.category */
				$scope.title = data.category.title;
				$scope.posts = data.posts;
				$scope.numPages = data.pages;
				/** @namespace data.category */
				$scope.totalItems = data.category.post_count;

				angular.element('.loading-spinner-posts').spin(false);
				$scope.is_link_visible = false;

			}, status, $route.current.params.secondaryNav, page);

	}

});

angularpressApp.controller("angpPaginationTagCtrl", function ($scope, post, wpAjax, $route) {

	var status = 'publish';
	var page = 1;//first page as default

	$scope.maxSize = 5;
	$scope.itemsPerPage = wpAjax.readingSettings.posts_per_page;
	$scope.currentPage = 2;

	$scope.pageChanged = function (newPage) {

		page = newPage;

		angular.element('.loading-spinner-posts').spin('large-widgets');
		$scope.is_link_visible = true;

		post.get_post_pagination_tag(
			function (data) {

				/** @namespace data.category */
				$scope.title = data.tag.title;
				$scope.posts = data.posts;
				$scope.numPages = data.pages;
				/** @namespace data.category */
				$scope.totalItems = data.tag.post_count;

				angular.element('.loading-spinner-posts').spin(false);
				$scope.is_link_visible = false;

			}, status, $route.current.params.secondaryNav, page);

	}

});

angularpressApp.controller("angpPaginationArchiveCtrl", function ($scope, post, wpAjax, $route) {

	var status = 'publish';
	var page = 1;//first page as default

	$scope.maxSize = 5;
	$scope.itemsPerPage = wpAjax.readingSettings.posts_per_page;
	$scope.currentPage = 2;

	$scope.pageChanged = function (newPage) {

		page = newPage;

		angular.element('.loading-spinner-posts').spin('large-widgets');
		$scope.is_link_visible = true;

		post.get_post_pagination_archive(
			function (data) {

				$scope.titleMonthYear = data.posts[0].date;
				$scope.titleYear = $route.current.params.primaryNav;

				$scope.posts = data.posts;
				$scope.numPages = data.pages;
				/** @namespace data.category.count_total */
				$scope.totalItems = data.count_total;

				angular.element('.loading-spinner-posts').spin(false);
				$scope.is_link_visible = false;

			}, status, $route.current.params.primaryNav, $route.current.params.secondaryNav, page);

	}

});