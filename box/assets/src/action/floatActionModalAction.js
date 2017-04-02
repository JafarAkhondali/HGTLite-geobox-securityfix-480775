let floatActionModalActions = {
    fetchFABModalByType:function( ){

             return function(dispatch, getState) {

                const state = getState();
                // console.log(state);

                // console.log(folderName);

            }
    },

    showFABModal: () => ({
        type: "SHOW_FAB_MODAL"
    }),
    hideFABModal: () => ({
        type: "HIDE_FAB_MODAL"
    })
}

export default floatActionModalActions;
