// @flow


type Genres = {
    _id: string,
    genre: string,
};

export type PropsType = {
    handleChange: Function,
    book: Object,
    handleChangeSelect: Function,
    handleSave: Function,
    genres: Array<Genres>,
};