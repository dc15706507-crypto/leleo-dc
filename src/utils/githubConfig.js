// GitHub 配置
export const GITHUB_CONFIG = {
  OWNER: import.meta.env.VITE_GITHUB_OWNER || 'dc15706507-crypto',
  REPO: import.meta.env.VITE_GITHUB_REPO || 'leleo-dc',
  BRANCH: import.meta.env.VITE_GITHUB_BRANCH || 'main',
  APP_ID: import.meta.env.VITE_GITHUB_APP_ID || '3841210',
  FILE_PATH: 'src/config.js' // 要更新的配置文件路径
};

