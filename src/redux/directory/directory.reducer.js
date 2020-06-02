const INITIAL_STATE = {

  sections: [

    {
      title: "Blu-Ray",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Blu_ray_logo.png",
      size: "large",
      id: 4,
      linkUrl: "hats"
    },
    {
      title: "Bande Dessinée",
      imageUrl: "https://pngimage.net/wp-content/uploads/2018/05/bande-dessin%C3%A9e-png-6.png",
      size: "large",
      id: 5,
      linkUrl: ""
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    default:

      return state;
  }
};

export default directoryReducer;