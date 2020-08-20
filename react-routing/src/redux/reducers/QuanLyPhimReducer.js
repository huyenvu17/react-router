import { layDanhSachPhim } from "../type/QuanLyPhimType"

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {

    case layDanhSachPhim:
        return { ...state, ...payload }

    default:
        return state
    }
}
