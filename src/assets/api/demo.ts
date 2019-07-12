// const base = process.env.NODE_ENV === 'production'
//     ? '/vue-ts/static/api/'
//     : '/static/api/';
import axios from '@/utils/axios';
// demo列表接口
export function findCourseList(params) {
    return axios.requestGet('server/api/platform/v6/education/findCourseList', params).then((res) => res.data);
}
// demo详情接口
export function findCourseDetail(params) {
    return axios.requestGet('server/api/platform/v6/education/findCourseDetail', params).then((res) => res.data);
}
