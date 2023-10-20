export const SIGNUP_REDIRECT_URL =
  `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_KEY}&redirect_uri=${process.env.KAKAO_LOGIN_REDIRECT_URL}&response_type=code&` +
  `scope=profile_nickname age_range`
