/**
 * Self-contained service, ready to be extracted into a micro service if appropriate.
 *
 * All adapters such as database clients etc. should go into subfolders of the service,
 * not in a general top-level adapter folder to avoid service interdependencies (but of
 * course, there are always exceptions).
 */
import KoaRouter from '@koa/router'

import { getRentalProperty, getRoomTypes } from './adapters/contech-os-adapter'

import {
  getRoomTypeWithMaterialOptions,
  getMaterialOption,
  getMaterialChoicesByRoomTypes,
  getMaterialChoicesByApartmentId,
  saveMaterialChoices,
  getApartmentMaterialChoiceStatuses,
} from './adapters/material-options-adapter'
import { MaterialChoice } from '../../common/types'

/**
 * The routes of this service are exported as the routes object. The service can also have
 * other exports (named or default) to provide externally usable helper functions, types etc.
 */
export const routes = (router: KoaRouter) => {
  router.get('(.*)/rentalproperties/:id/material-options', async (ctx) => {
    const roomTypes = await getRoomTypes(ctx.params.id)
    const materialOptions = await getRoomTypeWithMaterialOptions(roomTypes)

    ctx.body = {
      roomTypes: materialOptions,
    }
  })

  router.get(
    '(.*)/rentalproperties/:id/material-options/:materialOptionId',
    async (ctx) => {
      const option = await getMaterialOption(ctx.params.materialOptionId)
      ctx.body = option
    }
  )

  router.get('(.*)/rentalproperties/:id/material-choices', async (ctx) => {
    const apartmentId = ctx.params.id
    const roomTypes = await getRoomTypes(apartmentId)
    const materialChoices = await getMaterialChoicesByRoomTypes(
      apartmentId,
      roomTypes
    )

    ctx.body = { roomTypes: materialChoices }
  })

  router.get('(.*)/rentalproperties/:id/material-choices-alt', async (ctx) => {
    const apartmentId = ctx.params.id
    const materialChoices = await getMaterialChoicesByApartmentId(apartmentId)

    ctx.body = { roomTypes: materialChoices }
  })

  // ?submitted=true|false
  router.get('(.*)/rentalproperties/material-choice-statuses', async (ctx) => {
    const apartmentChoiceStatuses = await getApartmentMaterialChoiceStatuses(
      ctx.params.projectCode
    )

    ctx.body = apartmentChoiceStatuses
  })

  router.post('(.*)/rentalproperties/:id/material-choices', async (ctx) => {
    const result = await saveMaterialChoices(
      ctx.params.id,
      ctx.request.body as Array<MaterialChoice>
    )
    ctx.body = result
  })

  router.get('(.*)/rentalproperties/:id', async (ctx) => {
    const responseData = await getRentalProperty(ctx.params.id)

    ctx.body = responseData
  })
}
