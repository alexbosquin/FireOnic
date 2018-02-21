import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ModelTodo, NameTodo } from '../../models/todo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todoCollection: AngularFirestoreCollection<ModelTodo>;
  todo: Observable<ModelTodo[]>

  constructor(public navCtrl: NavController,
    private angularFirestore: AngularFirestore) {  }

  ionViewDidEnter(){
    this.todoCollection = this.angularFirestore.collection(NameTodo.collection,
    ref => ref.orderBy(NameTodo.priority)
  )
    this.todo = this.todoCollection.valueChanges();
  }

}
