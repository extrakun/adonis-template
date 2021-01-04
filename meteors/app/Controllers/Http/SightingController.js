'use strict'

class SightingController {
  index({ response }) {
    // let response = context.response;
    // context.response
    // return "SightingController.index"

    return response.json({
      "sightings": [
        {
          "date": "22/01/2020",
          "coordinate": {
            "lat": 1.07,
            "lng": 2.02
          }
        }
      ]
    })
  }

  about(c) {
    return c.view.render('sighting-index')
  }

  details({params, view}) {
    let detailId = params.detail_id;
    return view.render('sighting-details', {
      'xyz': detailId
    })
  }

  details2(context){
    let detailId = context.params.detail_id;
    return context.view.render('sighting-details')
  }
}

module.exports = SightingController
