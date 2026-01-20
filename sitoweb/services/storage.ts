
import { AppConfig } from '../types';
import { INITIAL_DATA } from '../constants';

const STORAGE_KEY = 'maggioflix_content_v1';

export const saveConfig = (config: AppConfig) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
};

export const loadConfig = (): AppConfig => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return INITIAL_DATA;
  try {
    return JSON.parse(stored);
  } catch (e) {
    return INITIAL_DATA;
  }
};
