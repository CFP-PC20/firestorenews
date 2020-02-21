import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  documentID
  posts = [];

  constructor(private fs : ServicioService) { }

  ngOnInit(): void {
    this.fs.getPosts().subscribe((ps) => {
      this.posts = [];
      ps.forEach((p) => {
        this.posts.push({
          id: p.payload.doc.id,
          data: p.payload.doc.data()
        })
      })
    })
  }

  newPostForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    titulo: new FormControl('', Validators.required),
    noticia: new FormControl('', Validators.required),
    foto: new FormControl('', Validators.required),
  })

  addPost(form, documentID = this.documentID) {
    this.fs.createPost({
      titulo: form.titulo,
      noticia: form.noticia,
      foto: form.foto
    }).then(() => {
      this.newPostForm.setValue({
        id: "",
        titulo: "",
        noticia: "",
        foto: ""
      })
    })
  }
}
