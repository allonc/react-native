import {makeAutoObservable, action} from 'mobx';
class RootStore {
  name = 'niko';
  constructor() {
    makeAutoObservable(this);
  }

  @action
  changeName(name) {
    console.log(name);
    this.name = name;
  }
}
export default new RootStore();
