'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// 1. simple route
Route.get('about-us', ()=>{
  return 'about us';
}).as('about')

// 2. with a paramter
Route.get('view-records/:record_id', ({params})=>{
  return 'params.record_id';
}).as('view-some-records')


// 3. name the route...the naming part starts from the `as`
Route.get('special/', ()=>{

}).as('special')

Route.get('sightings/', 'SightingController.index')
Route.get('sightings/about', 'SightingController.about')
Route.get('sightings/details/:detail_id/view', 'SightingController.details')
