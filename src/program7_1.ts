import { User as R } from "./user"

 export class Data<R extends Identity>{
  private rows : Map<number, R>;

  constructor() {
    this.rows= new Map<number, R>
  }

  add(user: R){
    this.rows.set(user.id, user)
  }

  update(number: number, partialUser: Partial<R>) {
    const user = this.rows.get(number)
    if (user){
      const updatedUser = { ...user, ...partialUser };
      this.rows.set(number, updatedUser as R); 
    } else {
      throw new Error(`User with number ${number} does not exist.`);
    }
    }

    delete(user: R){
      if (this.rows.has(user.id)){
        this.rows.delete(user.id)
      } else{
        throw new Error(`User with number ${user.id} does not exist.`);
      }
    }

    get(number: number): R | undefined {
      return this.rows.get(number);
    }
  }