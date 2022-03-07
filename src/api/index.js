import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8090/',
});

/**
 * 공지사항 목록 조회
 * @param {*} params
 */
function getNoticeListAPI(params) {
  return instance.get('/notice/list', params);
}

/**
 * 공지사항 상세 조회
 * @param {*} params
 */
function getNoticeDetailAPI(params) {
  return instance.get('/notice/detail', params);
}

/**
 * 공지사항 작성
 * @param {*} params
 */
function insertNoticeAPI(params) {
  return instance.post('/notice/insert', null, params);
}

/**
 * 공지사항 수정
 * @param {*} params
 */
function updateNoticeAPI(params) {
  return instance.post('/notice/update', null, params);
}

/**
 * 공지사항 삭제
 * @param {*} params
 */
function deleteNoticeAPI(params) {
  return instance.post('/notice/delete', null, params);
}

/**
 * 게시글 목록 조회
 * @param {*} params
 */
function getBoardListAPI(params) {
  return instance.get('/board/list', params);
}

/**
 * 게시글 상세 조회
 * @param {*} params
 */
function getBoardDetailAPI(params) {
  return instance.get('/board/detail', params);
}

/**
 * 게시글 작성
 * @param {*} params
 */
function insertBoardAPI(params) {
  return instance.post('/board/insert', null, params);
}

/**
 * 게시글 수정
 * @param {*} params
 */
function updateBoardAPI(params) {
  return instance.post('/board/update', null, params);
}

/**
 * 게시글 삭제
 * @param {*} params
 */
function deleteBoardAPI(params) {
  return instance.post('/board/delete', null, params);
}

/**
 * 댓글 작성
 * @param {*} params
 */
function insertReplyAPI(params) {
  return instance.post('/board/reply/insert', null, params);
}

/**
 * 댓글 조회
 * @param {*} params
 */
function getReplyListAPI(params) {
  return instance.get('/board/reply/list', params);
}

/**
 * 댓글 수정
 * @param {*} params
 */
function updateReplyAPI(params) {
  return instance.post('/board/reply/update', null, params);
}

/**
 * 댓글 삭제
 * @param {*} params
 */
function deleteReplyAPI(params) {
  return instance.post('/board/reply/delete', null, params);
}

/**
 * 로그인
 * @param {*} params
 */
function loginAPI(params) {
  return instance.post('/user/login', null, params);
}

/**
 * 회원 가입
 * @param {*} params
 */
function signupUserAPI(params) {
  return instance.post('/user/signup', null, params);
}

/**
 * 아이디 중복 체크
 * @param {*} params
 */
function checkUserAPI(params) {
  return instance.get('/user/checkUser', params);
}

/**
 * 내 정보
 * @param {*} params
 */
function myDetailAPI(params) {
  return instance.get('/user/detail', params);
}

/**
 * 회원 수정
 * @param {*} params
 */
function updateUser(params) {
  return instance.post('/user/update', null, params);
}

/**
 * 회원 탈퇴
 * @param {*} params
 */
function deleteUser(params) {
  return instance.post('/user/delete', null, params);
}

/**
 * 나의 게시글 목록 조회
 * @param {*} params
 */
function getmyBoardListAPI(params) {
  return instance.get('/board/mylist', params);
}

/**
 * 회원 목록 조회
 * @param {*} params
 */
function getUserListAPI(params) {
  return instance.get('/user/list', params);
}

export {
  getNoticeListAPI,
  getNoticeDetailAPI,
  insertNoticeAPI,
  updateNoticeAPI,
  deleteNoticeAPI,
  getBoardListAPI,
  getBoardDetailAPI,
  insertBoardAPI,
  updateBoardAPI,
  deleteBoardAPI,
  insertReplyAPI,
  getReplyListAPI,
  updateReplyAPI,
  deleteReplyAPI,
  loginAPI,
  myDetailAPI,
  deleteUser,
  updateUser,
  checkUserAPI,
  signupUserAPI,
  getmyBoardListAPI,
  getUserListAPI,
};
