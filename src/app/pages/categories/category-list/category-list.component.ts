import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

import {Category} from '../shared/category.model';
import {CategoryService} from '../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => alert("Erro ao carregar as categorias")
    )
  }

  deleteCategory(category){
    const mustDelete= confirm('Deseja exluir este item?')
    if(mustDelete){
      this.categoryService.delete(category.id).subscribe(
        () => this.categories = this.categories.filter(element => element != category),
        () => alert("Erro ao tentar excluir")
      )
    }

    
  }

}
