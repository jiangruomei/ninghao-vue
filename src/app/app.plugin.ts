import { Plugin } from 'vuex';
import { RootState } from '@/app/app.store';
import store from '../user/user.store';

export const logger: Plugin<RootState> = store => {
  store.subscribe((mutation, state) => {
    // console.log('logger: ', mutation, state);
    if (mutation.type === 'user/setCurrentUser') {
      console.log(`当前用户变成了：${mutation.payload}`);
    }
  });
};
