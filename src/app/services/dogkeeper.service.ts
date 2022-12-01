import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dog } from '../models/dog';
import { DogHandler } from '../models/dogHandler';
import { Token } from '../models/token';
import { Users } from '../models/users';
import { of } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class DogkeeperService {

  @Output() userLoggedIn = new EventEmitter<boolean>();
  @Output('CurrentRoute') currRoute= new EventEmitter<string>();
  @Output('XClusiveEvent') XClusive= new EventEmitter<string>();
  myDogArray:Dog[] = [];
 
  currentUser:Token|undefined;  
  constructor(private httpClient:HttpClient) {
    this.myDogArray=[];
    this.myDogArray.push(new Dog('Fido','Lab',6,false,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQrv7kYoTL443HH05XANWLUvBnzWVAyr48lzIW5eE2IQRn8CXXN21jUckSp1hMeJLNHE&usqp=CAU'));
    this.myDogArray.push(new Dog('Sadie','Pit',14,true,'https://s.abcnews.com/images/GMA/sadie-rescue-dog-01-wabc-jef-190213_hpMain_16x9_992.jpg'));
    this.myDogArray.push(new Dog('Bandit','Australian Shepperd',7,true,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8s7eJG76fZdT3aIVA2TZOjbn92QD-zf6C4IMFKIc&s'));
    this.myDogArray.push(new Dog('Fifi','German Shepperd',1,true,'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MDcyMTY0NTk1NTQxNDQ5/german-shepherd-puppy-guide.jpg'));
    let tokenInstance = localStorage.getItem('token');
    this.currentUser = tokenInstance?JSON.parse(tokenInstance):null;
    if(this.currentUser)
    {
      var decoded = jwt_decode(this.currentUser.token);
      console.log(decoded);
    }
  }

  GetDogs()
  {
    return this.myDogArray;
  }

  AddDog(dog:Dog)
  {
    this.myDogArray.push(dog);
    let myCurrentTokenString=localStorage.getItem('token');
    let header=new HttpHeaders();
    if(myCurrentTokenString)
    {
      let myCurrentTokenObj: Token = JSON.parse(myCurrentTokenString) as Token;
      
      header=header.set('Authorization',`Bearer ${myCurrentTokenObj.token}`);
      
    }
    return this.httpClient.post(`${environment.serverEndpoint}/Dog`,dog,{headers:header});
    
    
  }

  Login(userId:string, pwd:string)
  {
    return this.httpClient.post<Token>(`${environment.serverEndpoint}/Handler/login`,{userName:userId,password:pwd});
  }

  SetCurrentUser(token:Token)
  {
    this.currentUser = token;
    localStorage.setItem('token',JSON.stringify(token));
    this.userLoggedIn.emit(true);
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

  CreateHandler(name:String,userName:String,password:String)
  {
    let newUser= {name:name,userName:userName,password:password};

    return this.httpClient.post<DogHandler>(`${environment.serverEndpoint}/handler`,newUser);
  }

}
