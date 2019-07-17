export const logger = ({ getState }) => next => action => {
  console.group(`ACTION TYPE: ${action.type}`);
    console.log('STATE', getState());
      next(action);
    console.log('NEXT STATE', getState());
  console.groupEnd()
};