import { EventEmitter, Injectable, Output } from '@angular/core';
import { Dog } from '../models/dog';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class DogkeeperService {

  @Output() userLoggedIn = new EventEmitter<boolean>();
  myDogArray:Dog[] = [];
  userArray:Users[]=[{
    userId:'jose',
    password:'password',
    fullName:'Jose Gomez'
  }];
  currentUser:Users|undefined;  
  constructor() {
    this.myDogArray=[];
    this.myDogArray.push(new Dog('Fido','Lab',6,false,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQrv7kYoTL443HH05XANWLUvBnzWVAyr48lzIW5eE2IQRn8CXXN21jUckSp1hMeJLNHE&usqp=CAU'));
    this.myDogArray.push(new Dog('Sadie','Pit',14,true,'https://s.abcnews.com/images/GMA/sadie-rescue-dog-01-wabc-jef-190213_hpMain_16x9_992.jpg'));
    this.myDogArray.push(new Dog('Bandit','Australian Shepperd',7,true,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8s7eJG76fZdT3aIVA2TZOjbn92QD-zf6C4IMFKIc&s'));
    this.myDogArray.push(new Dog('Fifi','German Shepperd',1,true,'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MDcyMTY0NTk1NTQxNDQ5/german-shepherd-puppy-guide.jpg'));
   }

  GetDogs()
  {
    return this.myDogArray;
  }

  AddDog(dog:Dog)
  {
    this.myDogArray.push(dog);
  }

  Login(userId:string, pwd:string)
  {
    let foundUser=this.userArray.find(u=>u.userId==userId && u.password==pwd);
    if(foundUser)
    {
      this.currentUser=foundUser;
      this.userLoggedIn.emit(true);
      return foundUser.fullName;
    }
    else
    {
      return false;
    }
  }

  GetCurrentUser()
  {
    return this.currentUser;
  }

  LogoutUser()
  {
    this.currentUser=undefined;
    this.userLoggedIn.emit(false);
  }

}
