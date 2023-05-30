const getApi = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }
  async function fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { token } } = responseJson;

    return token;
  }

  async function getOwnProfile() {
    const response = await fetchWithAuth(`${BASE_URL}/users/me`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }

  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { users } } = responseJson;

    return users;
  }

  async function getAllThreads() {
    const response = await fetch(`${BASE_URL}/threads`);

    const responseJson = await response.json();
    console.log(responseJson);
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { threads } } = responseJson;

    return threads;
  }

  async function getThreadDetail(id) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { detailThread } } = responseJson;

    return detailThread;
  }

  async function createThread({ text, replyTo = '' }) {
    const response = await fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        replyTo,
      }),
    });

    const responseJson = await response.json();
    console.log(responseJson);
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { talk } } = responseJson;

    return talk;
  }

  async function toggleLikeThread(id) {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${id}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseJson = await response.json();
    console.log(responseJson);
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
  }

  async function toggleUnLikeThread(id) {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${id}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseJson = await response.json();
    console.log(responseJson);
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }
  }
  return {
    getAccessToken,
    putAccessToken,
    register,
    login,
    getOwnProfile,
    getAllThreads,
    getThreadDetail,
    createThread,
    toggleLikeThread,
    toggleUnLikeThread,
    getAllUsers,
  };
})();

export default getApi;
