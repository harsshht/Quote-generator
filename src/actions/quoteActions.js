export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';

export const fetchTagsSuccess = (tags) => ({
  type: FETCH_TAGS_SUCCESS,
  payload: tags,
});

export const fetchTags = () => {
  return (dispatch) => {
    fetch('https://api.quotable.io/tags')
      .then((res) => res.json())
      .then((tags) => {
        dispatch(fetchTagsSuccess(tags));
      })
      .catch((error) => {
        console.error('Error fetching tags:', error);
      });
  };
};
