import { activityService } from '../../services/activityService.js'

export function loadActivities(filterBy={}) {
    return async dispatch => {
        const activities = await activityService.query(filterBy);
        dispatch({ type: 'SET_ACTIVITIES', activities })
      };
}

export function loadActivity(activityId){
  return async dispatch =>{
    const activity = await activityService.getById(activityId);
    dispatch({ type: 'SET_ACTIVITY', activity })
  }
}

export function removeActivity(activityId) {
    return async dispatch => {
        await activityService.remove(activityId)
        dispatch({ type: 'REMOVE_ACTIVITY', activityId })
      };
}

export function saveActivity(activity) {
    return async dispatch => {
        const actionType = activity._id ? 'EDIT_ACTIVITY' : 'ADD_ACTIVITY';
        const _activity = await activityService.save(activity);
        dispatch({ type: actionType, _activity })
      };
}

export function setSearchBy(searchBy) {
  return dispatch => {
      Promise.resolve().then(() => {
          dispatch({ type: 'SET_SEARCH', searchBy })
      })
  }
}